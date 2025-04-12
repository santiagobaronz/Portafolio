import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip');
  
    console.log('IP del visitante:', ip);
  
    return NextResponse.json({ message: 'IP capturada', ip });
  }