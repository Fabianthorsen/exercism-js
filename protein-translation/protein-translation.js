//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (RNA = '') => {
  // Translation mapping
  let translation = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  };

  // Use regex to split every third letter
  if (RNA !== '') {
    let rnaArr = RNA.match(/.{1,3}/g);
    let transArr = []; // Will contain translated protein

    // Use .every in order to break when hitting a terminating codon
    rnaArr.every((rna) => {
      if (translation[rna] === 'STOP') {
        return false;
      } else if (translation[rna] === undefined) {
        // Throw error if codon is not a valid RNA
        throw new Error('Invalid codon');
      } else {
        transArr.push(translation[rna]);
        return true;
      }
    });

    // Return the translated list of proteins
    return transArr;
  } else {
    // If there are no RNA listed then there are no proteins
    return [];
  }
};
