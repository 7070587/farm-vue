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

    if (Math.abs(Math.pow(2, 31) - 1) < num) {
        return 0;
    }

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
        return maxStringNum - 1;
    }

    if (-parseInt(str) > maxStringNum) {
        return -(maxStringNum - 1);
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
function mergeTwoSortedLists(list1s: number[], list2s: number[]): number[] {
    return list1s.concat(list2s).sort((a, b) => a - b);
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
function removeDuplicatesFromSortedArray(nums: number[]): number {
    return Array.from(new Set(nums)).length;
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

/**
 * 48. Rotate Image
 *
 * @param {number[][]} nums
 * @return {*}  {number[][]}
 */
function rotateImage(nums: number[][]): number[][] {
    let results: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        results.push([]);

        for (let j = i; j < nums.length; j++) {
            let temp = nums[i][j];
            nums[i][j] = nums[j][i];
            nums[j][i] = temp;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i].reverse();
    }

    return nums;
}

/**
 * 58. Length of Last Word
 *
 * @param {string} str
 * @return {*}  {number}
 */
function lengthOfLastWord(str: string): number {
    let strs: string[] = str.split(' ');
    return strs[strs.length - 1].length;
}

/**
 * 61. Rotate List
 *
 * @param {number[]} nums
 * @param {number} pos
 * @return {*}  {number[]}
 */
function rotateList(nums: number[], pos: number): number[] {
    if (nums.length < pos) {
        pos = pos - nums.length;
    }

    let rotates: number[] = [];
    for (let index = nums.length - pos; index < nums.length; index++) {
        rotates.push(nums[index]);
    }

    for (let index = 0; index <= pos; index++) {
        rotates.push(nums[index]);
    }

    return rotates;
}

/**
 * 66. Plus One
 *
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function plusOne(nums: number[]): number[] {
    return (parseInt(nums.join('')) + 1)
        .toString()
        .split('')
        .map((x: any) => (x = parseInt(x)));
}

/**
 * 71. Simplify Path
 *
 * @param {string} str
 * @return {*}  {string}
 */
function simplifyPath(path: string): string {
    // 中間是"."的情況直接去掉，是".."時刪掉它上面挨著的一個路徑
    let strs: string[] = path.split('/').filter((x) => !!x);
    for (let index = 0; index < strs.length; index++) {
        if (strs[index] === '.') {
            strs.splice(index, 1);
        }

        if (strs[index] === '..') {
            strs.splice(index, 1);
            strs.splice(index - 1, 1);
        }
    }

    for (let index = 0; index < strs.length; index++) {
        if (strs.indexOf('.') > -1) {
            strs.splice(index, 1);
        }

        if (strs.indexOf('..') > -1) {
            strs.splice(index, 1);
        }
    }

    let res: string = `/${strs.join('/')}`;
    res = res.indexOf('..') > -1 ? res[0] : res;
    return res;
}

/**
 *  74. Search a 2D Matrix
 *
 * @param {number[][]} nums
 * @param {number} target
 * @return {*}  {boolean}
 */
function searchA2DMatrix(nums: number[][], target: number): boolean {
    return nums.flat().indexOf(target) > -1;
}

/**
 * 75. Sort Colors
 *
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function sortColors(nums: number[]): number[] {
    return nums.sort((a, b) => a - b);
}

/**
 * 80. Remove Duplicates from Sorted Array II
 *
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function removeDuplicatesFromSortedArrayII(nums: number[]): number[] {
    let resDir: object = {};
    for (const key of nums) {
        if (!resDir[key]) {
            resDir[key] = [];
        }

        if (resDir[key].length < 2) {
            resDir[key].push(key);
        }
    }

    let res: number[][] = [];
    for (const key in resDir) {
        res.push(resDir[key]);
    }

    return res.flat();
}

/**
 *  81. Search in Rotated Sorted Array II
 *
 * @param {number[][]} nums
 * @param {number} target
 * @return {*}  {boolean}
 */
function searchInRotatedSortedArrayII(nums: number[], target: number): boolean {
    return nums.indexOf(target) > -1;
}

/**
 * 82. Remove Duplicates from Sorted List II
 *
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function removeDuplicatesFromSortedListII(nums: number[]): number {
    let res: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 2]) {
            nums[res++] = nums[i];
        }
    }

    return res;
}

/**
 * 83. Remove Duplicates from Sorted List
 *
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function removeDuplicatesFromSortedList(nums: number[]): number[] {
    let resDir: object = {};
    for (const key of nums) {
        if (!resDir[key]) {
            resDir[key] = [];
        }

        if (resDir[key].length < 1) {
            resDir[key].push(key);
        }
    }

    let res: number[][] = [];
    for (const key in resDir) {
        res.push(resDir[key]);
    }

    return res.flat();
}

/**
 *  86. Partition List
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {*}  {number[]}
 */
function partitionList(nums: number[], target: number): number[] {
    let targetIndex: number = nums.indexOf(target);
    let lefts: number[] = [];
    let rights: number[] = [];
    for (let index = 0; index < nums.length; index++) {
        if (index < targetIndex) {
            lefts.push(nums[index]);
        } else {
            rights.push(nums[index]);
        }
    }

    let rightToLeft: number[] = rights.filter((x) => x < target);
    rights = rights.filter((x) => x >= target);
    lefts = lefts
        .concat(rightToLeft)
        .sort((a, b) => a - b)
        .concat(rights);

    return lefts;
}

/**
 * 88. Merge Sorted Array
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {*}  {number[]}
 */
function mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number): number[] {
    nums1.length = nums2.length;
    nums1 = nums1.concat(nums2).sort((a, b) => a - b);
    return nums1;
}

/**
 * 92. Reverse Linked List II
 *
 * @param {number[]} nums
 * @param {number} n
 * @param {number} m
 * @return {*}  {number[]}
 */
function reverseLinkedListII(nums: number[], n: number, m: number): number[] {
    let nIndex: number = nums.indexOf(n);
    let mIndex: number = nums.indexOf(m);
    let ranges: number[] = [];
    let lefts: number[] = [];
    let rights: number[] = [];
    for (let index = 0; index < nums.length; index++) {
        if (index >= nIndex && index <= mIndex) {
            ranges.push(nums[index]);
        } else if (index > nIndex) {
            rights.push(nums[index]);
        } else if (index < mIndex) {
            lefts.push(nums[index]);
        }
    }
    ranges = ranges.reverse();

    lefts = lefts.concat(ranges, rights);
    return lefts;
}

/**
 * 136. Single Number
 * 137. Single Number II
 *
 * @param {number[]} nums
 * @return {*}  {number}
 */
function singleNumber(nums: number[]): number {
    let resDir: object = {};
    for (const key in nums) {
        if (!resDir[nums[key]]) {
            resDir[nums[key]] = [];
        }
        resDir[nums[key]].push(nums[key]);
    }

    for (const key in resDir) {
        if (resDir[key].length === 1) {
            return resDir[key][0];
        }
    }
}

/**
 * 141. Linked List Cycle
 *
 * @param {number[]} nums
 * @param {number} pos
 * @return {*}  {boolean}
 */
function linkedListCycle(nums: number[], pos: number): boolean {
    if (pos < 0) {
        return false;
    }

    if (nums[pos] !== undefined || nums[pos] !== null) {
        return true;
    }
}

/**
 * 143. Reorder List
 *
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function reorderList(nums: number[]): number[] {
    let centerIndex: number = Math.floor(nums.length / 2);
    let starts: number[] = [];
    let ends: number[] = [];

    if (nums.length % 2 !== 0) {
        for (let index = 0; index < centerIndex + 1; index++) {
            starts.push(nums[index]);
        }

        for (let index = nums.length - 1; index > centerIndex; index--) {
            ends.push(nums[index]);
        }
    } else {
        for (let index = 0; index < centerIndex; index++) {
            starts.push(nums[index]);
        }

        for (let index = nums.length - 1; index >= centerIndex; index--) {
            ends.push(nums[index]);
        }
    }

    let res: number[] = [];
    for (let index = 0; index < starts.length; index++) {
        res.push(starts[index]);
        if (ends[index] !== undefined || ends[index] !== null) {
            res.push(ends[index]);
        }
    }

    return res;
}

/**
 * 147. Insertion Sort List
 * 148. Sort List
 *
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function insertionSortList(nums: number[]): number[] {
    return nums.sort((a, b) => a - b);
}

/**
 * 151. Reverse Words in a String
 *
 * @param {string} str
 * @return {*}  {string}
 */
function reverseWordsInAString(str: string): string {
    return str
        .split(' ')
        .filter((x) => !!x)
        .reverse()
        .join(' ');
}

/**
 * 153. Find Minimum in Rotated Sorted Array
 * 154. Find Minimum in Rotated Sorted Array II
 *
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function findMinimumInRotatedSortedArray(nums: number[]): number {
    return nums.sort((a, b) => a - b)[0];
}

/**
 * 162. Find Peak Element
 *
 * @param {number[]} nums
 * @return {*}  {number}
 */
function findPeakElement(nums: number[]): number {
    for (let index = 0; index < nums.length; index++) {
        // right > left
        if (nums[index] < nums[index - 1]) {
            return index - 1;
        }
    }
    return nums.length - 1;
}

// 164. Maximum Gap
function maximumGap(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    nums = nums.sort((a, b) => a - b);

    let gap: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i + 1] - nums[i]) > gap) {
            gap = Math.abs(nums[i + 1] - nums[i]);
        }
    }

    return gap;
}

