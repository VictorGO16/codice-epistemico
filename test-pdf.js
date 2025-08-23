// Test script to verify PDF text cleaning
const testText = "Ø=ÞK &Bþ Consultante: Este es un párrafo mal espaciado con caracteres extraños Ã±Ã¡Ã©Ã­Ã³Ãº";

function cleanText(text) {
  return text
    // Fix common encoding issues
    .replace(/Ã±/g, 'ñ')
    .replace(/Ã¡/g, 'á')
    .replace(/Ã©/g, 'é')
    .replace(/Ã­/g, 'í')
    .replace(/Ã³/g, 'ó')
    .replace(/Ãº/g, 'ú')
    .replace(/Ã¿/g, 'ÿ')
    .replace(/Ã/g, 'Á')
    .replace(/Ã‰/g, 'É')
    .replace(/Ã/g, 'Í')
    .replace(/Ã"/g, 'Ó')
    .replace(/Ãš/g, 'Ú')
    .replace(/Ã¼/g, 'ü')
    .replace(/Ã§/g, 'ç')
    // Fix weird symbols
    .replace(/Ø=ÞK/g, '')
    .replace(/&Bþ/g, '')
    .replace(/[^\x20-\x7E\u00A0-\u024F\u1E00-\u1EFF]/g, '')
    // Fix quotes and dashes
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/…/g, '...')
    .replace(/[–—]/g, '-')
    // Clean up whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

console.log('Original:', testText);
console.log('Cleaned:', cleanText(testText));