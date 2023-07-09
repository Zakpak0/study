export const subarrays = {
    "positive-integer-array-sum": {
        a: {
            question: `
Array: [2,4,6,8,10]
k = the max subarrays where the sum of elements = 10`,
            answer: `1`, // Only one subarray [2, 4, 4] sums up to 10
        },
        b: {
            question: `
Array: [1,1,1,1,1,1]
k = the max subarrays where the sum of elements = 2`,
            answer: `5`, // Five subarrays: [1, 1] x 5
        },
        c: {
            question: `
Array: [5, 5, 15, 10, 20]
k = the max subarrays where the sum of elements = 20`,
            answer: `2`, // Two subarrays: [5, 5, 10] and [20]
        },
        d: {
            question: `
Array: [3, 2, 7, 1]
k = the max subarrays where the sum of elements = 9`,
            answer: `1`, // One subarray: [3, 2, 1, 3]
        },
        e: {
            question: `
Array: [10, 2, 8, 1, 7]
k = the max subarrays where the sum of elements = 10`,
            answer: `2`, // Two subarrays: [10] and [2, 8]
        },
        f: {
            question: `
Array: [4, 2, 7, 1, 6]
k = the max subarrays where the sum of elements = 8`,
            answer: `2`, // Two subarrays: [2, 6] and [7, 1]
        },
        g: {
            question: `
Array: [10, 20, 30, 40, 50]
k = the max subarrays where the sum of elements = 60`,
            answer: `2`, // Two subarrays: [10, 20, 30] and [20, 40]
        },
        h: {
            question: `
Array: [1, 3, 2, 4, 5, 6, 7]
k = the max subarrays where the sum of elements = 6`,
            answer: `3`, // Three subarrays: [1, 2, 3], [3, 2, 1], and [6]
        }
    }
}
