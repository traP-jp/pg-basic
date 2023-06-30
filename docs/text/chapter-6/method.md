# 6.2. メソッド

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

