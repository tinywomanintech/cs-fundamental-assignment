function getCount(str) {
  // enter your majic here
  return (str.match(/[aiueo]/gi) || []).length;
}
