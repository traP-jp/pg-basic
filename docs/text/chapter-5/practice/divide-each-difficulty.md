# Divide each difficulty
以下は$n \leq 7$を受け取って、$n \times n$の行列$a_{i,j}=Fibonatti_{ij}$を出力する以下のプログラムについて、フィボナッチ数列の解を求める部分を別の関数`int fibonatti(int index);`に分離してみよう。
```cpp
#include <bits/stdc++.h>
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

::: spoiler Answer

```cpp
#include <bits/stdc++.h>
using namespace std;

int fibonatti(int index) {
    int first = 1, second = 1;
    for (k = 0; k < index; k++) {
        int next = first + second;
        first = second;
        second = next;
    }
    return second;
}

int main() {
    int n;
    cin >> n;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            int fib_ij = fibonatti(i*j);
            cout << fib_ij << " ";
        }
        cout << endl;
    }
}
```

:::