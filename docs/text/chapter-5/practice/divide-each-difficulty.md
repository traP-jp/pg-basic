# 5-A1. Divide each difficulty

以下の$n \leq 7$を受け取って$n \times n$の行列$a_{i,j}=Fibonatti_{ij}$を出力するプログラムの、フィボナッチ数列の解を求める部分を別の関数`int fibonatti(int index);`に分離してみよう。

```cpp:line-numbers
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            // ここから下を関数に切り分ける
            // print (i*j)th of fibonatti sequence
            int first = 1, second = 1;
            for (int k = 0; k < i*j; k++) {
                int next = first + second;
                first = second;
                second = next;
            }
            // ここから上を関数に切り分ける
            cout << second << " ";
        }
        cout << endl;
    }
}
```

### ヒント

::: details ヒント1

下のコードの`// ここにフィボナッチ数列の計算を実装しよう`の部分を実装してみよう。

```cpp:line-numbers
#include <iostream>
using namespace std;

int fibonatti(int index) {
    int first = 1, second = 1;
    // ここにフィボナッチ数列の計算を実装しよう
    return second;
}

int main() {
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int fib_ij = fibonatti(i*j);
            cout << fib_ij << " ";
        }
        cout << endl;
    }
}
```
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開

```cpp:line-numbers
#include <iostream>
using namespace std;

int fibonatti(int index) {
    int first = 1, second = 1;
    for (int k = 0; k < index; k++) {
        int next = first + second;
        first = second;
        second = next;
    }
    return second;
}

int main() {
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int fib_ij = fibonatti(i*j);
            cout << fib_ij << " ";
        }
        cout << endl;
    }
}
```

:::