/**
 * 165. Compare Version Numbers
 *
 * @param {string} v1
 * @param {string} v2
 * @return {*}  {number}
 */
function compareVersionNumbers(version1: string, version2: string): number {
    let _v1: number = parseFloat(version1);
    let _v2: number = parseFloat(version2);

    if (_v1 === _v2) {
        return 0;
    } else if (_v1 > _v2) {
        return 1;
    } else {
        return -1;
    }
}

/**
 * 167. Two Sum II - Input array is sorted
 *
 * @param {number[]} nums
 * @param {number} count
 * @return {*}  {number[]}
 */
function twoSumIIInputArrayIsSorted(numbers: number[], target: number): number[] {
    let res: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                res.push(i + 1, j + 1);
                break;
            }
        }
    }

    return res;
}

/**
 * 169. Majority Element
 *
 * @param {number[]} nums
 * @return {*}  {number}
 */
function majorityElement(nums: number[]): number {
    let resDir: object = {};

    for (const key in nums) {
        if (!resDir[nums[key]]) {
            resDir[nums[key]] = [];
        }

        resDir[nums[key]].push(nums[key]);
    }

    for (const key in resDir) {
        if (resDir[key].length >= nums.length / 2) {
            return resDir[key][0];
        }
    }

    return null;
}

/**
 * 179. Largest Number
 *
 * @param {number[]} nums
 * @return {*}  {string}
 */
function largestNumber(nums: number[]): string {
    nums.sort((a, b) => {
        return '' + a + b > '' + b + a ? -1 : 1;
    });

    const result = nums.join('');

    return result[0] === '0' ? '0' : result;
}

/**
 * 186. Reverse Words in a String II
 *
 * @param {string[]} strs
 * @return {*}  {string[]}
 */
function reverseWordsInAStringII(strs: string[]): string[] {
    let tempStrs: string[] = [];
    strs.forEach((x) => {
        if (x === ' ') {
            tempStrs.push('-');
        } else {
            tempStrs.push(x);
        }
    });

    let str: string = tempStrs
        .join('')
        .split('-')
        .reverse()
        .join(' ');

    let res: string[] = [];
    for (let index = 0; index < str.length; index++) {
        res.push(str[index]);
    }

    return res;
}

/**
 *  189. Rotate Array
 *
 * @param nums
 * @param pos
 * @returns
 */
function rotateArray(nums: number[], pos: number): number[] {
    return;
}

/**
 * 192. Word Frequency
 *
 * @param {string} str
 * @return {*}  {object}
 */
function wordFrequency(str: string): object {
    str = str.replace(`\n`, ' ').replace(`\n\r`, ' ');
    let strs: string[] = str.split(' ');
    let res: object = {};
    for (const key in strs) {
        if (!res[strs[key]]) {
            res[strs[key]] = 0;
        }
        res[strs[key]]++;
    }

    return res;
}

// 198. House Robber
function isPalindrome(x: number): boolean {
    if (Math.sign(x) === -1) {
        return false;
    }

    let reverse: number = parseFloat(
        x
            .toString()
            .split('')
            .reverse()
            .join(''),
    );

    if (reverse === x) {
        return true;
    } else {
        return false;
    }
}

function searchInsert(nums: number[], target: number): number {
    if (nums.indexOf(target) > -1) {
        return nums.indexOf(target);
    }

    // nums.push(target);
    return [...nums, target].sort((a, b) => a - b).indexOf(target);
}

function isIsomorphic(s: string, t: string): boolean {
    for (let index = 0; index < s.length; index++) {
        if (s.indexOf(s[index]) !== t.indexOf(t[index])) {
            return false;
        }
    }

    return true;
}

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }

    return false;
}

function majorityElement1(nums: number[]): number[] {
    return;
}

function isAnagram(str: string, target: string): boolean {
    if (str.length !== target.length) return false;

    let s = str
        .split('')
        .sort()
        .join('');
    let t = target
        .split('')
        .sort()
        .join('');

    return s === t;
}

function addDigits(num: number): number {
    if (num < 10) {
        return num;
    }

    let res: number = num;
    let numS: string = num.toString();

    while (res > 9) {
        res = 0;
        for (let index = 0; index < numS.length; index++) {
            res += +numS[index];
        }

        numS = res.toString();
    }

    return res;
}

function isUgly(num: number): boolean {
    if (num <= 0) {
        return false;
    }

    while (num % 2 == 0) {
        num /= 2;
    }

    while (num % 3 == 0) {
        num /= 3;
    }

    while (num % 5 == 0) {
        num /= 5;
    }

    return num === 1;
}

