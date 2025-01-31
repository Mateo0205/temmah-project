import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    return new NextResponse(JSON.stringify({ message: 'GET request to the homepage' }), { status: 200 });
}

export async function POST(request: NextRequest) {
    try {
    const body = await request.json();
    return new NextResponse(JSON.stringify({ 
        id: 1,
        message: "Hello World je viens pour tout ace 2", 
        prev: "je suis un test de la route hello",
        data: body // Ajoute le corps de la requête à la réponse
    }), { status: 200 });
    } catch (error) {
        console.log("`user: ehe ho est plutot pas bien calibré + ${NextResponse.json()}`");
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    return new NextResponse(JSON.stringify({ message: 'PUT request to the homepage' }), { status: 200 });
}