import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL('https://thegrayzone.com/feed/');
    
    const articles = feed.items.slice(0, 10).map((item) => ({
      title: item.title || '',
      authors: item.creator || 'The Grayzone',
      date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) : '',
      excerpt: item.contentSnippet?.substring(0, 200) + '...' || '',
      url: item.link || '',
      source: 'grayzone',
      language: 'en'
    }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching Grayzone RSS:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
