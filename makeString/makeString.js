function makeString(s) {
  return s
    .split(' ')
    .map((i) => i.slice(0, 1))
    .join('');
}

console.log(makeString('sees eyes xray yoat'), 'sexy', "Wrong result for 'sees eyes xray yoat'");

// di pakein spasi supaya keambil perkatan
// [ 'sees', 'eyes', 'xray', 'yoat' ]
// terus di map krn sudah berubah jadi array, terus kita slice[index ke 0, smpe index 1]
// [ 's', 'e', 'x', 'y' ]
// terus di pakein method array join
// result = sexy
