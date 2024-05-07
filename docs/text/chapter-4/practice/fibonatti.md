# 4-xx. Fibonatti Number

整数$N$を受け取り、フィボナッチ数列の$N$番目を出力しよう。

::spoiler Hint 1
$F_{n}=F_{n-1}+F_{n-2}$をfor文で計算しよう。
::

::spoiler Hint 2
$F_{n-1}$ と $F_{n-2}$を持つ変数`latest`、`second_latest`を作り、ループの中で漸化式を満たすように更新していこう。
::

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

別解: `.push_back`を用いて、フィボナッチ数列の各値を配列に格納していく方法もあります。

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> fibonatti_sequence = {0, 1};
    for (int i = 2; i < n; i++) {
        int next = fibonatti_sequence[i-1] + fibonatti_sequence[i-2];
        fibonatti_sequence.push_back(next);
    }
    cout << fibonatti_sequence.back() << endl;
}

:::
