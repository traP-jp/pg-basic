# 3-A2. Fraction

入力から整数$a,b,c,d$を受け取り、$a/b+c/d$を計算して、存在するなら分数`n/d`として表示しよう。
### 入出力例 1
入力
```
1 2 3 4
```
出力例
```
10/8
```
約分する必要はない。
### 入出力例 2
入力
```
1 3 5 7
```
出力例
```
22/21
```
### 入出力例 3
入力
```
1 0 1 0
```
出力例
```
```
$\frac{1}{0}$は存在しない。

:::spoiler Answer
```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b, c ,d;
    cin >> a >> b >> c >> d;
    if (b != 0 && d != 0) {
        int denominator = b * d;
        int numerator = a * d + c * b;
        cout << numerator << "/" << denominator << endl;
    }
}
```
なお、約分をしたい場合は`std::gcd`などを使って最小公倍数を得ることができる。
:::
