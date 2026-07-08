const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    if (visited[char] > maxCharCount) {
      maxCharCount = visited[char];
    }

    console.log("------------------------------------------------");
    console.log(`Added '${char}' at index ${right}`);
    console.log("Window:", s.slice(left, right + 1));
    console.log("Visited:", visited);
    console.log("Max Character Count:", maxCharCount);
    console.log("Window Size:", right - left + 1);
    console.log("Replacements Needed:", right - left + 1 - maxCharCount);

    if (right - left + 1 - maxCharCount > k) {
      console.log(`Shrinking window because replacements exceed ${k}`);
      console.log(`Removing '${s[left]}' at index ${left}`);

      visited[s[left]]--;
      left++;

      console.log("New Window:", s.slice(left, right + 1));
      console.log("Visited after shrinking:", visited);
    }

    right++;
  }

  console.log("------------------------------------------------");
  console.log("Final Window:", s.slice(left, right));
  console.log("Answer:", right - left);

  return right - left;
};

console.log(characterReplacement("AABABBA", 1));