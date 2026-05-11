# 7.Q Max of Three（★☆☆）

## 問題

整数$a, b, c$が与えられる。$a, b, c$を引数に取り、最大値を返す関数`max_of_three`を作ろう。

次のプログラムの`// ここにプログラムを書く`の部分に、関数`max_of_three`を定義して完成させること。`main`関数のコードは変更しないこと。

```cpp:line-numbers
#include <iostream>
using namespace std;

// ここにプログラムを書く

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max_of_three(a, b, c) << endl;
}
```

## 入出力例

### 例1

#### 入力

```Input:line-numbers
3 9 4
```

#### 出力

```Output:line-numbers
9
```

### 例2

#### 入力

```Input:line-numbers
-5 -2 -10
```

#### 出力

```Output:line-numbers
-2
```

## ヒント

::: details ヒント1
`if`文で最大値を更新する方法が使えます。
:::

::: details ヒント2
最初に`x`を最大値としておき、`y`や`z`と比較していくと簡単です。
:::

## 解答例

::: details 解答例

```cpp
#include <iostream>
using namespace std;

int max_of_three(int x, int y, int z) {
    int best = x;
    if (y > best) {
        best = y;
    }
    if (z > best) {
        best = z;
    }
    return best;
}

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max_of_three(a, b, c) << endl;
}
```

:::
