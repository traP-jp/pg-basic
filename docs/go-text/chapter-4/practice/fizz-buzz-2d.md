# 4-B1. fizz-buzz 2D

整数 $H, W$ が渡されるので、$H\times W$ の二次元配列 $a_{i,j}\ (1\leq i\leq H, 1\leq j\leq W)$ を出力しよう。

ただし、$a_{i,j}$ は

-   $i$ は3の倍数でなく、$j$ は5の倍数でないとき、$i\times j$ (数値)
-   $i$ が3の倍数で、$j$ は5の倍数でないとき、`Fi` (文字列)
-   $i$ は3の倍数でなく、$j$ が5の倍数のとき、`Bu` (文字列)
-   $i$ が3の倍数で、$j$ が5の倍数のとき、`FB` (文字列)

### 入力/出力例

::: details 例1

**入力**

```
7 6
```

**出力**

```
1	2	3	4	Bu	6	
2	4	6	8	Bu	12	
Fi	Fi	Fi	Fi	FB	Fi	
4	8	12	16	Bu	24	
5	10	15	20	Bu	30	
Fi	Fi	Fi	Fi	FB	Fi	
7	14	21	28	Bu	42	
```

> $i$ 行 $j$ 列に $a_{i,j}$ を出力している。

---

::: tip 出力の幅を揃える方法
数字 ( $i\times j$ ) や 文字 (`Fi`, `Bu`, `FB`) を出力した後に `\t` を出力すると数字や文字を揃えることができます。

例えば、以下のコードで上記のような出力例を再現できます。

```go
import "fmt"

func main() {
    fmt.Println("1	2	3	4	Bu	6	")
    fmt.Println("2	4	6	8	Bu	12	")
    fmt.Println("Fi	Fi	Fi	Fi	FB	Fi	")
    fmt.Println("4	8	12	16	Bu	24	")
    fmt.Println("5	10	15	20	Bu	30	")
    fmt.Println("Fi	Fi	Fi	Fi	FB	Fi	")
    fmt.Println("7	14	21	28	Bu	42	")
}
```
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開
```go
import "fmt"

func main() {
    int h, w
    fmt.Scan(&h, &w)
    for i := 0; i <  h; i++ {
        for j := 0; j <  w; j++ {
            if (i % 3 == 2) {
                if (j % 5 == 4) {
                    fmt.Println("FB	")
                }
                else {
                    fmt.Println("Fi	")
                }
            }
            else {
                if (j % 5 == 4) {
                    fmt.Println("Bu	")
                }
                else {
                    fmt.Println((i+1) * (j+1), "	")
                }
            }
        }
        fmt.Println()
    }
}
```
:::
