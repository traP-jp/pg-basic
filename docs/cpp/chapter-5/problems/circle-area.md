# 5.Q Circle Area（★☆☆）

## 問題

半径$r$を表す実数を1つ入力として受け取り、円の面積$\pi r^2$を求めて出力しよう。

ここでは$\pi = 3.14$として計算する。

## 入出力例

### 例1

#### 入力

```Input:line-numbers
2
```

#### 出力

```Output:line-numbers
12.56
```

### 例2

#### 入力

```Input:line-numbers
0.5
```

#### 出力

```Output:line-numbers
0.785
```

## ヒント

::: details ヒント1
`double`型を使うと小数を扱える。
:::

::: details ヒント2
円の面積は`r * r * 3.14`で計算できる。
:::

## 解答例

::: details 解答例

```cpp
#include <iostream>
using namespace std;

int main() {
    double r;
    cin >> r;

    double area = r * r * 3.14;
    cout << area << endl;
}
```

:::
