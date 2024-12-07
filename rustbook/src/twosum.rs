use std::collections::HashMap;

pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut ht = HashMap::new();

    for (i, &num) in nums.iter().enumerate() {
        if let Some(&j) = ht.get(&(target - num)) {
            return vec![j as i32, i as i32];
        }

        ht.insert(num, i);
    }

    vec![]
}

#[cfg(test)]
mod tests {
    use crate::twosum::two_sum;

    #[test]
    fn it_works() {
        let input = [2, 7, 11, 15].to_vec();
        let expect = vec![0, 1];

        assert_eq!(two_sum(input, 9), expect);
    }
}
