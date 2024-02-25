# 2.2. int 変数

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 4;
  cout << "x" << endl;
  cout << x << endl;
}
```

`int x = 4` で `x` という名前の **int型の変数** を定義できる。変数を簡単に説明すると、「決められた情報を持つもの」である。

* `x` は変数の名前である。アルファベットなら1文字でなくても良い。（ `number` 等）
* `int` は「整数」を持つ **int型** であることを意味する。
* `= 4` は見た通りで、`x` の値を4とする、という意味である。

::: tip
`int` は **integer** (=整数) の略。
:::

`cout` に `x` と書くと、`x` の**中身**が出力される。`""` をつける意味がわかっただろうか。

:::danger
**同じ名前の変数を2回定義する事はできない**。

例えば、

```cpp
int x = 4;
int x = 3;
```

などと書くとコンパイルエラーとなる。
途中で値を変えたい場合は、次のように記す。

```cpp
int x = 4;
x = 3;
```

本当に値が途中で変わっているか気になる場合は、1行目と2行目の間に `cout` 命令を挟んで x の値を確認してみると良いだろう。

```cpp
int x = 4;
cout << x << endl;
x = 3;
cout << x << endl;
```

:::

## 2.2.1. int型 の計算

パソコンは計算機なので、当然計算ができる。

```cpp:line-numbers
int x = 11;
int y = 7;

cout << x + y << endl;
cout << x - y << endl;
cout << x * y << endl;
cout << x / y << endl;
cout << x % y << endl;
```

と書けば、

```
18
4
77
1
4
```

と出力される。上から順に

* 和 `+`
* 差 `-`
* 積 `*`
* 商 `/`
* 剰余(mod) `%`

である。 `+`, `-`, `*`, `/`, `%` 等のような記号を **演算子** と呼ぶ。

ここで、**int型同士の割り算について、結果はint型となる**。（文字通り「商」を取る）
小数は第3章で扱う。

また、値を代入することもできる。

```cpp:line-numbers
int x = 4;
int y = 7;
int f = x + y;

cout << f << endl;

f = x - y;

cout << f << endl;
```

```
[output]
11
-3
```

数学の $=$ とは異なり、これは「右辺の値を左辺に代入する」操作を意味する。

計算の中でも特に、`x = x + 4` 等、「加算」したい時は、`x += 4` 等と略記することができる。

```cpp:line-numbers
int x = 4;
x += 7;
cout << x << endl;
```

```
[output]
11
```

他にも `-=`, `*=`, `/=`, `%=` が使える。

## 2.2.2. オーバーフロー

オタクというのはでかい数字が大好きなので、

```cpp:line-numbers
int yen = 5000000000000000;
cout << yen << endl;
```

と書く。しかし、これを実行すると `937459712` が出力される。

これは、オーバーフローというものが起きるからである。`int`
型が扱える数値には上限があって（同時に下限もある）、それを超える数を扱う事はできない。扱おうとする時に発生する問題を「オーバーフロー」と呼ぶのである。

int 型が扱える数の範囲は `-2,147,483,648` ~ `2,147,483,647` である。基本的に気にすることはないが、起きた時はオーバーフローを疑うと良いだろう。

ちなみに、実行すると出力される値は、数値の最上位の桁をコンピューターが無視するために、上限値を超えた際に値が下限値に戻るからである。

（ゲームで値が 99 を超えたら 0 に戻ったりする所を見たことはないだろうか？最近は見かける事はほぼなくなったが……。）