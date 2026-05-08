# 6.Q lower or UPPER

## 問題

アルファベット1文字が渡されたとき、それが大文字なら`UPPERCASE`、小文字なら`lowercase`と出力しよう。

## 入出力例

### 例1

#### 入力

```Input:line-numbers
a
```

#### 出力

```Output:line-numbers
lowercase
```

### 例2

#### 入力

```Input:line-numbers
B
```

#### 出力

```Output:line-numbers
UPPERCASE
```

## ヒント

::: details ヒント1
`char`型は1byteの整数値のため、互いに大小関係があります。ASCIIコードの話を思い出してみましょう。
:::

## 解答例

::: details 解答例
`char`型は各文字コードに対応する整数値のため、`<`、`>`、`<=`、`>=`などで大小を比較することができます。

```cpp
#include <iostream>
using namespace std;

int main() {
    char c;
    cin >> c;
    if (c >= 'a') {
        cout << "lowercase" << endl;
    }
    else {
        cout << "UPPERCASE" << endl;
    }
}
```

:::
