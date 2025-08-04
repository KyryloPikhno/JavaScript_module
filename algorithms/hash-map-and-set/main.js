const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); 
mySet.add("hello");

mySet.clear()

const myMap = new Map();

let obj = { x: 1 };

myMap.set("name", "Chris");
myMap.set(42, "answer");
myMap.set(obj, { x: "lol" });

function mostFrequentChar(s) {
  const freq = new Map();

  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  let maxChar = '', maxCount = 0;

  console.log(freq.entries(),freq)

  for (let [char, count] of freq.entries()) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  }

  return maxChar;
}

mostFrequentChar("helloAllo")