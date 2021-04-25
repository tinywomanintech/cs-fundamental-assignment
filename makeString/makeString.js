function makeString(s) {
  var terpecah = s.split('');
  var awalKata = '';
  for (var i = 0; i < terpecah.length; i++) {
    awalKata += terpecah[i].substring(0, 8);
  }
  return awalKata;
}
