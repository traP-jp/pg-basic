# 3-A1. Echo

入力から単語を１つ受け取り、それを出力しよう。

:::spoiler Hint 1
文字列型の変数を使うには、
```cpp
string s;
```
:::

:::spoiler Hint 2
もしもこんなエラーが出たとしたら、
```
./Main.cpp:4:5: error: unknown type name 'string'; did you mean 'std::string'?
    string s;
    ^~~~~~
    std::string
```

```cpp
using namespace std;
```
で、`std::`を省略できるようにしよう。
:::

:::spoiler Hint 3
入力を受け取るには`cin`を、出力するには`cout`を使おう。
:::


:::spoiler Answer

```cpp
#include <iostream>
using namespace std;

int main() {
    string s;
    cin >> s;
    cout << s;
}
```

:::
