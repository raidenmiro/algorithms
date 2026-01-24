package main

import "fmt"

// PrintArray - вспомогательная функция для вывода массива
func PrintArray(arr []int) {
	fmt.Print("[")
	for i, v := range arr {
		if i > 0 {
			fmt.Print(", ")
		}
		fmt.Print(v)
	}
	fmt.Println("]")
}

// Max - находит максимальное значение в массиве
func Max(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	max := nums[0]
	for _, v := range nums {
		if v > max {
			max = v
		}
	}
	return max
}
