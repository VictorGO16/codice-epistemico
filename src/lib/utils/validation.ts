import { ValidationError } from '@/types/ui';

// Validation utility functions
export const validateRequired = (value: string, fieldName: string): ValidationError | null => {
  if (!value || value.trim().length === 0) {
    return {
      field: fieldName,
      message: `${fieldName} es requerido`
    };
  }
  return null;
};

export const validateMinLength = (value: string, minLength: number, fieldName: string): ValidationError | null => {
  if (value.length < minLength) {
    return {
      field: fieldName,
      message: `${fieldName} debe tener al menos ${minLength} caracteres`
    };
  }
  return null;
};

export const validateMaxLength = (value: string, maxLength: number, fieldName: string): ValidationError | null => {
  if (value.length > maxLength) {
    return {
      field: fieldName,
      message: `${fieldName} no puede exceder ${maxLength} caracteres`
    };
  }
  return null;
};

export const validateParticipantCount = (count: number): ValidationError | null => {
  if (count < 2) {
    return {
      field: 'participants',
      message: 'Debes seleccionar al menos 2 participantes'
    };
  }
  if (count > 5) {
    return {
      field: 'participants',
      message: 'No puedes seleccionar más de 5 participantes'
    };
  }
  return null;
};

// Debate validation
export const validateDebateSetup = (topic: string, participantIds: string[]): ValidationError[] => {
  const errors: ValidationError[] = [];
  
  const topicError = validateRequired(topic || '', 'Tema del debate');
  if (topicError) errors.push(topicError);
  
  if (topic && topic.trim()) {
    const topicLengthError = validateMinLength(topic, 10, 'Tema del debate');
    if (topicLengthError) errors.push(topicLengthError);
  }
  
  const participants = participantIds || [];
  const participantError = validateParticipantCount(participants.length);
  if (participantError) errors.push(participantError);
  
  return errors;
};

// Paradigm lab validation
export const validateParadigmSetup = (paradigmId: string, objectOfStudy: string): ValidationError[] => {
  const errors: ValidationError[] = [];
  
  const paradigmError = validateRequired(paradigmId, 'Paradigma');
  if (paradigmError) errors.push(paradigmError);
  
  const objectError = validateRequired(objectOfStudy, 'Objeto de estudio');
  if (objectError) errors.push(objectError);
  
  const objectLengthError = validateMinLength(objectOfStudy, 3, 'Objeto de estudio');
  if (objectLengthError) errors.push(objectLengthError);
  
  return errors;
};

// Chat validation
export const validateChatMessage = (message: string): ValidationError[] => {
  const errors: ValidationError[] = [];
  
  const messageError = validateRequired(message, 'Mensaje');
  if (messageError) errors.push(messageError);
  
  const lengthError = validateMaxLength(message, 1000, 'Mensaje');
  if (lengthError) errors.push(lengthError);
  
  return errors;
};