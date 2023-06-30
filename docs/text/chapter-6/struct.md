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

```cpp:line-numbers
#include <string>
#include <iostream>

using namespace std;

// 引数が長すぎてナーガになってしまった......
bool equals(
string trap_id1, string student_id1, int grade1,
string trap_id2, string student_id2, int grade2
) {
    return trap_id1 == trap_id2
    && student_id1 == student_id2
    && grade1 && grade2;
}

int main() {
    // 宣言が長すぎて長瀞さんになってしまった......
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

つらいため、やってられない。

ここで、複数の変数をまとめてひとつの値として扱える**構造体 (struct)** が登場する。（他の言語などではクラスやオブジェクトなどと呼ばれている）

また、構造体に属する変数は**メンバ変数 (member variable)** と呼ばれている。

ある構造体の型を持った値は、その構造体の**インスタンス (instance)** と呼ばれる。

コードを見た方がわかりやすいと思うので、とりあえず見てほしい。

```cpp:line-numbers
#include <string>
#include <iostream>

using namespace std;

// trap_memberという、3つの変数をまとめた新たな型が作られる
struct trap_member {
    // 普通に変数宣言するようにメンバ変数を宣言する
    string trap_id, student_id;
    int grade;
};

// trap_member型を値をひとつ渡すだけで、trap_id、student_id、
// gradeの3つの変数を渡したことになる
bool equals(trap_member member1, trap_member member2) {
    // member1の中にあるtrap_idという変数を使い（アクセスし）たかったら、
    // member1.trap_idというようにドットで区切って後ろにつける
    return member1.trap_id == member2.trap_id
    && member1.student_id == member2.student_id
    && member1.grade == member2.grade;
}

int main() {
    // trap_memberのインスタンスの作り方には色々あるが、
    // 変数宣言しつつ作りたいときは、波カッコを使うのがひとつの一般的な方法である
    trap_member zer0star{"zer0-star", "22BXXXXX", 2};
    // このように書くと、以下のように3つ変数を宣言したのと同じような意味になる
    // string zer0star_trap_id = "zer0-star";
    // string zer0star_student_id = "22BXXXXX";
    // int zer0star_grade = 2;

    if (equals(
    zer0star,
    // 変数宣言せずにインスタンスを作りたいときには、
    // カッコの代わりに波カッコを使って関数を呼び出すかのように書くことができる
    trap_member{"hoshimiya", "99B99999", 99999}
    )) {
        cout << "same" << endl;
    } else {
        cout << "not same" << endl;
    }
}
```

なんだか仰々しいものに見えるかもしれないが、本質的には複数の変数をまとめて取り扱っているだけということを忘れないでほしい。

