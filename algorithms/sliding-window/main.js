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


function minSubArrayLen(target, nums) {
  let left = 0;
  let windowSum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3])


function lengthOfLongestSubstringKDistinct(s, k) {
  let left = 0;
  let maxLen = 0;
  const charCount = new Map();

  for (let right = 0; right < s.length; right++) {
    charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

    while (charCount.size > k) {
      const leftChar = s[left];
      charCount.set(leftChar, charCount.get(leftChar) - 1);

      if (charCount.get(leftChar) === 0) {
        charCount.delete(leftChar);
      }

      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

lengthOfLongestSubstringKDistinct("eceba", 2)


function lengthOfLongestSubstring(s) {
  let seen = new Set();
  let left = 0;
  let maxLen = 0;

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