function missingNumber(nums: number[]): number {
    let sumNum: number = 0;
    let sumAll: number = 0;
    for (let index = 0; index < nums.length; index++) {
        sumNum += nums[index];
        sumAll += index;
    }

    sumAll += nums.length;

    return sumAll - sumNum;
}
function moveZeroes(nums: number[]): void {
    let num0s: number[] = [];

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === 0) {
            num0s.push(0);
        }
    }

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === 0) {
            nums.splice(index, 1);
            index--;
        }
    }

    nums.push(...num0s);
}

function privatefindDuplicate(nums: number[]): number {
    let numObj: object = {};
    for (const data of nums) {
        if (!numObj[data]) {
            numObj[data] = 0;
        }

        numObj[data]++;
    }

    for (const key in numObj) {
        if (numObj[key] === 2) {
            return +key;
        }
    }
}

function findErrorNums(nums: number[]): number[] {
    let sorts: number[] = Array.from(new Set(nums));
    let sortSum: number = 0;
    let allSum: number = 0;
    let repeatDir: object = {};
    let repeat: number = undefined;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (!repeatDir[element]) {
            repeatDir[element] = element;
        } else {
            repeat = element;
        }

        allSum += index + 1;

        if (sorts[index] !== undefined) {
            sortSum += sorts[index];
        }
    }

    repeatDir = undefined;

    return [repeat, allSum - sortSum];
}

function kthLargestNumber(nums: string[], k: number): string {
    return nums
        .map(BigInt)
        .sort((a, b) => (b - a >= 0 ? 1 : -1))
        [k - 1].toString();
}

function wordPattern(pattern: string, s: string): boolean {
    let ss: string[] = s.split(' ');
    if (pattern.length !== ss.length) {
        return false;
    }

    for (let index = 0; index < pattern.length; index++) {
        if (pattern.indexOf(pattern[index]) !== ss.indexOf(ss[index])) {
            return false;
        }
    }
    return true;
}

function reverseVowels(s: string): string {
    let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    let reverseVowels: string[] = [];
    let newVowels: string[] = [];
    for (let index = 0; index < s.length; index++) {
        if (vowels.indexOf(s[index]) === -1) {
            newVowels.push(s[index]);
        } else {
            newVowels.push('');
            reverseVowels.push(s[index]);
        }
    }

    for (let index = 0; index < newVowels.length; index++) {
        if (!newVowels[index]) {
            newVowels[index] = reverseVowels.pop();
        }
    }

    return newVowels.join('');
}

function sumRange(nums: number[], left: number, right: number): number {
    let sum: number = 0;
    for (let index = left; index <= right; index++) {
        sum += nums[index];
    }
    return sum;
}

class NumArray {
    private _nums: number[] = [];
    constructor(nums: number[]) {
        this._nums = nums;
    }
    sumRange(left: number, right: number): number {
        let sum: number = 0;
        for (let index = left; index <= right; index++) {
            sum += this._nums[index];
        }
        return sum;
    }
}

function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
    if (k === nums1.length + nums2.length) {
        return nums1.concat(nums2);
    }

    nums1 = nums1.concat(nums2).sort((a, b) => b - a);
    nums1.length = k;

    return nums1;
}

function isPowerOfThree(n: number): boolean {
    if (n <= 0) {
        return false;
    }

    while (n % 3 == 0) {
        n /= 3;
    }

    return n === 1;
}

function topKFrequent(nums: number[], k: number): number[] {
    if (nums.length <= k) {
        return nums;
    }

    let topKFrequentDir: object = {};
    for (const data of nums) {
        if (!topKFrequentDir[data]) {
            topKFrequentDir[data] = 0;
        }

        topKFrequentDir[data]++;
    }

    return Object.entries(topKFrequentDir)
        .sort((a, b) => a[1] - b[1]) // sort small to large
        .slice(-k) // staty top K Frequent
        .map((x) => +x[0]); // top K value
}

function intersection(nums1: number[], nums2: number[]): number[] {
    let res: number[] = [];
    for (const num1 of nums1) {
        if (nums2.indexOf(num1) > -1) {
            res.push(num1);
            nums2.splice(nums2.indexOf(num1), 1);
        }
    }

    return res;
}

function commonChars(words: string[]): string[] {
    let wordStr: string = words[0];
    let res: string[] = [];
    for (let i = 0; i < wordStr.length; i++) {
        let check = words.every((word) => word.includes(wordStr[i]));

        if (check) {
            words = words.map((word) => word.replace(wordStr[i], ''));
            res.push(wordStr[i]);
        }
    }

    return res;
}

function isPerfectSquare(num: number): boolean {
    for (let index = 0; index < num / 2; index++) {
        if (index * index === num) {
            return true;
        }
    }

    return false;
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    let resDir: object = {};

    for (const num1 of nums1) {
        for (const num2 of nums2) {
            if (!resDir[num1 + num2]) {
                resDir[num1 + num2] = [];
            }

            resDir[num1 + num2].push([num1, num2]);
        }
    }

    Object.entries(resDir).sort((a, b) => a[1] - b[1]);

    let res: number[][] = [];
    let sorts: any[] = Object.entries(resDir).sort((a, b) => a[1] - b[1]);

    for (const data of sorts) {
        res.push([...data[1]]);
    }

    if (res.length > k) {
        res.length = k;
    }
    return res;
}

function longestCommonPrefix1(strs: string[]): string {
    if (!strs.length) return '';

    let pointString: string = strs[0];
    for (let index = 0; index < pointString.length; index++) {
        if (!strs.every((str) => str[index] === pointString[index])) {
            return strs[0].slice(0, index);
        }
    }

    return strs[0];
}

function maxSubArray(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    let max: number = nums[0];
    let sum: number = 0;
    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];

        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }

    return max;
}

function reverseWords(s: string): string {
    s = s.trim();

    return s
        .split(' ')
        .filter((x) => !!x)
        .reverse()
        .join(' ');
}

function privatefindPeakElement(nums: number[]): number {
    if (nums.length === 1) {
        return 0;
    }

    let max: number = nums[0];
    let maxIndex: number = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > max) {
            max = nums[index];
            maxIndex = index;
        }
    }

    return maxIndex;
}

function kthSmallest(matrix: number[][], k: number): number {
    let arrs: number[] = matrix.flat();

    if (arrs.length === k) {
        return arrs[0];
    }

    return arrs[k - 1];
}

function canConstruct(ransomNote: string, magazine: string): boolean {
    for (const letter of magazine) {
        console.log(` => `, letter);
        ransomNote = ransomNote.replace(letter, '');
    }

    return !ransomNote;
}

function lexicalOrder(n: number): number[] {
    let res: number[] = [];
    for (let index = 1; index <= n; index++) {
        res.push(index);
    }

    return res.sort();
}

