# 5.6. 参照渡し

## 5.6.1. アドレス

一度関数から離れて「変数」について考えてみる。
以前触れた通り、変数は 0 と 1 の組み合わせによって表されているが、プログラムが変数の値を参照するときには、「変数の住所」の情報を持っていなければならない（でなければ、どの変数がどれか分からなくなってしまう）。
この変数の住所のことを **アドレス** と呼ぶ。変数には「値」と「アドレス」の二種類の情報が備わっている。具体的には、メモリの前から何バイト目に変数が格納されているかの情報が与えられる。

アドレスは変数の前に `&` をつけることで取得することができる。

```cpp:line-numbers
#include <iostream>
using namespace std;

int main() {
    int x = 4;
    cout << x << endl;
    cout << &x << endl;
}
```

```
[output]
4
0x7fffe13bd944
```

アドレスは人によって・実行するたびに変わることに注意。（変わらないこともある）
出力に `0x` がついているが、これは 16 進数であることを表している。
10~15 に当たる1桁の値として、`abcdef` が用いられる（探してみると 0-9 と a~f しかない文字列を時々見つけられる。これらは16進数である事が多い）。

- 「`int` 型のアドレス」の型は `int *` である。
- アドレスから元の変数に戻すには、アドレスの前に `*` をつける。

```cpp:line-numbers
#include <iostream>
using namespace std;

int main() {
    int x = 4;
    int *p = &x;
    cout << p << endl;
    *p += 1;
    cout << x << endl;
}
```

```
[output]
0x7ffc62a31e34
5
```

ここで `*p += 1` と書いているが、`p` に `x` のアドレスが入っているので、`x += 1` と書くのと同じことが起きる。

## 5.6.2. 値渡しと参照渡し

```cpp:line-numbers
#include <iostream>
using namespace std;

int triple(int x) {
    x = x*3;
    return 0;
}

int main() {
    int x = 4;
    triple(4);

    cout << x << endl;
}
```

「引数」の節で、関数を呼び出した側の変数は、関数内で操作しても変わらないという事を説明した。

これについてもう少し詳しく触れると、関数を呼び出すとき、与えられた引数は複製され（ = 新しい変数が作られて）、関数内で使用される。

つまり変数の値のみを渡している。この事を **値渡し** と呼ぶ。

`main` 関数で作った `x` を `triple` の中で変更できるようにするには、`x` のアドレス を関数に渡せば良い。

```cpp:line-numbers
#include <iostream>
using namespace std;

int triple(int *x) {
    *x = (*x)*3;
    return 0;
}

int main() {
    int x = 4;
    triple(&x);

    cout << x << endl;
}
```

```
[output]
12
```

これを **アドレス渡し** と呼ぶ。関数にわたすのは変数の値ではなく「変数のアドレス」なので、呼び出し側は `triple(&x)` と記述する。

しかし、`&x` や `*x` をいちいち書くのは面倒なので、これを簡略化した記法が存在する。下のコードを書けば、上のコードと書いたのと同じことになる。

```cpp:line-numbers
#include <iostream>
using namespace std;

int triple(int &x) {
    x = x*3;
    return 0;
}

int main() {
    int x = 4;
    triple(x);

    cout << x << endl;
}
```

```
[output]
12
```

型の部分を `int` から `int &` に変えるだけで、変数のポインタを渡したことになり、`main` 関数の `x` を `triple`
関数から変更できるようになるのである。

この機能を **参照** と言い、この書き方を **参照渡し** と呼ぶ。

::: info
[**\[ V の練習問題へ\]**](https://md.trap.jp/IE4NUAc_RR-USMIXlevsgA#Section-V)

[**\[講習会ページに戻る\]**](https://wiki.trap.jp/Event/welcome/23/lecture/pg-basic)
:::