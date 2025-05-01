# Unknown Algorithm

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

結果を考えてみたらコピーして実行してみましょう。

::: spoiler 解答

```txt
-400
100
130
200
400
500
1000
50000
```

これはソートをするアルゴリズムです。

ループの $i$ 回目では後ろから順番に順番が逆転していれば入れ替えて数値を前に持ってくる、という処理を繰り返して、$i$ 番目に最小の要素を $i$ 番目まで移動させます。

このループを繰り返すことで、ソートすることができます。

::: tip
これはバブルソート （[バブルソート: wikipedia](https://ja.wikipedia.org/wiki/バブルソート)）と呼ばれ一番基本的なソートアルゴリズムと知られています。ただし、計算量 $O(n^2)$ で効率が悪いです。（オーダー記法は 8 章の [計算量と実行時間](../../chapter-8/complexity.md) を参照。）
:::
