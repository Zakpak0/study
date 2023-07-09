# Finding the subarrays that sum to a target in an array of positive integers > 0

## Example

Array: [1, 2, 1, 2, 1]
k = the max subarrays where the sum of elements = 3

We have two pointers to our array
We direct our pointers to the first element of the array
Then calculate the sum of those elements
Since our points are pointing to the same element, we'll
count the left pointer as 0

```bash
[1, 2, 1, 2, 1]
 ^
 ^
 0 + 1 = 1
 1 < our target of 3
```

 We did not meet the target, but are still less than it
 So it's possible if we expand our array we meet the target

We increment our right pointer, expanding our subarray
Then calculate the sum of those elements

```bash
[1, 2, 1, 2, 1]
 ^
    ^
 1 + 2 = 3
```

 We met our target of 3, and found our first subarray
 So we can increment the our count k
 k = 1
 Our left pointer is now exhausted, because we've met our target.
 Because we know our array is only of positive integers

We can now increment out left pointer
We then bring our right pointer to meet our left pointer
And begin searing for the next possible subarray

```bash
[1, 2, 1, 2, 1]
    ^
    ^
 0 + 2 = 2
```

```bash
[1, 2, 1, 2, 1]
    ^
       ^
 2 + 1 = 3
```

k = 2

```bash
[1, 2, 1, 2, 1]
       ^
       ^
 0 + 1 = 1
```

```bash
[1, 2, 1, 2, 1]
       ^
          ^
 1 + 2 = 3
```

k = 3

```bash
[1, 2, 1, 2, 1]
          ^
          ^
 0 + 2 = 2
```

```bash
[1, 2, 1, 2, 1]
          ^
             ^
 2 + 1 = 3
```

k = 4

```bash
[1, 2, 1, 2, 1]
             ^
             ^
 0 + 1 = 1
```

We've reached the bounds of our array
And ended up with 4 sub arrays that
match our pattern of summing to 3
Our final answer is 4

Complete the exercises bellow finding
the max number of subarrays which equal to the target