# 2-B1. 4bit

入力から$0 <= n < 16$の整数値を受け取り、2進数で表記しよう。

### 入力/出力例

::: details 例1

**入力**

```
9
```

**出力**

```
1001
```

:::

::: details 例2

**入力**

```
13
```

**出力**

```
1101
```

:::

### ヒント

::: details ヒント1
`int`型では、`5 / 3`は`1`になる。

:::

::: details ヒント2
整数型の余りは`%`で得ることができる。

:::

::: details ヒント3
1桁ずつ出力してみよう。
:::

::: details ヒント4
$\displaystyle\left\lfloor\frac{n}{2^k}\right\rfloor$を2進数表記すると、$n$の2進数表記の$k+1$桁目以上を得ることができる。
:::

### 解答例

::: tip 解答例1
 
::: spoiler クリックして展開
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << (n / 8) % 2;
    cout << (n / 4) % 2;
    cout << (n / 2) % 2;
    cout << n % 2;
    cout << endl;
}
```

:::
