package main

import "fmt"

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		r := target - nums[i]

		val, ok := m[r]

		if ok {
			return []int{i, val}
		} else {
			m[nums[i]] = i
		}
	}

	return []int{0, 0}
}

func main() {
	// Пример использования
	nums := []int{2, 7, 11, 15}
	target := 9
	result := twoSum(nums, target)

	fmt.Printf("Input: nums = %v, target = %d\n", nums, target)
	fmt.Print("Output: ")
	PrintArray(result) // Используем функцию из utils.go

	// Другой пример использования функции из utils.go
	fmt.Printf("Max value in nums: %d\n", Max(nums))
}
