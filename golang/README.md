# Go LeetCode-style tasks

В одном файле — решение и тесты (как в Rust: функция + тесты ниже).
- `*_test.go` — внутри и функция-решение, и тесты в формате LeetCode.

## Запуск

```bash
make test              # все тесты
make test-TwoSum       # только Two Sum
make test-ContainsDuplicate
make test-IsAnagram
make list              # список тестов
```

Или напрямую:
```bash
go test -v .
go test -v -run TestTwoSum .
```

## Добавить новую задачу

Создать один файл `task_name_test.go`: сверху функция-решение, ниже тесты.

```go
// LeetCode N. Task Name
package main

import "testing"

func taskName(in Type) Type {
	// решение
}

func TestTaskName(t *testing.T) {
	tests := []struct {
		name string
		in   Type
		want Type
	}{
		{"Example 1", input1, want1},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := taskName(tt.in); got != tt.want {
				t.Errorf("got %v, want %v", got, tt.want)
			}
		})
	}
}
```

Запуск: `make test-TaskName`.
