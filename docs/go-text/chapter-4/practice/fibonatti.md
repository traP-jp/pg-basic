# 4-A1. Fibonatti Number

正の整数$N$を受け取り、フィボナッチ数列の$N$番目を出力しよう。

ただし、フィボナッチ数列は $\{1,1,2,...\}$ とします。

### 入力/出力例

::: details 例1

**入力**

```
4
```

**出力**

```
3
```

> $F_4 = 3$

:::

::: details 例2

**入力**

```
6
```

**出力**

```
8
```

> $F_6 = 8$

:::


### ヒント

::: details ヒント1
$F_{n}=F_{n-1}+F_{n-2}$を`for`文で計算しよう。
:::

::: details ヒント2
$F_{n-1}$ と $F_{n-2}$を持つ変数`latest`、`second_latest`を作り、ループの中で漸化式を満たすように更新していこう。
:::

::: details ヒント3
`latest`と`second_latest`を同時に更新することはできないので、一時的な変数(`next`など)を使って保持しておこう。
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開
for文を使うことでフィボナッチ数列の$N$番目を求めることができる。

```go
import "fmt"

func main() {
    var n int
    fmt.Scan(&n)
    secondLatest, latest := 0, 1
    for i := 2; i <= n; i++ {
        // i番目を計算
        next := secondLatest + latest

        // 最新の値を更新
        secondLatest = latest
        latest = next
    }
    fmt.Println(latest)
}
```

:::

::: tip 解答例2

::: spoiler クリックして展開
`.push_back`を用いて、フィボナッチ数列の各値を配列に格納していく方法もあります。

```go
import "fmt"

func main() {
    var n int
    fmt.Scan(&n)
    fibonacciSequence := []int{0, 1}
    for i := 2; i <= n; i++ {
        // i番目を計算
        next := fibonacciSequence[i-1] + fibonacciSequence[i-2]
        fibonacciSequence = append(fibonacciSequence, next)
    }
    fmt.Println(fibonacciSequence[len(fibonacciSequence)-1])
}
```
:::
