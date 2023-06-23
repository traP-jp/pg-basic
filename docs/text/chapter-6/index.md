# VI. コードの簡易化② - Struct

第6章では構造体 (struct) について扱う。第5章までとは違い、第6章の知識はなくともプログラミングをする事はできる。しかし、人間がより便利にプログラミングをする為に導入された概念である。

## 6.1. 構造体

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

## 6.2. メソッド

実は、構造体の中に宣言できるのは、変数だけではない。関数もである。
構造体の内側で関数を宣言すると、その関数は特別視され、呼び出し元のインスタンスのメンバ変数に直接アクセスすることができる。
このように、構造体に属しており普通の関数とは扱いが異なる関数を、構造体の**メソッド (method)** と呼ばれる。

メソッド内では、直接自分自身のインスタンスにアクセスする事ができる。

```cpp:line-numbers
#include <string>
#include <iostream>

using namespace std;

struct trap_member {
  string trap_id, student_id;
  int grade;
  string getStudentPrefix() {
    // ドットなしで自分自身のstudent_idにアクセスできる
    string s = student_id;
    string result = {s[0], s[1], s[2]};
    return result;
  }
};

int main() {
  trap_member zer0star{"zer0-star", "22BXXXXX", 2};
  trap_member yukikurage{"yukikurage", "21BYYYYY", 3};

  cout << zer0star.getStudentPrefix() << endl;
  cout << yukikurage.getStudentPrefix() << endl;
}
```

::: tip
関数の名前の付け方、メンバー変数の名前の付け方には色々な作法があるが、ここでは扱わない（色々学ぶよりも、まず何か作ってみる方が重要！）
:::

## 6.3. カプセル化

> すいません、めちゃくちゃ思想を書いてしまったため、なんかいい感じにしておいてください

構造体を使うときは、ただ複数の変数をまとめたいだけではなく、まとめたものに何らかの"役割"
を持たせることが多い。例えば、上の例では`trap_id`、`student_id`、`grade`をまとめたものに「traP部員」という役割を与えている。

このように役割を持った構造体があるとき、もはや必要なのは構造体の持つ生の情報そのものよりも、特定のメソッド群による"振舞い"
であるということがある。このとき、期待される振舞い以外の情報は、使う側にとって知る必要がない、どころか知ってしまってはプログラムの複雑性が増してしまうということがある。

つまり、知る必要のあるメンバ変数やメソッド以外はむしろ積極的に外部のプログラムから隠蔽したくなってくるのである。もっと言えば、メンバ変数もメソッドを介して操作したい（取得しかできないなどの制御がしやすいなどの理由により）。（このあたりの感覚は、ある程度プログラミングに習熟しないとわからないと思う（逆に、初心者が理解できたら、怖いと思う）。理解できなくてもプログラミングに支障はないので、無視して進んでくれても構わない。ただ、いつかは身に付けて欲しいと思っている。）

このように、必要なメンバ変数やメソッドだけを公開してそれ以外を隠蔽することを、**カプセル化**と呼ぶ。

C++でカプセル化をするには、定義の前後に`public:`や`private:`を置く。`public:`
の後のメンバ変数やメソッドは公開され、`private:`の後のものは隠蔽される。公開されたメソッドから隠蔽されたメンバを参照することはできる。

```cpp:line-numbers
struct hoge {
public:
  int a; // 公開
  string b; // 公開
  int c() { // 公開
    return 10;
  }
private:
  int d, e; // 隠蔽
  string f() { // 隠蔽
    return b;
  }
public:
  bool g; // 公開
  int h() { // 公開
    return d + a;
  }
};
```

ちなみに、`struct`の代わりに`class`というキーワードでも構造体を宣言することができる。`struct`だとデフォルトで`public`
だが、`class`だとデフォルトで`private`になるという違いがある。

カプセル化したコードの例を見てみよう。以下は構造体 `Car` である。

`Accelerate()` で加速、 `Brake()` で減速する。また、 `MoveFoward()` で前進する。

```cpp:line-numbers
struct Car {
private:
    int speed = 0;
    int pos = 0;

public:
    int GetSpeed() {
        return speed;
    }
    int GetPos() {
        return pos;
    }
    void Accelerate() {
        speed += 3;
        MoveFoward();
    }
    void Brake() {
        speed -= 2;
        if (speed < 0) speed = 0;
        MoveFoward();
    }
    void Stop() {
        speed = 0;
    }
    void MoveFoward() {
        pos += speed;
    }
};
```

このような場合において、減速・加速を main 関数内で行うと以下のようになる。

```cpp:line-numbers
int main() {
    Car car;

    car.Accelerate();

    car.Brake();

    cout << car.GetSpeed() << endl;
    cout << car.GetPos() << endl;

    car.MoveFoward();

    car.Stop();

    cout << car.GetPos() << endl;    
}
```

これを関数を用いずに実装すると以下のようになる。

```cpp:line-numbers
int main() {
    int car_speed;
    int car_pos;

    car_speed += 3;
    car_pos += car_speed;

    car_speed -= 2;
    car_pos += car_speed;

    cout << car_speed << endl;
    cout << car_pos << endl;

    car_pos += car_speed;

    car_speed = 0;

    cout << car_pos << endl;

}
```

実行されている物は変わらないが、前者の方が"何をしているか"がわかりやすいだろう。
それと、加減速の条件を変更したいと思った時（例えば、加速するとスピードが `+4` される事にしたい）に、変更する部分は少なく済む。
これは、カプセル化を適切に行えていれば、「どのように加速されるか」をmain関数側は気にする必要がないからである。

::: info
[**\[ VI の練習問題へ\]**](https://md.trap.jp/IE4NUAc_RR-USMIXlevsgA#Section-VI)

[**\[講習会ページに戻る\]**](https://wiki.trap.jp/Event/welcome/23/lecture/pg-basic)
:::

