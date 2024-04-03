# 4-xx. Fibonatti Number

整数$N$を受け取り、フィボナッチ数列の$N$番目を出力しよう。

:::spoiler Answer
for文を使うことでフィボナッチ数列の$N$番目を求めることができる。
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int second_latest = 0, latest = 1;
    for (int i = 2; i < n; i++) {
        int next = second_latest + latest;
        second_latest = latest;
        latest = next;
    }
    cout << latest << endl;
}
```

:::
