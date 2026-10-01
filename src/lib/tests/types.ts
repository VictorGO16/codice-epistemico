export interface TestOption {
  id: string;
  text: string;
  correct: boolean;
  feedback: string;
}

export interface TestQuestion {
  id: string;
  text: string;
  options: TestOption[];
}

export interface PracticeTest {
  id: string;
  title: string;
  questions: TestQuestion[];
}

export interface PracticeAttempt {
  optionId: string;
  correct: boolean;
  explanation: string;
  answeredAt: string;
}

export type QuestionStatus = 'unanswered' | 'in_progress' | 'solved' | 'revealed';

export interface PracticeQuestionState {
  status: QuestionStatus;
  attempts: PracticeAttempt[];
  everRevealed: boolean;
}

export interface PracticeRun {
  id: string;
  participantId: string;
  testId: string;
  startedAt: string;
  finishedAt: string | null;
  abandonedAt: string | null;
  questions: Record<string, PracticeQuestionState>;
}
