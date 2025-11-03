'use client';

import { useEffect, useState } from 'react';

interface Verse {
  reference: string;
  text: string;
}

export default function BibleVerse() {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/bible-verse');

        if (!response.ok) {
          throw new Error('Failed to fetch verse');
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setVerse({ reference: data.reference, text: data.text });
        setError(false);
      } catch (err) {
        console.error('Error fetching verse:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchVerse();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="animate-pulse text-gray-400">Loading verse...</div>
      </div>
    );
  }

  if (error || !verse) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="text-gray-500 italic">Verse of the day unavailable</div>
      </div>
    );
  }

  return (
    <div className=" mx-auto px-6 py-6">
      <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-200/50">
        <div className="text-center">
          <blockquote className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 italic leading-relaxed mb-3">
            "{verse.text}"
          </blockquote>
          <cite className="block text-sm text-blue-600 dark:text-blue-400 font-semibold not-italic">
            — {verse.reference}
          </cite>
        </div>
      </div>
    </div>
  );
}
