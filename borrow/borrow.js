function borrow(s) {
  return s.replace(/[.,:;*+?!\s^${}()|[\]\\]/g, '').toLowerCase();
}
