# 4.4. string ②

string は、実際には文字の配列であると捉えると、文字列に対する操作を行うことができる。

まずは、アルファベットと数字・一部の記号だけ、いわゆる「**1バイト文字**」のみで考えよう。ひらがなやカタカナについては後ほど解説する。

:::warning
ひらがな・カタカナ・漢字などの文字を使うと、以下の説明が成り立たなくなってしまうことがある。
:::

配列と同じようにして、長さを取得したり、1文字ずつ取得したりすることができる。

```go:line-numbers
s := "traP"
fmt.Println(len(s)) // 4

for i := 0; i < len(s); i++ {
  fmt.Println(s[i])
}
```

## 4.4.1. バイト・ビット

**ビット**(bit) は、1ビットは `0` か `1` かの情報のみを持つ。

**バイト**(Byte) は、パソコンが一般的に処理するデータの単位。基本的に 8bit = 1Byte。  
よくスマホの通信量とかの「キロバイト」等のバイトはこれを指している。

8bit なので、1バイトで扱える情報は `0` から `255` の256（$=2^8$）種類である。

## 4.4.2. ASCII

各文字には、文字コード（ASCIIコード）と呼ばれる番号が定められていて、内部的に char 型には数値が格納されている。

ASCII コード表：https://e-words.jp/p/r-ascii.html
ここで、アルファベットは順番に並んでいるという事実は覚えておくと良い。

## 4.4.3. byte

Go において、1文字を扱う場合は `byte` 型を用いる。
`byte` 型は、1バイトの整数型である。出力するときは ASCII コードに対応する数値が、 `string` 型に変換すると ASCII コードに対応する文字が表示される。

`string` 型は、は `byte` 型の配列として考えることができる。

```go:line-numbers
s := "Hello"
var c byte = s[1]
fmt.Println(c)      // 101
fmt.Println(string(c)) // e
```

文字リテラルはシングルクォートを使う。

```go:line-numbers
var c byte = 'Q'
fmt.Println(c)        // 81
fmt.Println(string(c)) // Q
var c byte = 82
fmt.Println(c)        // 82
fmt.Println(string(c)) // R
```

::: warning

Go の string はそのままでは書き換えられない。変更したいときは `[]byte` などに変換してから操作する。

```go:line-numbers
s := "traP"
// s[3] = 'Q' // Compile Error
b := []byte(s)
b[3] = 'Q'
s = string(b)
fmt.Println(s) // traQ
```

:::

## 4.4.4. 文字や文字列の比較

4.4.3. によれば、1文字1文字は、実際は数値として扱われているのであった。よって、数値と同じように扱えるということは、以下のように比較できるということである。

```go:line-numbers
fmt.Println('A' < 'B') // true
```

また、文字列の辞書順で先かどうかは、`<` `>` の不等号演算子で簡単に実装できる。

```go:line-numbers
s := "Hello"
t := "Bello"
fmt.Println(s < t) // false
```

## 4.4.5. マルチバイト文字

::: tip
マルチバイト文字の詳細な説明は pg-basic 本編を参照のこと。
:::

`len("こんにちは")` は文字数ではなくバイト数を返す。マルチバイト文字（日本語など）について扱いたい場合は `[]rune` を使う。

`rune` は UTF-8 の1文字を表す型である。32bit 整数型のエイリアスである。

```go:line-numbers
dame := "こんにちは"
fmt.Println(len(dame))         // 15 (UTF-8 のバイト数)
fmt.Println(len([]rune(dame))) // 5  (文字数)
```

`for range` を使った場合は、 `rune` 型で扱われる。

```go:line-numbers
dame := "こんにちは"
for _, value := range dame {
  fmt.Println(string(value))
}
```

```
[output]
こ
ん
に
ち
は
```

マルチバイト文字の扱いに起因して、やや非自明な挙動をするので、注意して実装すること（大抵の場合このようなことを実装する必要はなく、適切なライブラリを使う方が賢明なことが多い）。

例えば、 for range の `index` は各文字の先頭バイト位置を表すので非連続な値を取る。

```go:line-numbers
s := "こんにちは"
l := len(s)

s := "こんにちは"
for i, value := range s {
  fmt.Println(i, string(value))
}
```

```
[output]
0 こ
3 ん
6 に
9 ち
12 は
```
