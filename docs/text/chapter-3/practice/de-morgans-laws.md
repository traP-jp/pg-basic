# 3-B2. De Morgan's laws

`bool`型の値`P`、`Q`から、論理演算子(`!`, `&&`, `||`)を用いてド・モルガンの法則が成り立つことを実際に確かめよう。

::: tip ド・モルガンの法則

$\lnot(P \land Q) \Leftrightarrow \lnot P \lor \lnot Q,$

$\lnot(P \lor Q) \Leftrightarrow \lnot P \land \lnot Q$

:::

### 入力/出力例

以下の例では上のド・モルガンの法則の式の1つ目を`case 1`、2つ目を`case 2`としてコード内でチェックを行い、左辺と右辺の結果が一致している場合は`ok`と出力します。

::: details 例1

**入力**

```
true false
```

**出力**

```
case 1: ok
case 2: ok
```

:::

### ヒント

::: details ヒント1
PとQが文字列として与えられるため、まずは`string`型で入力を受け取り、その値をチェックして`bool`型に変換しましょう。`==`演算子を用いればできるはず。
:::

::: details ヒント2
受け取った文字列を比較し、`"true"`と比較した結果を`bool`型の変数に代入しましょう。

```cpp
bool p = p_string == "true";
```

`==`などの演算子も結果が`bool`型になるだけで、本質的には`+`などの演算と変わりありません。そのため、`if`文の条件などに使用するだけでなく、このようにして変数に結果を格納することも可能です。
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開

```cpp
#include <iostream>
using namespace std;

int main() {
    // 入力をstringとして受け取る
    string p_string, q_string;
    cin >> p_string >> q_string;

    // 文字列が"true"かどうかをチェックし、bool型としてPとQを格納
    bool p = p_string == "true";
    bool q = q_string == "true";

    // case 1
    if (!(p && q) == (!p || !q)) {
        cout << "case 1: ok" << endl;
    }

    // case 2
    if (!(p || q) == (!p && !q)) {
        cout << "case 2: ok" << endl;
    }
}
```

:::
