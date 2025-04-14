import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST() {

  try {
    const keys = await redis.keys("cloudinary:list:*");
    if (keys.length) {
      await redis.del(...keys);
      console.log(`🧹 Cache limpiado: ${keys.length} claves eliminadas`);
    } else {
      console.log("✅ No había claves que limpiar");
    }

    return NextResponse.json({ message: "Cache limpiado" }, { status: 200 });
  } catch (error) {
    console.error("❌ Error al limpiar cache", error);
    return NextResponse.json({ error: "Error limpiando cache" }, { status: 500 });
  }
}
