// app/api/imagenes/route.ts
import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { btoa } from "buffer";
import { performance } from "perf_hooks";

const apiKey = process.env.CLOUDINARY_API_KEY!;
const apiSecret = process.env.CLOUDINARY_API_SECRET!;
const auth = btoa(`${apiKey}:${apiSecret}`);
const CACHE_EXPIRATION_SECONDS = 60 * 60 * 24;

export async function GET(request: NextRequest) {
  const cursor = request.nextUrl.searchParams.get("cursor");
  const startTime = performance.now();

  const cacheKey = cursor ? `cloudinary:list:cursor_${cursor}` : `cloudinary:list:first`;

  const shortCursor = cursor ? cursor.slice(0, 6) : "first";
  
  const cached = await redis.get(cacheKey);
  if (cached) {
    const endTime = performance.now();
    const elapsedTime = (endTime - startTime).toFixed(2);
    console.log(`[CACHE] 🟢 [${shortCursor}] Llamando a cache. Tiempo: ${elapsedTime} ms`);
    return NextResponse.json({ data: cached }, { status: 200 });
  }

  console.log(`[FETCH] 🟡 [${shortCursor}] Llamando a Cloudinary...`);

  const baseURL = 'https://api.cloudinary.com/v1_1/ds0os0yvg/resources/image';
  const fullURL = cursor
    ? `${baseURL}?max_results=12&next_cursor=${cursor}`
    : `${baseURL}?max_results=12&context=true`;

  const response = await fetch(fullURL, {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${auth}`,
    },
  });

  const data = await response.json();

  await redis.set(cacheKey, data, { ex: CACHE_EXPIRATION_SECONDS });
  console.log(`[CACHE] 🧊 [${shortCursor}] Guardado en cache por ${CACHE_EXPIRATION_SECONDS}s`);

  const endTime = performance.now();
  const elapsedTime = (endTime - startTime).toFixed(2);
  console.log(`[FETCH] 🟡 [${shortCursor}] Finalizado en ${elapsedTime} ms`);

  return NextResponse.json({ data }, { status: 200 });
}
