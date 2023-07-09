# Finding the subarrays that sum to a target in an array of positive and negative integers

## Example

Array: [1, 2, -1, 2, 1]
k = the max subarrays where the sum of elements = 3

We have two pointers to our array.
We direct our pointers to the first element of the array.
Then calculate the sum of those elements.
Since our pointers are pointing to the same element, we'll count the left pointer as 0.

```bash
[1, 2, -1, 2, 1]
 ^
 ^
 0 + 1 = 1
 1 < our target of 3
```

We did not meet the target, but are still less than it.
So it's possible if we expand our array we meet the target.

We increment our right pointer, expanding our subarray.
Then calculate the sum of those elements.

```bash
[1, 2, -1, 2, 1]
 ^
    ^
 1 + 2 = 3
```

We met our target of 3, and found our first subarray.
So we can increment our count k.
k = 1
Unlike the case with positive integers only, we do not move our left pointer yet.
Instead, we keep moving our right pointer until our sum is no longer equal to our target.

```bash
[1, 2, -1, 2, 1]
 ^
       ^
 3 - 1 = 2
```

Our sum is less than our target now, so we start moving our left pointer.

```bash
[1, 2, -1, 2, 1]
    ^
       ^
 2 - 2 = 0
```

We keep moving the left pointer until we reach the right pointer.

```bash
[1, 2, -1, 2, 1]
       ^
       ^
 0 + (-1) = -1
```

Then, we can start moving the right pointer again.

```bash
[1, 2, -1, 2, 1]
       ^
          ^
 -1 + 2 = 1
```

```bash
[1, 2, -1, 2, 1]
       ^
             ^
 1 + 1 = 2
```

```bash
[1, 2, -1, 2, 1]
       ^
                ^
 2 + 1 = 3
```

We met our target again.
k = 2

And we can repeat this process until we've traversed the entire array.

Now, try these exercises:

a.
Array: [-2, 4, 6, -8, 10]
k = the max subarrays where the sum of elements = 10  

b.
Array: [-1, 1, -1, 1, -1, 1]
k = the max subarrays where the sum of elements = 2  

c.
Array: [5, -5, 15, -10, 20]
k = the max subarrays where the sum of elements = 20  

d.
Array: [-3, 2, -7, 1]
k = the max subarrays where the sum of elements = 9  

e.
Array: [-10, 2, 8, -1, 7]
k = the max subarrays where the sum of elements = 10  

f.
Array: [-4, 2, -7, 1, 6]
k = the max subarrays where the sum of elements = 8  

g.
Array: [-10, 20, -30, 40, 50]
k = the max subarrays where the sum of elements = 60  

h.
Array: [1, -3, 2, -4, 5, 6, -7]
k = the max subarrays where the sum of elements = 6  