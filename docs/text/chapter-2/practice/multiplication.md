# 2-xx. Multiplication

cinでint型の整数を2つ受け取って、その積をターミナルに出力しよう。

:::spoiler Hint 1
２つの値を入力から受け取るには、
```cpp
cin >> first_value >> second_value;
```

:::

:::spoiler Hint 2


:::spoiler Answer

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