/**
 * 1. Two Sum
 *
 * @param {number[]} nums
 * @param {number} sum
 * @return {*}  {number[]}
 */
function twoSum(nums: number[], sum: number): number[] {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] === sum) {
                return [i, j];
            }
        }
    }
}

/**
 * 3. longest substring without repeating characters javascript
 *
 * @param {string} str
 * @return {*}  {number}
 */
function longestSubstringWithoutRepeatingCharacters(str: string): number {
    let result: string[] = [];
    let maxLength: number = 0;

    for (let index = 0; index < str.length; index++) {
        if (result.indexOf(str[index]) > -1) {
            result = result.slice(result.indexOf(str[index]) + 1);
        }

        result.push(str[index]);
        if (maxLength < result.length) {
            maxLength = result.length;
        }
    }

    return maxLength;
}

/**
 * 4. Median of Two Sorted Arrays
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {*}  {number}
 */
function medianOfTwoSortedArrays(array1: number[], array2: number[]): number {
    array1 = array1.concat(array2).sort((a, b) => a - b);

    let half2: number = array1.length / 2;
    if (array1.length % 2 === 0) {
        return (array1[half2 - 1] + array1[half2]) / 2;
    } else {
        return array1[+half2.toString()[0]];
    }
}

/**
 * 7. Reverse Integer
 *
 * @param {number} num
 * @return {*}  {number}
 */
function reverseInteger(num: number): number {
    let isNagtive: boolean = false;
    if (num.toString().indexOf('-') > -1) {
        isNagtive = true;
    }
    num = parseInt(
        num
            .toString()
            .split('')
            .reverse()
            .join(''),
    );

    return isNagtive ? -num : num;
}

/**
 * 8. String to Integer (atoi)
 *
 * @param {string} str
 * @return {*}  {number}
 */
function stringToInteger(str: string): number {
    if (isNaN(parseInt(str))) {
        return 0;
    }

    str = str.trim();

    let maxStringNum: number = Math.pow(2, 31);

    if (parseInt(str) > maxStringNum) {
        return maxStringNum;
    }

    if (-parseInt(str) > maxStringNum) {
        return -maxStringNum;
    }

    return parseInt(str);
}

function palindromeNumberUseString(num: number): boolean {
    // let numStr: string = num.toString();
    // if (numStr.indexOf('-') > -1 || numStr.length === 2) {
    //     return false;
    // }

    // let result: boolean = true;

    // if (numStr.length % 2 === 0) {
    //     for (let i = 0; i < numStr.length; i++) {
    //         for (let j = i; j < numStr.length; j++) {
    //             if (numStr[i] !== numStr[j]) {
    //                 result = false;
    //                 break;
    //             }
    //         }
    //     }
    // } else {
    //     let divider = numStr[Math.floor(numStr.length / 2).toString()];
    //     let splitData: string[] = numStr.split(divider);

    //     if (splitData[1].split('').reverse().join() !== splitData[0]) {
    //         result = false;
    //     }
    // }

    // return result;

    if (num < 0 || (num !== 0 && num % 10 === 0)) {
        return false;
    }
    let numStrs: string[] = num.toString().split('');
    let pointer: number = 0;
    let end: number = numStrs.length - 1;
    while (pointer <= end) {
        if (numStrs[pointer] !== numStrs[end]) {
            return false;
        }

        pointer++;
        end--;
    }

    return true;
}

/**
 * 11. Container With Most Water
 *
 * @param {number[]} nums
 * @return {*}  {number}
 */
function containerWithMostWater(nums: number[]): number {
    // 高：陣列元素
    // 寬：兩陣列元素間距取最小

    let max: number = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let height: number = Math.min(nums[i], nums[j]);
            if (height * (j - i) > max) {
                max = height * (j - i);
            }
        }
    }

    return max;
}

/**
 * 14. Longest Common Prefix
 *
 * @param {string[]} strArray
 * @return {*}  {string}
 */
function longestCommonPrefix(strs: string[]): string {
    let prefix: string = '';
    let strs1: string = strs[0];
    let strLength: number = strs1 ? strs1.length : 0;

    for (let i = 0; i < strLength; i++) {
        if (strs.every((str: string) => strs1[i] === str[i])) {
            prefix += strs1[i];
        } else {
            break;
        }
    }
    return prefix;
}

/**
 * 20. Valid Parentheses
 *
 * @param {string} str
 * @return {*}  {boolean}
 */
function validParentheses(str: string): boolean {
    let leftElements: string[] = ['(', '{', '['];
    let rightElements: string[] = [')', '}', ']'];

    if (str.length % 2 !== 0) {
        return false;
    }

    let lefts: string[] = [];
    let rights: string[] = [];
    for (let index = 0; index < str.length; index++) {
        if (index % 2 === 0) {
            lefts.push(str[index]);
        } else {
            rights.push(str[index]);
        }
    }

    let isSame: boolean = true;

    for (let index = 0; index < lefts.length; index++) {
        if (leftElements.indexOf(lefts[index]) !== rightElements.indexOf(rights[index])) {
            isSame = false;
            break;
        }
    }

    return isSame;
}

/**
 * 21. Merge Two Sorted Lists
 *
 * @param {number[]} num1s
 * @param {number[]} num2s
 * @return {*}  {number[]}
 */
function mergeTwoSortedLists(num1s: number[], num2s: number[]): number[] {
    return num1s.concat(num2s).sort((a, b) => a - b);
}

/**
 * 24.Swap Nodes in Pairs
 *
 * @param {number[]} num1s
 * @return {*}  {number[]}
 */
function swapNodesInPairs(num1s: number[]): number[] {
    let results: number[] = [];
    let lefts: number[] = [];
    let rights: number[] = [];
    for (let index = 0; index < num1s.length; index++) {
        if (index % 2 === 0) {
            lefts.push(num1s[index]);
        } else {
            rights.push(num1s[index]);
        }
    }

    for (let index = 0; index < rights.length; index++) {
        results.push(rights[index]);
        results.push(lefts[index]);
    }

    return results;
}

/**
 * 26. Remove Duplicates from Sorted Array
 *
 * @param {number[]} num1s
 * @return {*}  {number}
 */
function removeDuplicatesFromSortedArray(num1s: number[]): number {
    return Array.from(new Set(num1s)).length;
}

/**
 * 27. Remove Element
 *
 * @param {number[]} num1s
 * @param {number} num
 * @return {*}  {number[]}
 */
function removeElement(num1s: number[], num: number): number[] {
    return num1s.filter((x) => x !== num);
}

/**
 * 28. Implement strStr()
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {*}  {number}
 */
function implementStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
}

/**
 * 33. Search in Rotated Sorted Array
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {*}  {number}
 */
function searchInRotatedSortedArray(nums: number[], target: number): number {
    return nums.indexOf(target);
}

/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {*}  {number[]}
 */
function findFirstAndLastPositionOfElementInSortedArray(nums: number[], target: number): number[] {
    let results: number[] = [];
    for (const index in nums) {
        if (target === nums[index]) {
            results.push(+index);
        }
    }

    switch (results.length) {
        case 0:
            return [-1, -1];

        case 1:
            results.push(-1);
            return results;

        case 2:
            return results;

        default:
            return [results[0], results[results.length - 1]];
    }
}

// 35. Search Insert Position
function searchInsertPosition(nums: number[], target: number): number {
    if (nums.indexOf(target) > -1) {
        return nums.indexOf(target);
    }

    nums.push(target);
    nums.sort((a, b) => a - b);

    return nums.indexOf(target);
}
