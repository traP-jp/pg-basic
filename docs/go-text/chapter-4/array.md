# 4.3. 配列

プログラミングでは、同じような値を複数まとめて扱いたいときがある。このときに配列やスライスを使う。

Go では、固定長の **配列** と可変長の **スライス** がある。ここでは主にスライスを扱う。

```go:line-numbers
arr := []int{10, 20, 30, 40, 50}
strArr := []string{"a", "b", "c"}
```

`[]` の中に数字を書くことで要素を取得できる。要素番号は **0始まり** である。

```go:line-numbers
arr := []int{10, 20, 30, 40, 50}
fmt.Println(arr[2])
arr[1] = 100
fmt.Println(arr[1])
```

```
[output]
30
100
```

`len(arr)` とすると、要素数を調べることができる。

```go:line-numbers
arr := []int{10, 20, 30, 40, 50}
size := len(arr)
fmt.Println(size)
```

```
[output]
5
```

`for` を用いれば、要素をすべて順に扱える。

```go:line-numbers
arr := []int{10, 20, 30, 40, 50}
for i := 0; i < len(arr); i++ {
  fmt.Println(arr[i])
}
```

全ての要素を順に扱いたい場合は、 `range` を使うことができる。

```go:line-numbers
arr := []int{10, 20, 30, 40, 50}
for i := range arr {
  fmt.Println(arr[i])
}
```

```go:line-numbers
arr := []int{10, 20, 30, 40, 50}
for _, value := range arr {
  fmt.Println(value)
}
```

::: tips

`for i := range arr` は `for i := 0; i < len(arr); i++` と同じである。
`for _, value := range arr` は `for i := 0; i < len(arr); i++ { value := arr[i] }` と同じである。

:::

::: warning
Go 言語では、変数は定義したら必ず使わなければならない。　使わない変数が存在する場合コンパイルエラーとなる。
変数を使わない場合は、`_` を使うことで無視することができる。
:::

`append` を用いると、末尾に新しい要素を追加できる。

```go:line-numbers
arr := []int{10, 20, 30, 40, 50}
arr = append(arr, -10)

fmt.Println(arr[5])
fmt.Println(len(arr))
```

```
[output]
-10
6
```

for 文と組み合わせると、できることが非常に広がる。

