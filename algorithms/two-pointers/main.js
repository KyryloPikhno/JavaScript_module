function twoSum(nums, target) {
    let left = 0
    let right = nums.length - 1

   while(left < right){
     const sum = nums[left] + nums[right]

     if(sum === target) return [left, right]
     else if (sum < target) left++
     else right --
   }

   return []
};

twoSum([-2,7,11,15],18)


function isPalindrome(string) {
const filteredString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

let left = 0
let right = filteredString.length - 1

while(left < right) {  
  if(filteredString[left] === filteredString[right]) {
    left++
    right--
  } else {
    return false
  }
}

return true
}

isPalindrome("A man, a plan, a canal: Panama")


function removeDuplicates(arr) {
  let write = 1;

  for (let read = 1; read < arr.length; read++) {
    if (arr[read] !== arr[write - 1]) {
      arr[write] = arr[read];
      write++;
    }
  }

  return {
    arr: arr.slice(0, write),
    length: write
  }; 
}

removeDuplicates([1,1,2,2,3])


function isSorted(arr) {
  let left = 0
  let right = 1

  while(right < arr.length) {  
    if(arr[left] > arr[right]) {
      return false
    }

    left ++
    right ++
  }

  return true
}

isSorted([1, 2, 2, 3, 4])


function mergeSorted(arr1, arr2) {
  let i = 0;          
  let j = 0;           
  let result = [];    

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;                  
    } else {
      result.push(arr2[j]); 
      j++;                  
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

mergeSorted([1, 3, 5], [2, 4, 6])


function hasPairSum(arr, target) {
  let left = 0
  let right = arr.length

  while(left < right) {
    const sum = arr[left] + arr[right]

    if(sum === target) {
      return [left, right]
    }

    if(sum < target) {
      left++
    } else {
      right--
    }
  }

  return false
}

hasPairSum([1, 2, 4, 6, 10], 8)


function hasPairWithSum(arr, target) {
let left = 0
let right = arr.length - 1

while(left < right) {
  const sum = arr[left] + arr[right]

  if(sum === target) return true
  else if(sum < target) left++
  else right--
}

return false
}

hasPairWithSum([1, 2, 4, 6, 8], 10)


function removeSpaces(string) {
  // const arrStr = string.split("")
  // const newArr = []

  // for (let read = 0; read < arrStr.length; read++) {
  //   if(arrStr[read] !== " "){
  //     newArr.push(arrStr[read])
  //   }
  // }

  // return newArr.join("")

  const chars = string.split("");
  let write = 0;

  for (let read = 0; read < chars.length; read++) {
    if (chars[read] !== " ") {
      chars[write] = chars[read];
      write++;
    }
  }

  return chars.slice(0, write).join("");
}

removeSpaces(" a b  c ")


function hasDuplicates(arr) {
  // let left = 0
  // let right = 1

  // while(right < arr.length) {
  //   if(arr[left] === arr[right]) return true

  //   left++
  //   right++
  // }

  // return false

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return true;
  }
  return false;
}

hasDuplicates([1, 2, 2, 4, 5])


function removeZeros(arr) {
//   let write = 0
//   const newArr = []

//   for(let read = 0; read < arr.length; read++){
//     if(arr[read] !== 0) {
//       write = arr[read]  
//       newArr.push(write)
//     }
//   }

// return newArr

  let write = 0;

  for (let read = 0; read < arr.length; read++) {
    if (arr[read] !== 0) {
      arr[write] = arr[read];  
      write++;
    }
  }

  return arr.slice(0, write);
}

removeZeros([0, 1, 0, 3, 0, 5])


function removeTarget(arr, target) {
  let write = 0

  for(let read = 0; read < arr.length; read++) {
    if(arr[read] !== target) {
      arr[write] = arr[read]
      write++
    }
  }

  return arr.slice(0, write);
}

removeTarget([1, 2, 2, 3, 4, 4, 5], 4)


function twoSumV2(arr, target) {
  let left = 0
  let right = arr.length - 1

  while(left < right) {
    const sum = arr[left] + arr[right]

    if(sum === target) return [arr[left], arr[right]]
    else if(sum < target) left++
    else right--
  }

  return []
}

twoSumV2([1, 2, 3, 6, 10], 7)


function hasThreeSum(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    let left = 0
    let right = arr.length - 1

    while(left < right) {
      const sum = arr[i] + arr[left] + arr[right]

      if(sum === target) return true
      else if(sum < target) left++
      else right--
    }
  }

  return false
}

hasThreeSum([-2, 0, 1, 3], 2)

function twoSumUniquePairs(arr, target) {
  const result = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      result.push([arr[left], arr[right]]);

      const leftValue = arr[left];
      while (left < right && arr[left] === leftValue) {
        left++;
      }

      const rightValue = arr[right];
      while (left < right && arr[right] === rightValue) {
        right--;
      }
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}

twoSumUniquePairs([1, 1, 2, 2, 3, 4, 5], 4)
