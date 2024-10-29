function sumTheArrays(naturalNumbers) {
  return naturalNumbers.even.map((num, index) => num + naturalNumbers.odd[index]);
}