function firstUniqChar(s: string): number {
    let strDir: object = {};
    for (let index = 0; index < s.length; index++) {
        let char: string = s[index];
        if (!strDir[char]) {
            strDir[char] = 0;
        }

        strDir[char]++;
    }

    let firstUniqChar: string = '';

    for (const key in strDir) {
        if (strDir[key] === 1) {
            firstUniqChar = key;
            break;
        }
    }

    if (!firstUniqChar) {
        return -1;
    }

    return s.indexOf(firstUniqChar);
}

function repeatedCharacter(s: string): string {
    let setRepeated = new Set();
    for (const letter of s) {
        if (setRepeated.has(letter)) {
            return letter;
        } else {
            setRepeated.add(letter);
        }
    }

    return '';
}

function findTheDifference(s: string, t: string): string {
    for (const letter of s) {
        t = t.replace(letter, '');
    }

    return t;
}

function isSubsequence(s: string, t: string): boolean {
    let str: string = '';
    for (const letter of t) {
        if (s.indexOf(letter) > -1) {
            str += letter;
        }
    }

    return str.indexOf(s) > -1;
}

function longestSubstring(s: string, k: number): number {
    let sortDir: object = {};
    for (const str of s) {
        if (!sortDir[str]) {
            sortDir[str] = 0;
        }

        sortDir[str]++;
    }

    let res: number = 0;
    for (const key in sortDir) {
        if (sortDir[key] >= k) {
            res += sortDir[key];
        }
    }

    return res;
}

function longestPalindrome(s: string): number {
    if (s.length === 1) {
        return 1;
    }

    let strObj: object = {};
    let res: number = 0;

    for (const str of s) {
        if (!strObj[str]) {
            strObj[str] = 1;
        } else {
            strObj[str] = 0;
            res += 2;
        }
    }

    if (s.length > res) {
        return res + 1;
    } else {
        return res;
    }
}

function findDuplicates(nums: number[]): number[] {
    if (nums.length === 0) {
        return [];
    }

    let res: number[] = [];
    let numObj: object = {};

    for (const num of nums) {
        if (!numObj[num]) {
            numObj[num] = 0;
        } else {
            res.push(num);
        }

        numObj[num]++;
    }

    return res;
}

function findDisappearedNumbers(nums: number[]): number[] {
    // let res: number[] = [];
    // for (let index = 1; index <= nums.length; index++) {
    //     if (nums.indexOf(index) === -1) {
    //         res.push(index);
    //     }
    // }

    // return res;

    let numSet = new Set(nums);
    let res: number[] = [];

    for (let index = 1; index <= nums.length; index++) {
        if (!numSet.has(index)) {
            res.push(index);
        }
    }

    return res;
}

function compress(chars: string[]): number {
    if (chars.length === 1) {
        return 1;
    }

    let charObj: object = {};
    for (const char of chars) {
        if (!charObj[char]) {
            charObj[char] = 0;
        }

        charObj[char]++;
    }

    let res: string = '';
    let ress: string[] = [];

    for (const key in charObj) {
        if (charObj[key] === 1) {
            res += `${key}`;
            ress.push(`${key}`);
        } else {
            res += `${key}${charObj[key]}`;
            ress.push(`${key}`);
            ress.push(`${charObj[key]}`);
        }
    }

    return ress.length;
}

function frequencySort(s: string): string {
    let strObj: object = {};
    for (const str of s) {
        if (!strObj[str]) {
            strObj[str] = 0;
        }

        strObj[str]++;
    }

    let res = Object.entries(strObj).sort((a, b) => b[1] - a[1]);
    let str: string = '';

    for (const data of res) {
        console.log(` => `, data);
        for (let index = 0; index < data[1]; index++) {
            str += data[0];
        }
    }

    return str;
}

function repeatedSubstringPattern(s: string): boolean {
    if (s.length % 2 !== 0) {
        return false;
    }

    let strObj: object = {};

    for (const str of s) {
        if (!strObj[str]) {
            strObj[str] = 0;
        }

        strObj[str]++;
    }

    let counts: number[] = Object.values(strObj);
    let point: number = counts[0];

    for (let index = 0; index < counts.length; index++) {
        if (counts[index] === point) {
            counts.splice(index, 1);
        }
        index--;
    }

    return counts.length === 0;
}

function repeatedSubstringPattern1(s: string): boolean {
    if (s.length % 2 !== 0) {
        return false;
    }

    let repeatStr: string = '';
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        repeatStr += s[i];
        if (repeatStr.repeat(s.length / repeatStr.length) === s) {
            return true;
        }
    }

    return false;
}

function licenseKeyFormatting(s: string, k: number): string {
    let strs: string[] = s
        .split('-')
        .join('')
        .toUpperCase()
        .split('');

    for (let i = strs.length - k; i > 0; i -= k) {
        strs[i] = `-${strs[i]}`;
    }

    return strs.join('');
}

function findMaxConsecutiveOnes(nums: number[]): number {
    if (nums.length === 1) return nums[0];

    let res: number = 0;
    let max: number = 0;
    for (const num of nums) {
        res = num === 1 ? res + 1 : 0;
        max = res > max ? res : max;
    }

    return max;
}

function findPoisonedDuration(timeSeries: number[], duration: number): number {
    if (timeSeries.length === 0) return 0;
    if (timeSeries.length === 1) return duration;

    let res: number = duration;
    for (let index = 1; index < timeSeries.length; index++) {
        if (timeSeries[index] - timeSeries[index - 1] < duration) {
            res += timeSeries[index] - timeSeries[index - 1];
        } else {
            res += duration;
        }
    }

    return res;
}

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    for (let i = 0; i < nums1.length; i++) {
        let index: number = nums2.indexOf(nums1[i]);
        let num1: number = nums1[i];
        nums1[i] = -1;

        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] > num1) {
                nums1[i] = nums2[j];
                break;
            }
        }
    }

    return nums1;
}

function findRelativeRanks(score: number[]): string[] {
    let scoreSort: number[] = JSON.parse(JSON.stringify(score)).sort((a, b) => b - a);
    let res: string[] = [];

    for (let data of score) {
        switch (scoreSort.indexOf(data)) {
            case 0:
                res.push('Gold Medal');
                break;
            case 1:
                res.push('Silver Medal');
                break;
            case 2:
                res.push('Bronze Medal');
                break;

            default:
                res.push((scoreSort.indexOf(data) + 1).toString());
                break;
        }
    }

    return res;
}

function checkPerfectNumber(num: number): boolean {
    let sum: number = 0;
    for (let index = 1; index < num; index++) {
        if (num % index === 0) {
            sum += index;
        }
    }
    return sum === num;
}

function detectCapitalUse(word: string): boolean {
    if (word === word.toLocaleUpperCase() || word === word.toLocaleLowerCase()) return true;

    let first: string = word.substring(0, 1);
    let end: string = word.substring(1, word.length);
    return first === first.toLocaleUpperCase() && end === end.toLocaleLowerCase();
}

function checkSubarraySum(nums: number[], k: number): boolean {
    let sum: number = 0;
    let hash: object = {};
    hash[0] = -1;

    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];

        if (k !== 0) {
            sum %= k;
        }

        if (hash[sum] !== undefined) {
            if (index - hash[sum] > 1) {
                return true;
            }
        } else {
            hash[sum] = index;
        }
    }

    return false;
}

