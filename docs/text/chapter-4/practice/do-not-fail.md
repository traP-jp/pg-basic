# DO NOT FAIL
点数が整数として１つずつ与えられるので、59以下なら`Failed`と出力して実行を終了しよう。

::: spoiler Answer
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    for (;;) {
        int score;
        cin >> score;
        if (score < 60) {
            cout << "Failed" << endl;
            break;
        }
    }
    return 0;
}
```