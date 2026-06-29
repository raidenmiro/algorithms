package binarytree

type Node struct {
	value int
	left  *Node
	right *Node
}

func getHeight(node *Node, height int) int {
	if node == nil {
		return height
	}

	return max(getHeight(node.left, height+1), getHeight(node.right, height+1))
}

func abs(a int) int {
	if a < 0 {
		return -a
	}

	return a
}

func Solution(root *Node) bool {
	if root == nil {
		return true
	}

	leftHeight := getHeight(root.left, 0)
	rightHeight := getHeight(root.right, 0)

	if abs(leftHeight-rightHeight) > 1 {
		return false
	}

	return Solution(root.left) && Solution(root.right)
}
