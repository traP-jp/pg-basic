# 4.Q Positive or Negative（★☆☆）

## 問題

整数$x$を1つ入力として受け取り、$x$が正なら`positive`、負なら`negative`、0なら`zero`と出力するプログラムを作成しよう。

## 入出力例

### 例1

#### 入力

```Input:line-numbers
5
```

#### 出力

```Output:line-numbers
positive
```

### 例2

#### 入力

```Input:line-numbers
-3
```

#### 出力

```Output:line-numbers
negative
```

### 例3

#### 入力

```Input:line-numbers
0
```

#### 出力

```Output:line-numbers
zero
```

## ヒント

::: details ヒント1
`if`文で$0$より大きいかを判定し、`else if`で$0$より小さいかを判定するのが分かりやすい。
:::

::: details ヒント2
最後に残るのは$0$の場合なので、`else`にまとめてしまって良い。
:::

## 解答例

::: details 解答例

```cpp
#include <iostream>
using namespace std;

int main() {
    int x;
    cin >> x;

    if (x > 0) {
        cout << "positive" << endl;
    } else if (x < 0) {
        cout << "negative" << endl;
    } else {
        cout << "zero" << endl;
    }
}
```

:::
