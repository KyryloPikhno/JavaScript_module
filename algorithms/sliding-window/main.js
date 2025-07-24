function maxSumSubarray(arr, k) {
  if (arr.length < k) return null;

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; 

    if (windowSum > maxSum) maxSum = windowSum;
  }

  console.log(maxSum)

  return maxSum;
}

maxSumSubarray([2, 1, 5, 1, 3, 2], 3)


function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLen = 0;
  const seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

lengthOfLongestSubstring("abcabcbb")
