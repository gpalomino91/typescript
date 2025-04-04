// Text Analyzer (TypeScript)

class TextAnalyzer {

  constructor(private text: string) {}
  
  countWords() {
    if (this.text.trim() === "") return 0;
    return this.text.trim().split(/\s+/).length;
  }
  
  countLetters() {
    const letters = this.text.match(/[a-z]/gi);
    return letters ? letters.length : 0;
  }
  
  countVowelsAndConsonants() {
    const vowels = this.text.match(/[aeiou]/gi);
    const consonants = this.countLetters() - (vowels ? vowels.length : 0);
    return `Vowels: ${vowels ? vowels.length : 0} and Consonants: ${consonants}`;
  }

  countWordFrequency() {
    const wordFrecuency = new Map<string, number>();
    const words = this.text.trim().split(/\s+/);

    for (let word of words) {
      if(!wordFrecuency.has(word)){
        wordFrecuency.set(word, 1);
      } else {
      wordFrecuency.set(word, wordFrecuency.get(word)! + 1);
      }
    }
    return wordFrecuency;
  }
}
