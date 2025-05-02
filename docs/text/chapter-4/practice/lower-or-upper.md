# lower or UPPER

アルファベット1文字が渡されたとき、それが大文字なら"UPPERCASE"、小文字なら"lowercase"と出力しよう。

### 入力/出力例

::: details 例1

**入力**

```
a
```

**出力**

```
lowercase
```

:::

::: details 例2

**入力**

```
B
```

**出力**

```
UPPERCASE
```

:::

### ヒント

::: details ヒント1
`char`型は1byteの整数値のため、互いに大小関係があります。ASCIIコードの話を思い出してみましょう。
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開
`char`型は各文字コードに対応する整数値のため、`<`、`>`、`<=`、`>=`などで大小を比較することができます。

```cpp
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
```
:::