function reverseStr(str: string, k: number): string {
    let res: string[] = str.split('');
    for (let index = 0; index < str.length; index += k * 2) {
        let resverseStrs: string[] = res.splice(index, k).reverse();
        res.splice(index, 0, ...resverseStrs);
    }

    return res.join('');
}

function checkRecord(s: string): boolean {
    if (s.indexOf('LLL') > -1) return false;

    let a2count: number = 0;
    for (const str of s) {
        if (str === 'A') {
            a2count++;
        }

        if (a2count > 1) {
            return false;
        }
    }

    return true;
}

function reverseWords1(s: string): string {
    let strs: string[] = s.split(' ');
    let res: string = '';
    for (const str of strs) {
        res +=
            str
                .split('')
                .reverse()
                .join('') + ' ';
    }

    return res.trim();
}

function subarraySum(nums: number[], k: number): number {
    let sum: number = 0;
    let sumCount: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = 0;

        for (let j = i; j < nums.length; j++) {
            sum += nums[j];

            if (sum === k) {
                sumCount++;
            }
        }
    }

    return sumCount;
}

function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let res: number = 0;
    for (let index = 0; index < nums.length; index += 2) {
        res += nums[index];
    }

    return res;
}

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    let flat: number[] = mat.flat();

    if (flat.length !== r * c) {
        return mat;
    }

    let res: number[][] = [];

    for (let index = 0; index < r; index++) {
        res.push(flat.splice(0, c));
    }

    return res;
}

function distributeCandies(candyType: number[]): number {
    let max: number = candyType.length / 2;
    let res: number[] = Array.from(new Set(candyType));

    return res.length > max ? max : res.length;
}

function findLHS(nums: number[]): number {
    let numObj: object = {};
    for (const num of nums) {
        if (numObj[num] === undefined || numObj[num] === null) {
            numObj[num] = 0;
        }

        numObj[num]++;
    }

    let max: number = -Infinity;
    for (const index in numObj) {
        let currKey: number = +index;
        let nextKey: number = currKey + 1;

        if (nextKey !== undefined) {
            max = Math.max(max, numObj[currKey] + numObj[nextKey]);
        }
    }

    return max === -Infinity ? 0 : max;
}

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n < 1) return false;

    let plots: number = 0;

    for (let index = 0; index < flowerbed.length; index++) {
        if (!flowerbed[index - 1] && !flowerbed[index] && !flowerbed[index + 1]) {
            flowerbed[index] = 1;
            plots++;
        }
    }

    return plots > n ? true : false;
}

function replaceWords(dictionary: string[], sentence: string): string {
    let sentences: string[] = sentence.split(' ');
    for (let dic of dictionary) {
        for (let index in sentences) {
            if (sentences[index].startsWith(dic)) {
                sentences[index] = dic;
            }
        }
    }
    return sentences.join(' ');
}

function predictPartyVictory(senate: string): string {
    let isR: boolean = true;
    let isD: boolean = true;
    let deleteRDCount: number = 0;
    let senates: string[] = senate.split('');

    while (isR && isD) {
        isR = false;
        isD = false;

        for (const index in senates) {
            if (senates[index] === 'R') {
                if (deleteRDCount < 0) {
                    senates[index] = '';
                } else {
                    isR = true;
                }

                deleteRDCount++;
            } else if (senates[index] === 'D') {
                if (deleteRDCount > 0) {
                    senates[index] = '';
                } else {
                    isD = true;
                }

                deleteRDCount--;
            }
        }
    }

    return isR ? 'Radiant' : 'Dire';
}

function judgeSquareSum(c: number): boolean {
    let start: number = 0;
    let end: number = Math.floor(Math.sqrt(c));

    while (start > end) {
        let sum: number = start * start + end * end;
        if (sum === c) {
            return true;
        } else if (sum < c) {
            start++;
        } else if (sum > c) {
            end--;
        }
    }
    return false;
}

function judgeCircle(moves: string): boolean {
    let x: number = 0;
    let y: number = 0;

    for (const move of moves) {
        console.log(` => `, move);
        switch (move) {
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x++;
                break;
            case 'R':
                x--;
                break;

            default:
                break;
        }
    }

    return x === 0 && y === 0;
}

function maximumSwap(num: number): number {
    let numStrs: string[] = num.toString().split('');
    let maxIndex: number = numStrs.length - 1;
    let start: number = -1;
    let end: number = -1;

    for (let index = numStrs.length; index >= 0; index--) {
        if (numStrs[index] > numStrs[maxIndex]) {
            maxIndex = index;
        } else if (numStrs[index] < numStrs[maxIndex]) {
            start = index;
            end = maxIndex;
        }
    }

    [numStrs[start], numStrs[end]] = [numStrs[end], numStrs[start]];

    return parseInt(numStrs.join(''));
}

function maxProduct(nums: number[]): number {
    let res: number = nums[0];
    let max: number = res;
    let min: number = res;

    for (let index = 1; index < nums.length; index++) {
        let current: number = nums[index];
        if (current < 0) {
            let temp: number = max;
            max = min;
            min = temp;
        }

        min = Math.min(current * min, current);
        max = Math.max(current * max, current);
        res = Math.max(max, res);
    }

    return res;
}

function canJump(nums: number[]): boolean {
    if (nums.length === 0) return false;

    let max: number = 0;
    for (let index = 0; index < nums.length; index++) {
        if (index > max) {
            return false;
        }

        if (max > nums.length) {
            return true;
        }

        max = Math.max(max, nums[index] + index);
    }

    return true;
}

function rob(nums: number[]): number {
    let prev1: number = 0;
    let prev2: number = 0;

    for (let index = 0; index < nums.length; index++) {
        let dp: number = Math.max(prev1, prev2 + nums[index]);
        prev2 = prev1;
        prev1 = dp;
    }

    return prev1;

    let odd: number = 0;
    let even: number = 0;

    for (let index = 0; index < nums.length; index++) {
        if (index % 2 === 0) {
            odd = Math.max(odd + nums[index], even);
        } else {
            even = Math.max(even + nums[index], odd);
        }
    }

    return Math.max(odd, even);
}

function climbStairs(n: number): number {
    let dp: number[] = [0, 1, 2];

    for (let index = 3; index < n; index++) {
        dp[index] = dp[index - 1] + dp[index - 2];
    }

    return dp[n];
}

function minCostClimbingStairs(cost: number[]): number {
    let prev1: number = 0;
    let prev2: number = 0;

    for (let index = 2; index <= cost.length; index++) {
        let temp: number = prev1;
        prev1 = Math.min(prev1 + cost[index - 1], prev2 + cost[index - 2]);
        prev2 = temp;
    }

    return prev1;

    let dp: number[] = [0, 0];

    for (let index = 2; index <= cost.length; index++) {
        dp[index] = Math.min(dp[index - 1] + cost[index - 1], dp[index - 2] + cost[index - 2]);
    }

    return dp[cost.length];
}

