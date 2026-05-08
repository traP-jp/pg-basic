````markdown
# 6.Q Prime Check（★★☆）

## 問題

正の整数$N$を1つ入力として受け取り、$N$が素数なら`Prime`、そうでなければ`Not Prime`と出力しよう。

## 入出力例

### 例1

#### 入力

```Input:line-numbers
17
```

#### 出力

```Output:line-numbers
Prime
```

### 例2

#### 入力

```Input:line-numbers
21
```

#### 出力

```Output:line-numbers
Not Prime
```

## ヒント

::: details ヒント1
$2$から$N-1$までの数で割り切れるかを調べると素数判定ができる。
:::

::: details ヒント1
$N=1$のときを場合分けしておくとプログラムが書きやすい。
:::



## 解答例

::: details 解答例

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    if (n == 1) {
        cout << "Not Prime" << endl;
        return 0;
    }

    bool is_prime = true;
    for (int i = 2; i < n; i++) {
        if (n % i == 0) {
            is_prime = false;
            break;
        }
    }

    if (is_prime) {
        cout << "Prime" << endl;
    }
    else {
        cout << "Not Prime" << endl;
    }
}
```

割る数を$2$から増やしていき、`i*i <= N`を満たす範囲だけ調べれば十分なことも知られている。


```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    if (n == 1) {
        cout << "Not Prime" << endl;
        return 0;
    }

    bool is_prime = true;
    for (int i = 2; i*i <= n; i++) {
        if (n % i == 0) {
            is_prime = false;
            break;
        }
    }

    if (is_prime) {
        cout << "Prime" << endl;
    }
    else {
        cout << "Not Prime" << endl;
    }
}
```

:::

````
