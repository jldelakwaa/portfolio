import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Using Bible API - get verse of the day
    const response = await fetch('https://beta.ourmanna.com/api/v1/get/?format=json', {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Bible verse');
    }

    const data = await response.json();
    
    return NextResponse.json({
      reference: data.verse.details.reference,
      text: data.verse.details.text,
    });
  } catch (error) {
    console.error('Error fetching Bible verse:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Bible verse' },
      { status: 500 }
    );
  }
}
