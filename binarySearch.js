function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Find the middle index
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
      return mid; // Target found, return the index
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
  console.log(`Target ${targetValue} found at index ${result}`);
} else {
  console.log(`Target ${targetValue} not found in the array`);
}
