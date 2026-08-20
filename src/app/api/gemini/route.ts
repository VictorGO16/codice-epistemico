import { NextRequest, NextResponse } from 'next/server';
import { generateText, hasApiKey } from '@/lib/ai/client';
import { MODEL_ROUTER } from '@/lib/ai/models';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!hasApiKey()) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    const text = await generateText({
      model: MODEL_ROUTER,
      turns: [{ role: 'user', text: prompt }],
    });

    return NextResponse.json({
      response: text,
      success: true,
    });

  } catch (error: unknown) {
    console.error('Gemini API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        details: error instanceof Error ? error.message : 'Unknown error',
        success: false,
      },
      { status: 500 }
    );
  }
}