# lower or UPPER
アルファベット1文字が渡されたとき、それが大文字なら"UPPERCASE"、小文字なら"lowercase"と出力しよう

::: spoiler Hint
`char`型は1byteの整数値のため、互いに大小関係がある。
:::

::: spoiler Answer
`char`型は`<`、`>`、`<=`、`>=`などで大小を比較することができる。
```cpp
#include <string>
#include <iostream>
using namespace std;

int main() {
    char c;
    cin >> c;
    if (c >= 'a') {
        cout << "lowercase" << endl;
    }
    else {
        cout << "UPPERCASE" << endl;
    }
    return 0;
}