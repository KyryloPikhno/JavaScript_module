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

console.log(hasPairSum([1, 2, 4, 6, 10], 8))