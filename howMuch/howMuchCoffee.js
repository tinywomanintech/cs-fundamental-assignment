function howMuchCoffee(events) {
  // Code go here
  let count = 0;

  if (events.length > 0) {
    for (let i = 0; i < events.length; i++) {
      if (
        events[i].search(/[^a-zA-Z]+/) === -1 &&
        (events[i].match('cw') || events[i].match('CW') || events[i].match('cat') || events[i].match('CAT') || events[i].match('DOG') || events[i].match('dog') || events[i].match('MOVIE') || events[i].match('movie'))
      ) {
        events[i] === events[i].toUpperCase() ? (count += 2) : (count += 1);
      }
    }
    return count > 3 ? 'You need extra sleep' : count;
  }
}
