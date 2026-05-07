# 5.Q Echo（★☆☆）

## 問題

入力から単語を1つ受け取り、それをそのまま出力しよう。

## 入出力例

### 例1

#### 入力

```Input:line-numbers
Hello!
```

#### 出力

```Output:line-numbers
Hello!
```

## ヒント

::: details ヒント1

文字列型の変数を使うには、

```cpp
string s;
```

と書く。
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

## 解答例

::: details 解答例

```cpp
#include <iostream>
using namespace std;

int main() {
    string s;
    cin >> s;
    cout << s << endl;
}
```

:::
