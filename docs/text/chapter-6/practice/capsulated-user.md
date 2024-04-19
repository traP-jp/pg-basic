# Capsulated Zer0-Star

[6.1. 構造体](../struct)に登場した`Member`クラスについて、`trap_id`、`student_id`、`grade`を隠蔽しよう。また、`trap_id`と`student_id`は読み取りのみ、`grade`は読み取りと変更ができるようにしよう。

<<<@/text/chapter-6/struct.cpp#define{cpp:line-numbers}


::: spoiler Answer
値の設定をするメンバ関数と取得をするメンバ関数(それぞれ、setter,getterと呼ばれます)を用意すると、隠蔽されたメンバ変数へアクセスすることができる。
```cpp:line-numbers
// setter, getterを用いた実装
#include <iostream>
#include <string>

using namespace std;

class CapsulatedMember {
    private:
    string trap_id, student_id;
    int grade;

    public:
    CapsulatedMember(
        string trap_id_,
        string student_id_,
        int grade_
    ) {
        trap_id = trap_id_;
        student_id_ = student_id_;
        grade = grade_;
    }

    void set_grade(int new_grade) {
        grade = new_grade;
    }

    string get_trap_id() {
        return trap_id;
    }

    string get_student_id() {
        return student_id;
    }

    int get_grade() {
        return grade;
    }
};

```
メンバ変数の参照を返すメンバ関数でも良い。
```cpp:line-numbers
// 参照渡しを用いた実装
#include <iostream>
#include <string>

using namespace std;

class CapsulatedMember {
    private:
    string _trap_id, _student_id;
    int _grade;

    public:
    CapsulatedMember(
        string trap_id_,
        string student_id_,
        int grade_
    ) {
        _trap_id = trap_id_;
        _student_id_ = student_id_;
        _grade = grade_;
    }

    const string& trap_id() {
        return _trap_id;
    }

    const string student_id() {
        return _student_id;
    }

    int& grade() {
        return _grade;
    }
}
```
:::