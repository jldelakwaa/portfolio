import { NextResponse } from 'next/server';

// Fallback quotes in case the API fails
const fallbackQuotes = [
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    content: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    content: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    content: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    content: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  }
];

export async function GET() {
  try {
    // Use the ZenQuotes API
    const response = await fetch('https://zenquotes.io/api/random', {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();
    
    // Validate the response structure
    if (!data || !Array.isArray(data) || !data[0] || !data[0].q || !data[0].a) {
      throw new Error('Invalid API response structure');
    }
    
    return NextResponse.json({
      content: data[0].q,
      author: data[0].a,
    });
  } catch (error) {
    console.error('Error fetching quote from API:', error);
    
    // Return a random fallback quote
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    
    return NextResponse.json({
      content: randomQuote.content,
      author: randomQuote.author,
    });
  }
}
