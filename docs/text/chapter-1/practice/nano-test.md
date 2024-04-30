# はじめてのプログラミング nano 編

今の操作はすべてターミナル上で完結させることもできる。ここでは少しだけそれを試してみよう。

::: info
ここで紹介するのは「できる」というだけでの紹介で、本講習中では VSCode を使うことを強くおすすめします！
:::

1. 「作業環境を開く方法」まで一緒
2. `nano nano-test.cpp` でコードを開く
3. キーを入力すると色々入力できる。
4. `Ctrl + X`で終了
5. `y`を入力したあと、`Enter`を押すと保存
6. `ls`コマンドで`nano-test.cpp`があることを確認
7. ターミナル上で、`clang++ nano-test.cpp` で「コンパイル」
8. エラーが出なかったら、 `./a.out` で「実行」
9. できた！

この方法で、次のソースコードからなる `nano-test.cpp` を作成してみよう。

```cpp:line-numbers
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, nano!" << endl;
}
```

::: tip
わからなかったり、詰まったりしたらすぐに TA を呼びましょう！
:::
