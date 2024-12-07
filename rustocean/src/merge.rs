// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
//
// Input: nums1 = [1], m = 1, nums2 = [2, 3], n = 0
// Output: [0,2,3]
pub fn merge_two_sorted_array(a: &mut Vec<i32>, m: i32, b: &mut Vec<i32>, n: i32) {
    let mut k = (m + n - 1) as usize;
    let mut i = (m - 1) as isize;
    let mut j = (n - 1) as isize;

    while j >= 0 {
        if i >= 0 && a[i as usize] > b[j as usize] {
            a[k] = a[i as usize];
            i -= 1;
        } else {
            a[k] = b[j as usize];
            j -= 1;
        }
        k -= 1;
    }
}
