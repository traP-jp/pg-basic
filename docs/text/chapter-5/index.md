# V. コードの簡易化① - Function

## 5.1. プログラミングの関数

数学における「関数」とは、$f(x)$ 等のように表してある値（この例では $x$ ）によって値 $f(x)$ が決まるものであった。

プログラミングにおいてはこれと少し似ているが、ある値を与えた時に、**決められた処理をして**、ある値を返すものを**関数**と呼ぶ。ここで、関数は値を与える必要はないし、また値を返さなくても良い（決められた処理がなくても良い）という事に注意すること。

C++言語において、関数は以下のように記述する。

```cpp:line-numbers
#include <iostream>
using namespace std;

int hello() {
  cout << "Hello, traP!" << endl;
  return 0;
}

int main() {
  hello();
}
```

```cpp:line-numbers
#include <iostream>
using namespace std;

[型] [関数名]() {
  [文]
  return [返り値];
}

int main() {
  [関数名](); //実行する方
}

```

```
[output]
Hello, traP!
```

---

関数は何回でも実行できる。

```cpp:line-numbers
#include <iostream>
using namespace std;

int hello() {
  cout << "Hello, traP!" << endl;
  return 0;
}

int main() {
  hello();
  hello();
  hello();
}
```

```
[output]
Hello, traP!
Hello, traP!
Hello, traP!
```

ここでは `Hello, traP!` と出力する `Hello` 関数を定義している。
関数を実装するとき、関数の末尾に必ず `return 0;` と記述する（これについては「返り値」の節で扱う） 。

複数回呼び出すと、複数回実行されている事がわかる。複雑な処理を何回も実行するとき、よく関数を使う。

また、main も関数の1つである。C++言語においては、コンピューターはこの main 関数を実行すると考えると良い。

## 5.1.1. 引数

関数に値を渡すときは、以下のように実装する。

```cpp:line-numbers
#include <iostream>
using namespace std;

int triple(int x) {
  cout << x*3 << endl;
  return 0;
}

int main() {
  triple(4);
  triple(5);
}
```

```
[output]
12
15
```

この関数に渡す値のことを **引数** と呼ぶ。
引数の型は `()` の内側で定義される（`(int x)` の部分）。
例えば　string 型の引数を設定したいなら以下のように実装する。

```cpp:line-numbers
#include <iostream>
using namespace std;

int hello(string s) {
  cout << "Hello, " << s << endl;
  return 0;
}

int main() {
  hello("traP");
  hello("Takeno_hito");
}
```

```
[output]
Hello, traP
Hello, Takeno_hito
```

引数は複数個設定することもできる。

```cpp:line-numbers
#include <iostream>
using namespace std;

int add(int x, int y) {
  cout << x + y << endl;
  return 0;
}

int main() {
  int a = 5;
  int b = 10;
  add(4, 7);
  add(a, b);
}
```

```
[output]
11
15
```

引数は、関数内でしか使うことができない（関数を呼び出した側の変数は変わらない）。

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

```
[output]
4
```

これについての詳細は「参照渡し」の節で扱う。

## 5.1.2. 返り値

逆に、関数が値を返すときは以下のように実装する。

```cpp:line-numbers
#include <iostream>
using namespace std;


int ten() {
  return 10;
}

int main() {
  int x = ten();

  cout << x << endl;
}
```

```
[output]
10
```

この時、この「10」を **返り値** と呼ぶ。（10 を return する → 10 を返す）

返り値の型は、関数名の前で宣言している。引数の話とまとめると、関数の定義方法は次の通り。

```cpp
<返り値の型> <関数名> ([引数の名前、型]) {...
```

返り値の型も自分で好きなように宣言できる。ただし複数の返り値を返すことはできない。

main 関数の返り値 は int 型である。他の関数の返り値はすべて呼び出した側に渡されるように、main 関数の返り値は OS に渡される。このOSに渡す値は「終了コード」と呼ばれ、正常時は 0 を返すことが定められている。

なので本来ならば main 関数にも関数末尾に `return 0` を書かなければならないが（そういうテキストも多い）、それを省略しても良いという事になっている（省略すると末尾に `return 0` が自動的に追加される）。

返り値の型を返さない場合は、**void** 型を用いる。この場合、`return` 文は省略できる。（書きたい場合は `return;` と書く）。

```cpp:line-numbers
#include <iostream>
using namespace std;


void hello() {
  cout << "Hello!" << endl;
}

int main() {
  int x = ten();

  cout << x << endl;
}
```

----

引数と返り値を組み合わせることで、数学のような関数が実装できる。

```cpp:line-numbers
#include <iostream>
using namespace std;

int square(int n) {
  return n*n;
}

int main() {
  cout << square(10) << endl;
}
```

```
[output]
100
```

この `square` 関数は、引数 $n$ を受け取り、 $n^2$ を返す関数である。

## 5.2. 再帰関数

関数の中で関数を呼び出すことができる。

