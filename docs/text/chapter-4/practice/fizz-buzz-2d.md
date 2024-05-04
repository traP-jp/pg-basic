# fizz-buzz 2D
整数 $H, W$ が渡されるので、$H\times W$ の二次元配列 $a_{i,j}\ (1\leq i\leq H, 1\leq j\leq W)$ を出力しよう。

ただし、$a_{i,j}$ は

-   $i$ は3の倍数でなく、$j$ は5の倍数でないとき、$i\times j$ (数値)
-   $i$ が3の倍数で、$j$ は5の倍数でないとき、`Fi` (文字列)
-   $i$ は3の倍数でなく、$j$ が5の倍数のとき、`Bu` (文字列)
-   $i$ が3の倍数で、$j$ が5の倍数のとき、`FB` (文字列)

:::spoiler Answer
```cpp
#include <string>
#include <iostream>
using namespace std;

int main() {
    int h, w;
    cin >> h >> w;
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (i % 3 == 2) {
                if (j % 5 == 4) {
                    cout << "FB\t";
                }
                else {
                    cout << "Fi\t";
                }
            }
            else {
                if (j % 5 == 4) {
                    cout << "Bu\t";
                }
                else {
                    cout << (i+1) * (j+1) << "\t";
                }
            }
        }
        cout << "\n";
    }
    cout << flush;
}
```
:::
