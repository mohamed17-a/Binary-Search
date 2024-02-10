# Time Complexity

The time complexity of a binary search using a while loop is O(log n). Here's why:

In each iteration of the while loop, the search range is effectively halved. In the worst case, the loop continues until the search range becomes empty (left > right), or the target is found. The number of iterations required to reduce the search range to one element (or none) is logarithmic in the size of the input array.

Let's denote the size of the array as n. In each iteration, the search range is halved, so after x iterations, the remaining search range is n/(2^x). When this value becomes 1 (or close to 1), the loop terminates.

So, the worst-case time complexity is O(log n). Binary search is a very efficient algorithm for searching in sorted arrays due to this logarithmic time complexity.

# Space Complexity

The space complexity of the binary search algorithm is O(1). This is because the algorithm uses a constant amount of additional space regardless of the size of the input array.

The algorithm uses a fixed number of variables (left, right, mid) and does not require any additional data structures that scale with the size of the input. The memory used by these variables is constant, and it does not depend on the size of the array being searched.

Therefore, the space complexity of this binary search implementation is O(1), indicating constant space usage.
