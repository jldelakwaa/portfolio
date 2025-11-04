'use client';

import { useEffect, useState } from 'react';

interface Quote {
    content: string;
    author: string;
}

export default function Quotes() {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/quote');

                if (!response.ok) {
                    throw new Error('Failed to fetch quote');
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                setQuote({ content: data.content, author: data.author });
                setError(false);
            } catch (err) {
                console.error('Error fetching quote:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchQuote();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="animate-pulse text-gray-600">Loading quote...</div>
            </div>
        );
    }

    if (error || !quote) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-gray-900 italic">Quote of the day unavailable</div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="text-center">
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 italic">
                    {quote.content}
                </blockquote>
                <cite className="block text-right text-gray-600 dark:text-gray-400 not-italic mt-2">
                    — {quote.author}
                </cite>
            </div>
        </div>
    );
}
