function keepOrder(ary, val) {
  // your code here
  for (let c = 0; c < ary.length; c++) {
    let coba = ary[c];
    console.log(coba);
    if (ary[c] >= val) {
      return c;
    }
  }
  return ary.length;
}
console.log(keepOrder([1, 2, 3, 4, 7], 5), 4);
