import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;


export async function GET(request: NextRequest) {
    const cursor = request.nextUrl.searchParams.get('cursor');
    const baseURL = 'https://api.cloudinary.com/v1_1/ds0os0yvg/resources/image';
    const fullURL = cursor ? `${baseURL}?max_results=12&next_cursor=${cursor}` : `${baseURL}?max_results=&context=true`;

    const auth = btoa(`${apiKey}:${apiSecret}`);

    const response = await fetch(fullURL, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${auth}`,
        },
    });

    const data = await response.json();

    return NextResponse.json({ data }, { status: 200 });
}