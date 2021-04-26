function evenChars(string) {
  //keep coding!
  return string.split(',').map((i) => i.slice(0, 1)) ? string === 'a' : 'invalid string';
}

console.log(evenChars('a'), 'invalid string');
console.log(evenChars('abcdefghijklm'), ['b', 'd', 'f', 'h', 'j', 'l']);
