# 計算量とオーダー
## ランダウの記号
[5.5. 実行時間](../chapter-5/exec-time.md)では再帰関数の実行速度を大まかに見積もったが、ランダウの記号という考え方を使うことでより良く概算することができる。ランダウの記号は以下のように定義される。

$\exists C \forall, n \in \mathbb{N}_{+}, \frac{f(x)}{g(x)} \leq C$

であるとき、$f(x) = O(g(x))$と書き、「f(x)はg(x)のオーダーである」という。

例えば、$n^2+2n$のオーダーは$O(n^2)となる。

::: tip
ランダウの記号は$O(g(x))$以外にもあるので、興味があるなら調べてみよう。
:::

## 計算量
問題の大きさ$n$に対して、それを解くために必要なリソースの量を関数として得ることができ、これをランダウの記号で表すと何かと都合が良い。ここでは特に実行時間について着目する。

例えば、`std::vector<int>`の最大の要素を得る関数のオーダーは、要素の数$n$に対して$O(n)$となる。

::: spoiler 実装例
```cpp
int max_element(std::vector<int> v) {
    int current_max = INT_MIN;
    // ここでn回ループを回している
    for (int i = 0; i < v.size(); i++) {
        current_max = max(current_max, v[i]);
    }
    return current_max;
}
```
