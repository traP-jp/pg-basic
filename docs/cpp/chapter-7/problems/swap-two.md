# 7.Q Swap Two Numbers（★★☆）

::: info
この問題は[7.4](../4)を読んでから取り組んでください。
:::

## 問題

整数$a, b$が与えられる。2つの値を入れ替える関数`swap_int`を作ろう。`swap_int`は返り値を持たないものとする。

次のプログラムの`// ここにプログラムを書く`の部分に、関数`swap_int`を定義して完成させること。`main`関数のコードは変更しないこと。

```cpp:line-numbers
#include <iostream>
using namespace std;

// ここにプログラムを書く

int main() {
    int a, b;
    cin >> a >> b;
    cout << a << " " << b << endl;
    swap_int(a, b);
    cout << a << " " << b << endl;
}
```

## 入出力例

### 例1

#### 入力

```Input:line-numbers
3 10
```

#### 出力

```Output:line-numbers
3 10
10 3
```

### 例2

#### 入力

```Input:line-numbers
-5 7
```

#### 出力

```Output:line-numbers
-5 7
7 -5
```

## ヒント

::: details ヒント1
参照渡しを使うと、関数の中で値を入れ替えた結果が`main`側にも反映されます。（[7.4](../4)を参考にしてください。）
:::

::: details ヒント2
一時変数を使って`x`と`y`を入れ替えましょう。
:::

## 解答例

::: details 解答例

```cpp
#include <iostream>
using namespace std;

void swap_int(int &x, int &y) {
    int tmp = x;
    x = y;
    y = tmp;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << a << " " << b << endl;
    swap_int(a, b);
    cout << a << " " << b << endl;
}
```

:::
