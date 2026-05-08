# 6.Q Even Numbers in Range（★☆☆）

## 問題

整数$A, B$を入力として受け取り、$A$以上$B$以下の**偶数**を小さい順に1行ずつ出力しよう。

ただし、$A \leq B$とする。

## 入出力例

### 例1

#### 入力

```Input:line-numbers
3 10
```

#### 出力

```Output:line-numbers
4
6
8
10
```

### 例2

#### 入力

```Input:line-numbers
2 5
```

#### 出力

```Output:line-numbers
2
4
```

## ヒント

::: details ヒント1
`i % 2 == 0`のとき、`i`は偶数である。
:::

::: details ヒント2
`A`が奇数のときは、最初の偶数は`A + 1`になる。
:::

## 解答例

::: details 解答例

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    int start = a;
    if (start % 2 != 0) {
        start++;
    }

    for (int i = start; i <= b; i += 2) {
        cout << i << endl;
    }
}
```

:::

::: details 解答例2

`i++`で1ずつ進め、偶数かどうかを`if`で判定する方法もあります。

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    for (int i = a; i <= b; i++) {
        if (i % 2 == 0) {
            cout << i << endl;
        }
    }
}
```

:::
