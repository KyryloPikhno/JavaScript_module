function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
    
    maxSum = windowSum;
    
    for (let end = k; end < arr.length; end++) {
      windowSum += arr[end] - arr[end - k]; 
      if (windowSum > maxSum) maxSum = windowSum;
    }
    
    return maxSum;
  }
  
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); 
  