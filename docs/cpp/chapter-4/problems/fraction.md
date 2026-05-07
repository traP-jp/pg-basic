# 4.Q Fraction（★★☆）

## 問題

入力から整数$a,b,c,d$を受け取り、$\frac{a}{b}+\frac{c}{d}$を計算して、存在するなら分数`n/m`のような文字列として表示しよう。

結果を約分する必要はないものとします。

## 入出力例

### 例1

#### 入力

```Input:line-numbers
1 2 3 4
```

#### 出力

```Output:line-numbers
10/8
```

$\frac{1}{2} + \frac{3}{4} = \frac{10}{8}$

### 例2

#### 入力

```Input:line-numbers
1 3 5 7
```

#### 出力

```Output:line-numbers
22/21
```

$\frac{1}{3} + \frac{5}{7} = \frac{22}{21}$

### 例3

#### 入力

```Input:line-numbers
1 0 1 0
```

#### 出力

```Output:line-numbers
```

0除算は定義されないため、$\frac{1}{0}$は存在しません。

## ヒント

::: details ヒント1
今回は約分が必要ないので、最小公倍数を求める必要はありません。素直に掛け算で分母を求めてしまってよいでしょう。
:::

## 解答例

::: details 解答例

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;

    // 分母が0でないなら
    if (b != 0 && d != 0) {
        // 分母を計算 (今回は約分が不要なため、最小公倍数でなくともよい)
        int denominator = b * d;

        // 分子を計算
        int numerator = a * d + c * b;

        // 結果を出力
        cout << numerator << "/" << denominator << endl;
    }
}
```

なお、約分をしたい場合は`std::gcd`などを使って最小公倍数を得ることができます。
:::
