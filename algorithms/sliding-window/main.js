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