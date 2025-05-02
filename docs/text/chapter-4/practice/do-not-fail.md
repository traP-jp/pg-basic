# DO NOT FAIL

入力された複数の点数を受け取って、59点以下なら`Failed`と出力しよう。また、`-1`が入力されたら`Passed!`と出力して終了しよう。

### 入力/出力例

:::info 例1

:::spoiler クリックして展開

**入力**

```
59
72
31
-1
```

**出力**

```
Failed
Failed
Passed!
```

> 72の入力に対しては出力を行いません。
:::

### ヒント


:::tip ヒント1

:::spoiler クリックして展開
`while (true)`とすることで、明示的に`break`しない限り終了しないループを実装することができます。

```cpp
// これは絶対に終了しない (無限ループ)
while(true) {
}

while(true) {
    // 適当な条件でbreakを実行することでループを抜けることが可能
    if (some_condition) {
        break;
    }
}
```
:::

### 解答例

:::danger 解答例1

:::spoiler クリックして展開
```cpp
#include <iostream>
using namespace std;

int main() {
    while(true) {
        int score;
        cin >> score;

        if (score == -1) {
            cout << "Passed!" << endl;
            break;
        }

        if (score < 60) {
            cout << "Failed" << endl;
        }
    }

    return 0;
}
```