function dominantIndex(nums: number[]): number {
    let sorts: number[] = JSON.parse(JSON.stringify(nums)).sort((a, b) => a - b);
    let max: number = sorts[nums.length - 1];
    sorts.length = sorts.length - 1;

    let isLargest: boolean = false;

    for (const num of sorts) {
        if (max / num >= 2 || num === 0) {
            isLargest = true;
        } else {
            isLargest = false;
            break;
        }
    }

    return isLargest ? nums.indexOf(max) : -1;
}

function maxProfit(prices: number[]): number {
    let min: number = prices[0];
    let max: number = 0;

    // for (const price of prices) {
    //     if (price < min) {
    //         min = price;
    //     } else {
    //         let temp: number = price - min;
    //         if (temp > max) {
    //             max = temp;
    //         }
    //     }
    // }

    for (let index = 1; index < prices.length; index++) {
        min = Math.min(min, prices[index]);
        max = Math.max(max, prices[index] - min);
    }

    return max;
}

function maxProfit1(prices: number[]): number {
    let max: number = 0;

    for (let index = 1; index < prices.length; index++) {
        if (prices[index] > prices[index - 1]) {
            max += prices[index] - prices[index - 1];
        }
    }

    return max;
}

function wiggleMaxLength(nums: number[]): number {
    let up: number = 1;
    let down: number = 1;

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            up = down + 1;
        } else if (nums[i] < nums[i - 1]) {
            down = up + 1;
        }
    }

    return Math.max(up, down);
}

function combinationSum4(nums: number[], target: number): number {
    let dp: number[] = Array(target + 1).fill(0);
    dp[0] = 1;

    for (let index = 0; index <= dp.length; index++) {
        nums.forEach((num) => {
            if (index + num <= target) {
                dp[index + num] += dp[index];
            }
        });
    }

    return dp[target];

    for (let index = 0; index <= target; index++) {
        nums.forEach((num) => {
            if (index >= num) {
                dp[index] += dp[index - num];
            }
        });
    }

    return dp[target];
}

function chunk(arr: any[], size: number): any[][] {
    let res: any[][] = [];
    let temp: any[] = [];

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if (temp.length === size) {
            res.push(temp);
            temp = [];
        }
    }

    if (temp.length > 0) {
        res.push(temp);
    }

    return res;
}

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let total: number = 0;
    let sum: number = 0;
    let start: number = 0;

    for (let index = 0; index < gas.length; index++) {
        total += gas[index] - cost[index];
        sum += gas[index] - cost[index];

        if (sum < 0) {
            sum = 0;
            start = index + 1;
        }
    }

    if (total < 0) {
        return -1;
    }

    return start;
}

function increasingTriplet(nums: number[]): boolean {
    let num1: number = Infinity;
    let num2: number = Infinity;

    for (const num of nums) {
        if (num < num1) {
            num1 = num;
        } else if (num > num1 && num < num2) {
            num2 = num;
        } else if (num > num2) {
            return true;
        }
    }

    return false;
}

function lengthOfLIS(nums: number[]): number {
    let dp: number[] = Array.from({ length: nums.length }, (v, k) => 1);
    let max: number = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
}

function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => a[1] - b[1]);

    let prev: number[] = pairs[0];
    let max: number = 1;

    for (let i = 0; i < pairs.length; i++) {
        let [prevFirst, prevLast]: number[] = prev;
        let [currFirst, currLast]: number[] = pairs[i];
        if (currFirst > prevLast) {
            prev = pairs[i];
            max++;
        }
    }

    return max;
}

function checkValidString(s: string): boolean {
    let left: number = 0;
    let right: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '*') {
            left++;
        } else {
            left--;
        }

        if (left < 0) {
            return false;
        }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')' || s[i] === '*') {
            right++;
        } else {
            right--;
        }

        if (right < 0) {
            return false;
        }
    }

    return true;
}

function validPalindrome(s: string): boolean {
    let strObj: object = {};

    for (const str of s) {
        if (!strObj[str]) {
            strObj[str] = 0;
        }
        strObj[str]++;
    }

    let isPalindrome: number = 0;

    for (const vlaue of Object.values(strObj)) {
        if (vlaue % 2 !== 0) {
            isPalindrome++;
        }

        if (isPalindrome > 2) {
            break;
        }
    }
    return isPalindrome < 3;
}

function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) {
        return [];
    } else if (intervals.length === 1) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    let res: number[][] = [intervals[0]];

    for (let current of intervals) {
        let prev: number[] = res[res.length - 1];

        if (prev[1] >= current[0]) {
            prev[1] = Math.max(prev[1], current[1]);
        } else {
            res.push(current);
        }
    }

    return res;
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
    intervals.push(newInterval);

    intervals.sort((a, b) => a[0] - b[0]);
    let res: number[][] = [intervals[0]];

    for (let current of intervals) {
        let prev: number[] = res[res.length - 1];

        if (prev[1] >= current[0]) {
            prev[1] = Math.max(prev[1], current[1]);
        } else {
            res.push(current);
        }
    }

    return res;
}

function partitionLabels(s: string): number[] {
    let start: number = 0;
    let end: number = -1;
    let res: number[] = [];

    for (let i = 0; i < s.length; i++) {
        end = Math.max(s.lastIndexOf(s[i]), end);
        if (i === end) {
            res.push(i - start + 1);
            start = i + 1;
        }
    }

    return res;
}

function lengthOfLongestSubstring(s: string): number {
    let max: number = 0;
    let substrings: string[] = [];

    for (const str of s) {
        if (substrings.indexOf(str) !== -1) {
            substrings = substrings.splice(substrings.indexOf(str) + 1);
        } else {
            substrings.push(str);
        }

        if (substrings.length > max) {
            max = substrings.length;
        }
    }

    return max;
}

function lengthOfLongestSubstring1(s: string): number {
    let max: number = 0;
    let stacks: string[] = [];

    for (let i = 0; i < s.length; i++) {
        let char: string = s[i];
        let indexInStack: number = stacks.findIndex((item) => item === char);

        if (indexInStack !== -1) {
            stacks.splice(0, indexInStack + 1);
        }

        stacks.push(char);

        if (stacks.length > max) {
            max = stacks.length;
        }
    }

    return max;
}

function romanToInt(s: string): number {
    let curr: number = 0;
    let prev: number = 0;
    let sum: number = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        switch (s[i]) {
            case 'I':
                curr = 1;
                break;

            case 'V':
                curr = 5;
                break;

            case 'X':
                curr = 10;
                break;

            case 'L':
                curr = 50;
                break;

            case 'C':
                curr = 100;
                break;

            case 'D':
                curr = 500;
                break;

            case 'M':
                curr = 1000;
                break;
        }

        if (prev > curr) {
            sum -= curr;
        } else {
            sum += curr;
            prev = curr;
        }
    }

    return sum;
}

function intToRoman(num: number): string {
    const ROMAN: object = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let res: string = '';
    for (let romanStr in ROMAN) {
        let romanNum: number = ROMAN[romanStr];

        while (num >= romanNum) {
            num -= romanNum;
            res += romanStr;
        }
    }

    return res;
}

