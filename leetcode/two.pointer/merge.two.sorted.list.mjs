/**
 * https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 */

export const mergeTwoSortedArray = (nums1, m, nums2, n) => {
  let l1 = m - 1,
    l2 = n - 1,
    c = m + n - 1;

  while (c >= 0) {
    if (nums1[l1] === undefined || nums2[l2] > nums1[l1]) {
      nums1[c--] = nums2[l2--];
    } else {
      nums1[c--] = nums1[l1--];
    }
  }
};
