# Finding goals within Subarrays

You can find and match patterns within an array.
Given a criteria, we should be able to write
an algorithm to find a pattern that matches that criteria.
And then returns all possible matches to criteria.

The steps for doing this involve:
We need to identify how many potential matches we can have

Given a question, we could have up to k possible matches.
Where is the amount of subarrays we are asked to find.
One question might as us to find, one particular subarray.
Another question might ask us to find the maximum (all possible)
Another question might ask us to find the maximum within a constraint
At the end of the day, we still need to find k, the possible matches to the question at hand.

It seems we need to track a sum or count of contiguous sequences which match our pattern

It seems we need to keep track of a beginning position and an end position
We can create learning examples where we expand, check a condition and expand
Lets say we give someone a random array, condition is that our array adds up to 3
Expand a subarray that checks for this condition
If we exceed this condition, we increment our beginning position

```typescript
/** 
 * Given this array, 
 * lets see the different subarrays 
 * we can create given different 
 * conditions 
*/

    const array = [0,1,2,3,4,5]
```

We'll start without any code, just math and logic.