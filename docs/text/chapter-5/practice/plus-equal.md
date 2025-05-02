# Operator+=

`int`型の`a`と`b`について`a`に`b`を足す操作である

```cpp
a += b;
```

で用いる`+=`演算子と同じ働きをする関数を書こう。

### ヒント

::: details ヒント1
`a`を参照渡しで受け取ることで、`a`の値を書き換えることができる。
:::

### 解答例

::: tip 解答例1
::: spoiler クリックして展開
```cpp:line-numbers
void compound_assigned_plus(int& lhs, int rhs) {
    lhs = lhs + rhs;
    return;
}
```
:::