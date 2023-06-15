function destructivelyAppendCat(cats, name) {
  cats.push(name);
}

function destructivelyPrependCat(cats, name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat(cats) {
  cats.pop();
}

function destructivelyRemoveFirstCat(cats) {
  cats.shift();
}

function appendCat(cats, name) {
  return cats.concat(name);
}

function prependCat(cats, name) {
  return [name].concat(cats);
}

function removeLastCat(cats) {
  return cats.slice(0, -1);
}

function removeFirstCat(cats) {
  return cats.slice(1);
}

module.exports = {
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
