# 4-A1. Fibonatti Number

正の整数$N$を受け取り、フィボナッチ数列の$N$番目を出力しよう。

ただし、フィボナッチ数列は $\{1,1,2,...\}$ とします。

### 入力/出力例

::: details 例1

**入力**

```
4
```

**出力**

```
3
```

> $F_4 = 3$

:::

::: details 例2

**入力**

```
6
```

**出力**

```
8
```

> $F_6 = 8$

:::


### ヒント

::: details ヒント1
$F_{n}=F_{n-1}+F_{n-2}$を`for`文で計算しよう。
:::

::: details ヒント2
$F_{n-1}$ と $F_{n-2}$を持つ変数`latest`、`second_latest`を作り、ループの中で漸化式を満たすように更新していこう。
:::

::: details ヒント3
`latest`と`second_latest`を同時に更新することはできないので、一時的な変数(`next`など)を使って保持しておこう。
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開
for文を使うことでフィボナッチ数列の$N$番目を求めることができる。

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int second_latest = 0, latest = 1;
    for (int i = 2; i <= n; i++) {
        // i番目を計算
        int next = second_latest + latest;

        // 最新の値を更新
        second_latest = latest;
        latest = next;
    }
    cout << latest << endl;
}
```

:::

::: tip 解答例2

::: spoiler クリックして展開
`.push_back`を用いて、フィボナッチ数列の各値を配列に格納していく方法もあります。

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> fibonatti_sequence = {0, 1};
    for (int i = 2; i <= n; i++) {
        // i番目を計算
        int next = fibonatti_sequence[i-1] + fibonatti_sequence[i-2];
        fibonatti_sequence.push_back(next);
    }
    cout << fibonatti_sequence.back() << endl;
}
```
:::
