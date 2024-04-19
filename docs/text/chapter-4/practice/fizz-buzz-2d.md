# fizz-buzz 2D
整数$H$、$W$が渡されるので、$H \times W$の二次元配列$a_{i,j}$を出力しよう。

ただし、$a_{i,j}$は
- `X`、 ただし$i$は3の倍数でなく、$j$は5の倍数でない
- `F`、ただし$i$が3の倍数で、$j$は5の倍数でない
- `B`、ただし$i$は3の倍数でなく、$j$が5の倍数
- `O`、ただし$i$が3の倍数で、$j$が5の倍数

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
