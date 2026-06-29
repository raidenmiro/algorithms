// Task https://new.contest.yandex.ru/contests/80790/problems?id=149944%2F2025_08_30%2FesfoDkMjLn

package graphfromroute

import (
	"bufio"
	"fmt"
	"os"
)

func Solution() {
	in := bufio.NewReader(os.Stdin)
	out := bufio.NewWriter(os.Stdout)
	defer out.Flush()

	var n, m int
	fmt.Fscan(in, &n, &m)

	g1 := make([][]int, n)
	g2 := make([][]int, n)

	for i := 0; i < n; i++ {
		g1[i] = make([]int, n)
		g2[i] = make([]int, n)
	}

	for i := 0; i < m; i++ {
		var cnt int
		fmt.Fscan(in, &cnt)

		arr := make([]int, cnt)
		for j := 0; j < cnt; j++ {
			fmt.Fscan(in, &arr[j])
		}

		for j := 0; j < cnt-1; j++ {
			u := arr[j] - 1
			v := arr[j+1] - 1

			g1[u][v] = 1
			g1[v][u] = 1
		}

		for a := 0; a < cnt; a++ {
			for b := a + 1; b < cnt; b++ {
				u := arr[a] - 1
				v := arr[b] - 1

				g2[u][v] = 1
				g2[v][u] = 1
			}
		}
	}

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			fmt.Fprint(out, g1[i][j], " ")
		}
		fmt.Fprintln(out)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			fmt.Fprint(out, g2[i][j], " ")
		}
		fmt.Fprintln(out)
	}
}
