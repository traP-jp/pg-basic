# 6.1. 構造体

構造体は、分散したデータを一つにまとめる事ができる型である。

例として、traP メンバーの名簿を考えよう。

今この講習に居るメンバーの traP ID、学籍番号、学年 の情報がほしいとする。

これらをプログラムで扱うとき、素朴には以下のように個別に変数を宣言すればよい。

```cpp
string trap_id, student_id;
int grade;
```

しかし、複数人分の情報を扱いたかったり、関数に渡したかったりするときにやや不便である。

例として、2人のメンバーの情報が完全に一致するか（同一か）を判定するプログラムを以下に記す。

```cpp:line-numbers
#include <string>
#include <iostream>

using namespace std;

// 引数が長すぎる……
bool equals(
string trap_id1, string student_id1, int grade1,
string trap_id2, string student_id2, int grade2
) {
    return trap_id1 == trap_id2
    && student_id1 == student_id2
    && grade1 && grade2;
}

int main() {
    // 宣言が長すぎる……
    string trap_id1, student_id1, trap_id2, student_id2;
    int grade1, grade2;

    cin >> trap_id1 >> student_id1 >> grade1
    >> trap_id2 >> student_id2 >> grade2;

    if (equals(
    trap_id1, student_id1, grade1,
    trap_id2, student_id2, grade2
    )) {
        cout << "same" << endl;
    } else {
        cout << "not same" << endl;
    }
}
```

これはあまりに長い。
配列を使えば宣言はそれぞれの変数でまとめることはできるが、できれば学生情報は一つの変数にまとめたい。

ここで、複数の変数をまとめてひとつの値として扱える**構造体 (struct)** を導入し、構造体の **型** を定義する。

::: tip
他の言語などではクラスやオブジェクトなどと呼ばれる。
:::

::: tip 用語

- 構造体に属する変数は**メンバ変数 (member variable)** と呼ばれている。
- ある構造体の型を持った値は、その構造体の**インスタンス (instance)** と呼ばれる。

:::

構造体を用いると、コードは以下のようになる。

<<<@/text/chapter-6/struct-raw.cpp{cpp:line-numbers}

少し見やすくなったように感じないだろうか？

<<<@/text/chapter-6/struct.cpp#define{cpp:line-numbers}

この部分で構造体 `Member` を定義している。構造体 `Member` は以下の3つのメンバ変数を持つ。

- `string` 型の `trap_id`
- `string` 型の `student_id`
- `int` 型の `grade`

宣言は以下のように対応する。

<<<@/text/chapter-6/struct.cpp#declare{cpp:line-numbers}

これは省略されているが、先頭から順に `trap_id = "zer0-star"`, `student_id = "22BXXXXX"`, `grade = 2` とするという宣言である。

次に、構造体を使用する方を見てみよう。`equals` 関数の実装は以下のとおり。

<<<@/text/chapter-6/struct.cpp#function{cpp:line-numbers}

関数の引数として、 `int` 型などと同様に `Member` 型を受け取ることができる。
`Member` 型の変数1つを渡すのは、 `trap_id` `student_id` `grade` の3変数を渡したことと同じになる。

`Member` 型の各変数にアクセスするには、 `member.trap_id` のように、 `.` で変数名とメンバ変数を繋げれば良い。

このようにしたあとは、以下のように構造体を使って `equals` を使用することができる。

<<<@/text/chapter-6/struct.cpp#use{cpp:line-numbers}

なんだか仰々しいものに見えるかもしれないが、本質的には複数の変数をまとめて、わかりやすくなるように取り扱っているだけである。
