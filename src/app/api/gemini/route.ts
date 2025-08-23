import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { prompt, model = 'gemini-pro' } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Get the generative model
    const geminiModel = genAI.getGenerativeModel({ model });

    // Generate content
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

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