```cpp:line-numbers
#include <iostream>
using namespace std;

void printAll(int n) {
  if (n <= 0) return;
  cout << n << endl;
  printAll(n-1);
}

int main() {
  printAll(3);
}
```

```
[output]
3
2
1
```

関数の中で関数を書くと、循環参照みたいなイメージがついて混乱するかもしれない。
そのような時は、1ステップずつ操作を確認していくとわかりやすいだろう。
今回は、各ステップに cout を挟んで、出力を確認しながら確かめてみる。

```cpp:line-numbers
#include <iostream>
using namespace std;

void printAll(int n) {
  cout << "L5: n=" << n << endl;

  if (n <= 0) return;
  cout << "L8: n=" << n << endl;

  cout << n << endl;
  cout << "L11: n=" << n << endl;

  printAll(n-1);
  cout << "L14: n=" << n << endl;
}

int main() {
  cout << "L18: in main function" << endl;
  printAll(3);
  cout << "L20: in main function" << endl;
}
```

```
[output]
L18: in main function
L5: n=3
L8: n=3
3
L11: n=3
L5: n=2
L8: n=2
2
L11: n=2
L5: n=1
L8: n=1
1
L11: n=1
L5: n=0
L14: n=1
L14: n=2
L14: n=3
L20: in main function
```

## 5.3. 実行時間

### 5.3.1. 再帰関数の実行

ここは演習を交えながら説明しよう。

::: tip
**演習 1. フィボナッチ数**

$a_n = a_{n-1} + a_{n-2} (n \geq 3)$
$a_1 = 1, a_2 = 1$
を満たす数列 $\{a_n\}$ を、フィボナッチ数列と呼ぶ。

フィボナッチ数の第$n$項を求める関数を、定義に沿って再帰関数によって実装し、 $a_{20}$ を求めよ。
:::

しかし、この関数を使って $a_{45}$ は求めようとすると実行にかなり時間がかかり、$a_{50}$ の計算は完了しなくなる。なぜかを考えてみる。

::: tip
**演習 2. フィボナッチ関数**

演習 1. で実装した関数を「フィボナッチ関数」と呼ぶ。第$n$項を求める時に、フィボナッチ関数は総計で何回実行されるか。

:::

答えは $a_n$ 回である。コンピューターは人間よりもずっと高速に計算できるが、無限に早く計算できる訳ではない。目安として、1秒に大体 $10^7$～$10^8$ 回の計算ができる。$a_{45}=1,836,311,903$ なので、大体10秒はかかる。$a_{50}$ に関しては更に時間がかかるだろう（おそらく3分ほど）。

「コンピューターは人間よりもずっと高速に計算できるが、無限に早く計算できる訳ではない」という事さえ頭の中に入れておけば、とりあえず問題ない。

### 5.3.2. 再帰関数の改善

このプログラムを TSUBAME に投げれば数秒で返ってくる**かも**しれない（実際はこのままだと返ってこないのだが…）。しかし、そもそも人間が $a_{50}$ を計算する時はたかだか50回の足し算さえすればよく、頑張れば3分以内に計算できる。この時の計算方法をプログラムに落とし込めば高速に計算できる。

::: tip
**演習 3. フィボナッチ関数の高速化**

手での計算方法を思い出しながら、フィボナッチ数を計算するプログラムを実装し、$a_{45}$ を求めよ。

:::

:::spoiler ヒント 1

例えば $a_5$ は、 $a_4$ と $a_3$ の情報さえあれば計算できる。

:::

:::spoiler ヒント 2

for 文を使って、$a_1$ から順番に計算して、その計算結果を記憶すれば何度も計算せずに済む。

:::

:::spoiler ヒント 3

例えばフィボナッチ数列を記憶する変数 `vector<int> fibo` を用意してみたらどうだろうか。 for　文の中では何番目かを表す $i$ があるから、 $i-1$ 等すれば前のフィボナッチ数が取得できる。

:::

## 5.4. 参照渡し

### 5.4.1. アドレス

一度関数から離れて「変数」について考えてみる。
以前触れた通り、変数は 0 と 1 の組み合わせによって表されているが、プログラムが変数の値を参照するときには、「変数の住所」の情報を持っていなければならない（でなければ、どの変数がどれか分からなくなってしまう）。この変数の住所のことを **アドレス** と呼ぶ。変数には「値」と「アドレス」の二種類の情報が備わっている。具体的には、メモリの前から何バイト目に変数が格納されているかの情報が与えられる。

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

### 5.4.2. 値渡しと参照渡し

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

型の部分を `int` から `int &` に変えるだけで、変数のポインタを渡したことになり、`main` 関数の `x` を `triple` 関数から変更できるようになるのである。

この機能を **参照** と言い、この書き方を **参照渡し** と呼ぶ。

::: info
[**\[ V の練習問題へ\]**](https://md.trap.jp/IE4NUAc_RR-USMIXlevsgA#Section-V)

[**\[講習会ページに戻る\]**](https://wiki.trap.jp/Event/welcome/23/lecture/pg-basic)
:::