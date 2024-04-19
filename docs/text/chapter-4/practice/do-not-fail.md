# DO NOT FAIL
入力された複数の点数を受け取って、59点以下なら`Failed`と出力しよう。また、`-1`が入力されたら`Passed!`と出力して終了しよう。

::: spoiler Answer
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    for (;;) {
        int score;
        cin >> score;
        if (score == -1) {
            cout << "Passed!" << endl;
            break;
        }
        if (score < 60) {
            cout << "Failed" << endl;
        }
    }
    return 0;
}
```