# 5-A2. Operator+=

`int`型の`a`と`b`について`a`に`b`を足す操作である

```go
a += b
```

で用いる`+=`演算子と同じ働きをする関数を書こう。

### ヒント

::: details ヒント1
`a`を参照渡しで受け取ることで、`a`の値を書き換えることができる。
:::

### 解答例

::: tip 解答例1
::: spoiler クリックして展開
```go:line-numbers
func compound_assigned_plus(int& lhs, rhs int) {
    lhs = lhs + rhs
    return
}
```
:::