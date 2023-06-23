# VII. おわりに・おまけ

5日間の講習お疲れ様でした。まずは目標課題を。

## 7.1. 目標課題：Sort Algorithm

以下のソースコードを読んで、次のコードの出力を考えてください。

```cpp:line-numbers
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v = {1000, 400, 500, 130, -400, 50000, 100, 200};

    int n = v.size();

    for (int i=0; i < n-1; i++) {
        for (int j = n-1; i < j; j--) {
            if (v[j] < v[j-1]) {
                int tmp = v[j-1];
                v[j-1] = v[j];
                v[j] = tmp;
            }
        }
    }

    for (int i=0; i<n; i++) {
        cout << v[i] << endl;
    }
}
```

紙や iPad などを使いながら頑張ってみてください。

## 7.2. そのほか

なんにも考えてないです…。講習中に何話すか決めます

::: info
[**\[ VII の練習問題へ\]**](https://md.trap.jp/IE4NUAc_RR-USMIXlevsgA#Section-VII)

[**\[講習会ページに戻る\]**](https://wiki.trap.jp/Event/welcome/23/lecture/pg-basic)
:::