function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let res: number = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left: number = i + 1;
        let right: number = nums.length - 1;
        let sum: number = 0;

        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
}

function groupAnagrams(strs: string[]): string[][] {
    let strObj: object = {};

    for (const str of strs) {
        let sortStr = str
            .split('')
            .sort()
            .join('');
        if (!strObj[sortStr]) {
            strObj[sortStr] = [str];
        } else {
            strObj[sortStr].push(str);
        }
    }

    return Object.values(strObj);
}

function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1]);

    let pointer: number[] = intervals[0];
    let max: number = 0;
    for (let index = 1; index < intervals.length; index++) {
        if (intervals[index][0] < pointer[1]) {
            max++;
            continue;
        }
        pointer = intervals[index];
    }

    return max;
}

function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1]);

    let endPoint: number = points[0][1];
    let max: number = 1;

    for (let index = 1; index < points.length; index++) {
        if (points[index][0] > endPoint) {
            max++;
            endPoint = points[index][1];
        }
    }

    return max;
}

function findUnsortedSubarray(nums: number[]): number {
    if (nums.length <= 1) return nums.length;

    let sorts: number[] = JSON.parse(JSON.stringify(nums)).sort((a, b) => a - b);

    if (JSON.stringify(sorts) === JSON.stringify(nums)) {
        return 0;
    }

    let firstIndex: number = 0;
    let lastIndex: number = 0;
    for (let i = 0; i < sorts.length; i++) {
        if (sorts[i] !== nums[i]) {
            firstIndex = i;
            break;
        }
    }

    for (let i = sorts.length - 1; i > 0; i--) {
        if (sorts[i] !== nums[i]) {
            lastIndex = i;
            break;
        }
    }

    return lastIndex - firstIndex + 1;
}

function maxProfit2(prices: number[], fee: number): number {
    let minBuyPrice: number = prices[0];
    let profit: number = 0;

    for (const price of prices) {
        let sellPrice: number = price - fee;
        if (price < minBuyPrice) {
            minBuyPrice = price;
        } else if (sellPrice > minBuyPrice) {
            profit += sellPrice - minBuyPrice;
            minBuyPrice = sellPrice;
        }
    }

    return profit;
}

function numRabbits(answers: number[]): number {
    let countObj: object = {};
    let res: number = 0;

    for (const answer of answers) {
        if (!countObj[answer] || countObj[answer] === 0) {
            res += answer + 1;
            countObj[answer] = answer;
        } else {
            countObj[answer] -= 1;
        }
    }

    return res;
}

function lemonadeChange(bills: number[]): boolean {
    if (bills[0] !== 5) return false;

    let fiveCount: number = 0;
    let tenCount: number = 0;

    for (const bill of bills) {
        switch (bill) {
            case 5:
                fiveCount += 5;
                break;

            case 10:
                if (fiveCount === 0) return false;

                fiveCount -= 5;
                tenCount += 10;

                break;

            case 20:
                if ((fiveCount < 15 && tenCount === 0) || fiveCount === 0) return false;

                fiveCount -= 5;
                tenCount > 10 ? (tenCount -= 10) : (fiveCount -= 5);

                break;
        }
    }

    return true;
}

function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => a - b);

    let res: number = 0;
    let first: number = 0;
    let second: number = people.length - 1;

    while (first <= second) {
        if (people[first] + people[second] > limit) {
            res++;
            second--;
        } else {
            res++;
            first++;
            second--;
        }
    }

    return res;
}

function minAddToMakeValid(s: string): number {
    let left: number = 0;
    let right: number = 0;
    for (const str of s) {
        if (str === '(') {
            right++;
        } else if (right > 0) {
            right--;
        } else {
            left++;
        }
    }

    return left + right;
}

function diStringMatch(s: string): number[] {
    let min: number = 0;
    let max: number = s.length;
    let res: number[] = [];

    for (const str of s) {
        if (str === 'I') {
            res.push(min);
            min++;
        } else {
            res.push(max);
            max--;
        }
    }

    res.push(min);

    return res;
}

function minIncrementForUnique(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let res: number = 0;
    let max: number = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let current: number = nums[i];
        if (current > max) {
            max = nums[i];
        } else {
            max++;
            res += max - current;
        }
    }

    return res;
}

function minOperations(nums: number[]): number {
    let res: number = 0;

    for (let i = 1; i < nums.length; i++) {
        let previous: number = nums[i - 1];
        let current: number = nums[i];

        if (current <= previous) {
            current = previous + 1;
            res += current - nums[i];
            nums[i] = current;
        }
    }

    return res;
}

function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }

    return 0;
}

function strWithout3a3b(a: number, b: number): string {
    let res: string = '';

    while (a!! || !!b) {
        if (a > b) {
            if (a > 1) {
                res += 'aa';
                a -= 2;
            } else {
                res += 'a';
                a--;
            }

            if (b > 0) {
                res += 'b';
                b--;
            }
        } else if (b > a) {
            if (b > 1) {
                res += 'bb';
                b -= 2;
            } else {
                res += 'b';
                b--;
            }

            if (a > 0) {
                res += 'a';
                a--;
            }
        } else {
            res += 'ab';
            a--;
            b--;
        }
    }

    return res;
}

function brokenCalc(startValue: number, target: number): number {
    let res: number = 0;

    while (target > startValue) {
        if (target % 2 === 1) {
            target++;
        } else {
            target /= 2;
        }

        res++;
    }

    return res + startValue - target;
}

function largestSumAfterKNegations(nums: number[], k: number): number {
    while (k > 0) {
        let minIndex: number = nums.indexOf(Math.min(...nums));
        nums[minIndex] *= -1;
        k--;
    }

    return nums.reduce((acc, curr) => acc + curr);
}

function maxSubsequence(nums: number[], k: number): number[] {
    if (k >= nums.length) return nums;

    let sort: number[][] = nums.map((x, index) => [index, x]).sort((a, b) => b[1] - a[1]);
    sort = sort.slice(0, k).sort((a, b) => a[1] - b[1]);

    let res: number[] = [];
    for (let num of sort) {
        res.push(num[1]);
    }

    return res;
}

function twoCitySchedCost(costs: number[][]): number {
    costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

    let res: number = 0;
    for (let index = 0; index < costs.length; index++) {
        if (index < costs.length / 2) {
            res += costs[index][0];
        } else {
            res += costs[index][1];
        }
    }

    return res;
}

function minCostToMoveChips(position: number[]): number {
    let odd: number = 0;
    let even: number = 0;

    for (const value of position) {
        value % 2 === 0 ? even++ : odd++;
    }

    return Math.min(odd, even);
}

function balancedStringSplit(s: string): number {
    let validCount: number = 0;
    let res: number = 0;

    for (const str of s) {
        str === 'L' ? validCount++ : validCount--;

        if (validCount === 0) {
            res++;
        }
    }
    return res;
}

