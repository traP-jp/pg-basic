# 2.3. 入力

cin 命令を用いると、コンソールから入力する事ができる。例えば、与えられた値を10倍するコードは以下の様になる。

```cpp:line-numbers
#include <iostream>
using namespace std;

int main() {
  int x = 10;
  cin >> x;

  cout << x*10 << endl;
}
```

::: tip II 章のまとめ

```cpp:line-numbers
#include <iostream>
using namespace std;

int main() {
  int x = 0;
  cin >> x;

  int y = x + 20;

  cout << y * 10 << endl;
}
```

* 上記のコードで「10」を入力したときに出力される値は？出力を予想したら、実行してみましょう。
* `int` 型は整数を扱う型です。
* cin で入力、 cout で出力。 `<<` の矢印の向きを感覚で覚えましょう。
* `+` `-` `*` `/` `%` で和・差・積・商・剰余 を計算できます。
* あまりにも大きい数字は扱えません。

終わったら、練習問題にチャレンジしましょう。
