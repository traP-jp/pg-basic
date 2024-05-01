# 2.1. はじめてのプログラミング解説

おさらい：第1章のコード

<<<@/text/chapter-2/hello-world.cpp{cpp:line-numbers}

1行目から順に、まずは「用語」を説明していく。  
新しい単語がどんどん出てくるが、単語の説明は 2.1.1. 以降で行う。今は単語を頭の片隅に入れておくレベルで良いだろう。

```cpp:no-line-numbers
#include <iostream>
```

`iostream` と呼ばれるファイルを「インクルード」している。

```cpp:no-line-numbers
using namespace std;
```

`std::` を省略できるようにする。

```cpp
int main() {
```

`main` という名前の「関数」を宣言している。
プログラムは、ここから実行される。

```cpp:no-line-numbers
  cout << "Hello, traP!" << endl;
```

コンソールに `Hello traP!` を出力する。
`"` で囲うのは、これが文字列なのか、命令なのかを区別するため。（VSCode を使っていれば `"Hello traP!"`
の部分だけ色分けされているはず。） `endl` についても 2.1.1. で解説する。

```cpp:no-line-numbers
  // Hello, traP を出力する
```

コメントを書いている。

```cpp:no-line-numbers
}
```

波括弧を閉じている。

## 2.1.1. cout

<<<@/text/chapter-2/hello-world.cpp{5}

`cout` はコンソール（画面）に文字列を出力する命令である。C++ 特有の記法で、 `<<` が ← みたいなものだと考えると良い。`cout`
に向かって文字列を送信しているイメージ。複数つなげることもできる。（以下の例を参照）

```cpp:no-line-numbers
  cout << "Hello, " << "traP!" << endl;
```

また、`endl` は改行の命令を意味する。

### 2.1.1.1. エスケープシーケンス

出力に `"` を含めたい場合、 `cout << "Hello, "traP"!" << endl;` と記述してもコンパイルができない。これは `"Hello, "` で文字列が区切られてしまっているためである。
これを回避するために、(Windows: ¥ キー, Mac: Option (⌥) キーを推しながら ¥ キー) `\` という文字を使って `\"` と書くことで、 `"` を出力することができる。
このように `\` を使った文字の出力の仕方をエスケープシーケンスと呼ぶ。

```cpp:no-line-numbers
  cout << "Hello, \"traP\"!" << endl; // output: Hello, "traP"!
```

他にも以下 `Hello, \n traP!` のように文字列中に `\n` と書くと改行され、この場合は `"Hello, "`と`"traP!"` の間に改行が入る。

``` cpp:no-line-numbers
  cout << "Hello, \ntraP!" << endl;
```

```txt
[output]
Hello,
traP!
```

また、`\`を文字列内で使いたい場合は、`\\` と書く。

```cpp:no-line-numbers
  cout << "\\\\ Hello, traP!! //" << endl;
```

```txt
[output]
\\ Hello, traP!! //
```

::: tip
文字列中では `//` を書いてもコメントアウトされない。
:::


## 2.1.2. セミコロン

C++ では、`;` を多用する。`;` は「命令の区切り」を示す。C++
においては、関数を呼び出すときや、次に出てくる「変数」の宣言時など、各命令の終わりには `;` を記述しなければならない。

::: tip
最終的にはコンピューターが機械語に変換する必要があり、その際に命令の区切りをはっきりさせるために `;`を使うと考えると良い。
:::

## 2.1.3. include 命令

<<<@/text/chapter-2/hello-world.cpp{1 cpp:line-numbers}

`#include` は、外部の関数（やその他もろもろ）が実装されているファイルを取り込んで、使えるようにする命令である。

このソースコードでは `iostream`
と呼ばれるファイルをインクルードしている。これは入出力に関する便利な関数（など）が用意されているファイルである。具体的には、 `cout`
が `iostream` に含まれている。

自分一人で一から作る事は非常に難しいので、予め用意されたソースコードを適宜用いてプログラミングをするのである。

## 2.1.4. using namespace std

<<<@/text/chapter-2/hello-world.cpp{2 cpp:line-numbers}

`cout` と記述しているが、本来ならば `std::cout` と書く必要がある。 `std::` が何を意味しているかは深くは解説しないが（std =
standard くらいは知っても良いだろう）、毎回`std::` と書くのは少し不便なので、これを書かない（省略する）という宣言をしている。

## 2.1.5. コメントアウト

<<<@/text/chapter-2/hello-world.cpp{6 cpp:line-numbers}

行の先頭に `//` と書く事でコメントを書く事ができる。
メモに使うと良い。

## 2.1.6. main 関数

<<<@/text/chapter-2/hello-world.cpp{4 cpp:line-numbers}

コンピューターは main 関数 を実行する。
「関数」については V 章で扱う。

ソースコードの中で `int main()` の後の `{` と、最終行の `}` は対応していて、 `{ }` の内側が main
関数の内容である。今のところは、「`{` からプログラムが始まって、末尾の`}` で終わる」と考えて良い。
