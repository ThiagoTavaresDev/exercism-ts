export function toRna(rna: string): string {
    let storage: string[] = [];
    let arrayString: string[] = rna.split('');
  
    for (let i = 0; i < arrayString.length; i++) {
      if (arrayString[i] !== 'X' && arrayString[i] !== 'U') {
        if (arrayString[i] === 'G') {
          storage.push('C');
        }
        if (arrayString[i] === 'C') {
          storage.push('G');
        }
        if (arrayString[i] === 'T') {
          storage.push('A');
        }
        if (arrayString[i] === 'A') {
          storage.push('U');
        }
      } else {
        throw new Error('Invalid input DNA.');
      }
    }
  
    return storage.join('');
  }