var isAnagram = function(s, t) {
    const first = new Map();

    if (s.length !== t.length) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
      first.set(s[i], (first.get(s[i]) || 0) + 1)
    }

    for (let i = 0; i < t.length; i++) {
      if (!first.has(t[i])) {
        return false
      }
      first.set(t[i],first.get(t[i])-1);
      if (first.get(t[i])< 0) {
        return false
      }
    }
    return true
}

console.log(isAnagram("aacc","ccac"))