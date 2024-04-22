# 再帰関数

関数の中で関数を呼び出すことができる。

```cpp:line-numbers
#include <iostream>
using namespace std;

void printAll(int n) {
    if (n <= 0) return;
    cout << n << endl;
    printAll(n-1);
}

int main() {
    printAll(3);
}
```

```
[output]
3
2
1
```

かなり長いが、フローチャートで表すと下図のようになる。

```mermaid
flowchart TD
    Start --> call3["printAll(3)"] --> st3
    subgraph func3["printAll(3)"]
        st3["Start: n=3"] --> print3["cout << n"] --> call2["printAll(n-1)"]
        return3["return"]
    end
    call2 --> st2
    subgraph func2["printAll(2)"]
        st2["Start: n=2"] --> print2["cout << n"] --> call1["printAll(n-1)"]
        return2["return"]
    end
    call1 --> st1
    subgraph func1["printAll(1)"]
        st1["Start: n=1"] --> print1["cout << n"] --> call0["printAll(n-1)"]
        return1["return"]
    end
    call0 --> st0
    subgraph func0["printAll(0)"]
        direction LR
        st0["Start: n=0"] --> ifZero["n <= 0"] --> return0["return"]
    end
    return0 --> return1
    return1 --> return2
    return2 --> return3
    return3 --> e["End"]
```

気をつけるべきことは、複数ある `printAll(int n)` はそれぞれ独立して変数を持っているということである。

関数の中で関数を書くと、循環参照みたいなイメージがあって混乱するかもしれない。
そのような時は、1ステップずつ操作を確認していくとわかりやすいだろう。
今回は、各ステップに cout を挟んで、出力を確認しながら確かめてみる。

```cpp:line-numbers
#include <iostream>
using namespace std;

void printAll(int n) {
    cout << "L5: n=" << n << endl;

    if (n <= 0) return;
    cout << "L8: n=" << n << endl;

    cout << n << endl;
    cout << "L11: n=" << n << endl;

    printAll(n-1);
    cout << "L14: n=" << n << endl;
}

int main() {
    cout << "L18: in main function" << endl;
    printAll(3);
    cout << "L20: in main function" << endl;
}
```

```
[output]
L18: in main function
L5: n=3
L8: n=3
3
L11: n=3
L5: n=2
L8: n=2
2
L11: n=2
L5: n=1
L8: n=1
1
L11: n=1
L5: n=0
L14: n=1
L14: n=2
L14: n=3
L20: in main function
```