function maximum69Number(num: number): number {
    let nums: number[] = [];
    let numStr: string = num.toString();
    for (let index = 0; index < numStr.length; index++) {
        nums.push(+numStr[index]);
    }

    let numStrs: string = '';
    for (let index = 0; index < nums.length; index++) {
        numStrs += `${nums[index]}`;
    }

    return +numStrs.replace('6', '9');

    return +num.toString().replace('6', '9');
}

function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let max: number = 0;

    for (const [box, unit] of boxTypes) {
        let taken: number = Math.min(box, truckSize);
        max += taken * unit;
        truckSize -= taken;

        if (!truckSize) break;
    }

    return max;
}

function maximumTime(time: string): string {
    let [hour, minute]: string[] = time.split(':');

    if (hour === '??') {
        hour = '23';
    } else if (hour[0] === '?') {
        switch (hour[1]) {
            case '0':
            case '1':
            case '2':
            case '3':
                hour = `2${hour[1]}`;
                break;

            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                hour = `1${hour[1]}`;
                break;
        }
    } else if (hour[1] === '?') {
        switch (hour[0]) {
            case '0':
            case '1':
                hour = `${hour[0]}9`;
                break;

            case '2':
                hour = `${hour[0]}3`;
                break;
        }
    }

    if (minute === '??') {
        minute = '59';
    } else if (minute[0] === '?') {
        minute = `5${minute[1]}`;
    } else if (minute[1] === '?') {
        minute = `${minute[0]}9`;
    }

    return `${hour}:${minute}`;
}

function largestOddNumber(num: string): string {
    for (let index = num.length - 1; index >= 0; index--) {
        if (+num[index] % 2 !== 0) {
            return num;
        }

        num = num.slice(0, -1);
    }

    return '';
}

function a(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let resDir: object = {};
    for (const key of nums) {
        if (!resDir[key]) {
            resDir[key] = [];
        }

        if (resDir[key].length < 2) {
            resDir[key].push(key);
        }
    }

    let res: number[][] = [];
    for (const key in resDir) {
        res.push(resDir[key]);
    }

    return res.flat().length;
}

function findWords(words: string[]): string[] {
    let reg1: RegExp = new RegExp(/[qwertyuiop]/);
    let reg2: RegExp = new RegExp(/[asdfghjkl]/);
    let reg3: RegExp = new RegExp(/[zxcvbnm]/);

    let res: string[] = [];

    for (const word of words) {
        let count1: number = 0;
        let count2: number = 0;
        let count3: number = 0;

        for (let letter of word.toLowerCase()) {
            if (reg1.test(letter)) {
                count1 += 1;
                continue;
            }

            if (reg2.test(letter)) {
                count2 += 1;
                continue;
            }

            if (reg3.test(letter)) {
                count3 += 1;
                continue;
            }
        }

        if (count1 === word.length || count2 === word.length || count3 === word.length) {
            res.push(word);
        }
    }

    return res;
}

function findMaxAverage(nums: number[], k: number): number {
    if (nums.length === 1) return nums[0];

    let sum: number = 0;
    let max: number = 0;

    for (let index = 0; index < k; index++) {
        sum += nums[index];
    }

    max = sum;
    for (let i = k; i <= nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }

    return max / k;
}

function findLengthOfLCIS(nums: number[]): number {
    let max: number = 1;
    let temp: number = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            temp++;
            max = Math.max(max, temp);
        } else {
            temp = 1;
        }
    }

    return max;
}

function calPoints(operations: string[]): number {
    let points: number[] = [];

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'C':
                points.splice(points.length - 1);
                break;

            case 'D':
                points.push(points[points.length - 1] * 2);
                break;

            case '+':
                let sum: number = points[points.length - 1] + points[points.length - 2];
                points.push(sum);
                break;

            default:
                points.push(+operations[i]);
                break;
        }
    }

    return points.reduce((prev, curr) => prev + curr);
}

function pivotIndex(nums: number[]): number {
    let sum: number = nums.reduce((prev, curr) => prev + curr, 0);
    let leftSum: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (sum - leftSum - nums[i] === leftSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
}

function canThreePartsEqualSum(arr: number[]): boolean {
    let average: number = arr.reduce((prev, curr) => prev + curr, 0) / 3;

    if (!!(average % 3)) return false;

    let sum: number = 0;
    let count: number = 0;

    for (const num of arr) {
        sum += num;

        if (sum === average) {
            count++;
            sum = 0;
        }
    }

    return count >= 3;
}

function nextGreatestLetter(letters: string[], target: string): string {
    return letters.find((x) => x > target) || letters[0];
}

function maxChunksToSorted(arr: number[]): number {
    let res: number = 0;
    let max: number = arr[0];

    for (let index = 0; index < arr.length; index++) {
        max = Math.max(max, arr[index]);

        if (max === index) {
            res++;
        }
    }

    return res;
}

function uniqueMorseRepresentations(words: string[]): number {
    const morse: object = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..',
    };

    let res: Set<string> = new Set();

    for (let word of words) {
        let key: string = '';

        for (let char of word) {
            key += morse[char];
        }

        res.add(key);
    }

    return res.size;
}

function numberOfLines(widths: number[], s: string): number[] {
    let lines: number = 1;
    let lastPixels: number = 0;
    const baseIndex: number = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        let pixels: number = widths[s.charCodeAt(i) - baseIndex];
        lastPixels += pixels;

        if (lastPixels > 100) {
            lines++;
            lastPixels = pixels;
        }
    }

    return [lines, lastPixels];
}

function shortestToChar(s: string, c: string): number[] {
    let res: number[] = [];
    let pos: number = -s.length;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            pos = i;
        }

        res.push(i - pos);
    }

    for (let i = pos - 1; i >= 0; i--) {
        if (s[i] === c) {
            pos = i;
        }

        res[i] = Math.min(res[i], pos - i);
    }

    return res;
}

function flipAndInvertImage(image: number[][]): number[][] {
    let res: number[][] = [];
    for (const images of image) {
        let temp: number[] = images.reverse();

        for (let index = 0; index < temp.length; index++) {
            temp[index] = temp[index] === 0 ? 1 : 0;
        }

        res.push(temp);
    }

    return res;

    return image.map((images) => images.reverse().map((num) => (num === 1 ? 0 : 1)));
}

function numIdenticalPairs(nums: number[]): number {
    let count: number = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }

    return count;
}

function reversePrefix(word: string, ch: string): string {
    let index: number = word.indexOf(ch);

    if (index === -1) {
        return word;
    }

    let start: string = word
        .substring(0, index + 1)
        .split('')
        .reverse()
        .join('');

    let end: string = word.substring(index + 1);

    return start + end;
}

function countKDifference(nums: number[], k: number): number {
    let count: number = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                count++;
            }
        }
    }
    return count;
}

function areOccurrencesEqual(s: string): boolean {
    let strObj: object = {};

    for (let str of s) {
        if (!strObj[str]) {
            strObj[str] = 0;
        }

        strObj[str]++;
    }

    return new Set(Object.values(strObj)).size === 1;
}

function canBeTypedWords(text: string, brokenLetters: string): number {
    return;
}
