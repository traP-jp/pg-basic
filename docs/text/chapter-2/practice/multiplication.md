# 2-A1. Multiplication

cinでint型の整数を2つ受け取って、その積をターミナルに出力しよう。

### 入力/出力例

:::info 例1

:::spoiler クリックして展開

**入力**

```
3 4
```

**出力**

```
12
```

:::

### ヒント

:::tip ヒント1

:::spoiler クリックして展開
２つの値を入力から受け取るには、
```cpp
cin >> first_value >> second_value;
```
:::

### 解答例

:::danger 解答例1

:::spoiler クリックして展開

```cpp
#include <iostream>
using namespace std;

int main() {
    // 変数を２つ宣言
    int lhs, rhs;
    // 整数値を２つ受け取る
    cin >> lhs >> rhs;
    // 積を計算
    int answer = lhs * rhs;
    // 出力
    cout << answer << endl;
}
```

:::