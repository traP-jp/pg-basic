# 6.Q Count Down（★☆☆）

## 問題

整数$N$を1つ入力として受け取り、$N$から$1$までを**大きい順**に1行ずつ出力しよう。

## 入出力例

### 例1

#### 入力

```Input:line-numbers
5
```

#### 出力

```Output:line-numbers
5
4
3
2
1
```

### 例2

#### 入力

```Input:line-numbers
1
```

#### 出力

```Output:line-numbers
1
```

## ヒント

::: details ヒント1
`for`文は減っていくようにも書ける。
:::

::: details ヒント2
`i--`や`i -= 1`を使うと1ずつ減らせる。
:::

## 解答例

::: details 解答例

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = n; i >= 1; i--) {
        cout << i << endl;
    }
}
```

:::
