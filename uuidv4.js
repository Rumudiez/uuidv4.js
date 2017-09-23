function cryptoRandom(w) {
  return (w ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> w / 4).toString(16);
}

function mathRandom(w) {
  return (w ^ Math.floor(Math.random() * 1000) & 15 >> w / 4).toString(16);
}

function uuidv4() {
  let template = `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`;
  if ('crypto' in window) {
    return template.replace(/[018]/g, cryptoRandom);
  } else {
    return template.replace(/[018]/g, mathRandom);
  }
}

export uuidv4;