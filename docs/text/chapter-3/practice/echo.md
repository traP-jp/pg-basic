# 3-A1. Echo

入力から単語を１つ受け取り、それを出力しよう。

### 入力/出力例

:::info 例1

:::spoiler クリックして展開

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

:::tip ヒント1

:::spoiler クリックして展開
文字列型の変数を使うには、
```cpp
string s;
```
:::

:::tip ヒント2

:::spoiler クリックして展開
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

:::tip ヒント3

:::spoiler クリックして展開
入力を受け取るには`cin`を、出力するには`cout`を使おう。
:::

### 解答例

:::danger 解答例1

:::spoiler クリックして展開

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
