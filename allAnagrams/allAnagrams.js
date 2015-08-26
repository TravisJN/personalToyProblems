function allAnagrams (string) {
  var result = {};

  (function recurse(str, letters) {
    if (str.length === string.length) {
      result[str] = true;
    }
    for(var i = 0; i < letters.length; i++) {
      recurse(str + letters[i], letters.slice(0, i) + letters.slice(i + 1));
    }
  })('', string);

  return Object.keys(result);
}
