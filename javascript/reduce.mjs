function reduce(nums, fn, initialValue) {
    let res = initialValue;

    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i], i)
    }

    return res
}