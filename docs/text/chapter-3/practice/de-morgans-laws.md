# De Morgan's laws
`bool`型の値`P`、`Q`が与えられるので、ド・モルガンの法則が成り立つことを実際に確かめよう。

::: tip ド・モルガンの法則

$\lnot(P \land Q) \Leftrightarrow \lnot P \lor \lnot Q,$

$\lnot(P \lor Q) \Leftrightarrow \lnot P \lor \lnot Q$

:::


:::spoiler Hint
考えられる$P,Q$の組は以下の4つ

| (P,Q) | P = false | P = true |
| --- | --- | --- |
| Q = false | (false, false) | (true, false) |
| Q = true | (false, true) | (true, true) |

:::

:::spoiler Answer

```cpp
#include <iostream>
using namespace std;

int main() {
    string p_string, q_string;
    cin >> p_string >> q_string;
    bool p = p_string == "true";
    bool q = q_string == "true";
    if (!(p && q) == (!p || !q)) {
        cout << "case 1: ok" << endl;
    }
    if (!(p || q) == (!p && !q)) {
        cout << "case 2: ok" << endl;
    }
}
```

:::
