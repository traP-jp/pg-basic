# 5-A1. Divide each difficulty

以下の$n \leq 7$を受け取って$n \times n$の行列$a_{i,j}=Fibonatti_{ij}$を出力するプログラムの、フィボナッチ数列の解を求める部分を別の関数`int fibonatti(int index);`に分離してみよう。

```go:line-numbers
import "fmt"

func main() {
    var n int
    fmt.Scan(&n)
    for i := 0; i <  n; i++ {
        for j := 0; j <  n; j++ {
            // ここから下を関数に切り分ける
            // print (i*j)th of fibonatti sequence
            first, second := 1, 1
            for k := 0; k < i*j; k++ {
                next := first + second
                first = second
                second = next
            }
            // ここから上を関数に切り分ける
            fmt.Println(second, " ")
        }
        fmt.Println()
    }
}
```

### ヒント

::: details ヒント1

下のコードの`// ここにフィボナッチ数列の計算を実装しよう`の部分を実装してみよう。

```go:line-numbers
import "fmt"

func fibonatti(index int) int {
    first, second := 1, 1
    // ここにフィボナッチ数列の計算を実装しよう
    return second
}

func main() {
    var n int
    fmt.Scan(&n)
    for i := 0; i <  n; i++ {
        for j := 0; j <  n; j++ {
    fib_ij := fibonatti(i*j)
            fmt.Println(fib_ij, " ")
        }
        fmt.Println()
    }
}
```
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開

```go:line-numbers
import "fmt"

func fibonatti(index int) int {
    first, second := 1, 1
    for k := 0; k < index; k++ {
        next := first + second
        first = second
        second = next
    }
    return second
}

func main() {
    var n int
    fmt.Scan(&n)
    for i := 0; i <  n; i++ {
        for j := 0; j <  n; j++ {
    fib_ij := fibonatti(i*j)
            fmt.Println(fib_ij, " ")
        }
        fmt.Println()
    }
}
```

:::