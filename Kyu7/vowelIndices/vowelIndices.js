function vowelIndices(word) {
  //your code here
  console.log(word);

  var array = [];
  for (let i = 0; i < word.length; i++) {
    if ('aeiouyAIUEOUY'.indexOf(word[i]) !== -1) array.push(i + 1);
  }
  return array;
}
