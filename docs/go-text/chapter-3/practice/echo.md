# 3-A1. Echo

入力から単語を１つ受け取り、それを出力しよう。

### 入力/出力例

::: details 例1

**入力**

```
Hello!
```

**出力**

```
Hello!
```

:::

### ヒント

::: details ヒント1

文字列型の変数を使うには、
```go
    var s string
```
:::

::: details ヒント2

もしもこんなエラーが出たとしたら、
```
./Main.go:4:5: error: unknown type name 'string'; did you mean 'string'?
    string s;
    ^~~~~~
    string
```

```go
```
で、``を省略できるようにしよう。
:::

::: details ヒント3

入力を受け取るには`fmt.Scan`を、出力するには`fmt.Println`を使おう。
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開

```go
import "fmt"

func main() {
    var s string
    fmt.Scan(&s)
    fmt.Println(s)
}
```

:::
