import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Use the ZenQuotes CORS proxy
    const response = await fetch('https://zenquotes.io/api/random', {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    const data = await response.json();
    
    return NextResponse.json({
      content: data[0].q,
      author: data[0].a,
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quote' },
      { status: 500 }
    );
  }
}
