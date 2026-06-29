# Go LeetCode-style tasks
#   make test           — run all tests
#   make test-TwoSum    — run tests for TwoSum
#   make test-ContainsDuplicate
#   make list           — list test names

PKGS := .

test:
	go test -v $(PKGS)

test-%:
	go test -v -run $* $(PKGS)

t: test

list:
	@go test -list . 2>/dev/null | grep -E '^Test' || true

.PHONY: test t list
