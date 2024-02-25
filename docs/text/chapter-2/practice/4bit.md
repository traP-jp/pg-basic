# 2-xx. 4bit

入力から$0 <= n < 16$の整数値を受け取り、2進数で表記しよう。

:::spoiler Hint 1
int型では、`5 / 3`は`1`になります。

:::

:::spoiler Hint 2
整数型の余りは`%`で得ることができます。

:::

:::spoiler Hint 3
1桁ずつ出力してみよう。
:::

:::spoiler Hint 4
$|\displaystyle \frac{n}{2^k}|$を2進数表記すると、$n$の2進数表記の$k+1$桁目以上を得ることができる。
:::

:::spoiler Answer
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
