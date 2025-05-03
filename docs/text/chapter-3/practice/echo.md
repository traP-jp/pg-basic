# 3-A1. Echo

入力から単語を１つ受け取り、それを出力しよう。

### 入力/出力例

::: details 例1

**入力**

```
Hello!
```

**出力**

```
Hello!
```

:::

### ヒント

::: details ヒント1

文字列型の変数を使うには、
```cpp
string s;
```
:::

::: details ヒント2

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

::: details ヒント3

入力を受け取るには`cin`を、出力するには`cout`を使おう。
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開

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
