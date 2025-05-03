# Exponentation

与えられた$a,b$について、

$c \equiv a ^ b \mod{M} | 0 \leq c < M$

を満たす$c$を、再帰関数を使って出力しよう。

- 基礎課題
    
    - $2 \leq a < 10^4$
    - $0 \leq b < 10^4$
    - $M = 8209$
- 発展課題

    - $2 \leq a < 10^9$
    - $0 \leq b < 10^{18}$
    - $M = 998244353$

### 解答例

::: tip 解答例 - 基礎課題

::: spoiler クリックして展開

```cpp
// 愚直な再帰関数を用いた実装
#include <iostream>
using namespace std;

int pow_modint(int base, int exponent, int mod) {
    if (base == 0) {
        return 1;
    }
    else {
        return (base * pow(base, exponent-1, mod)) % mod;
    }
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << pow_modint(a, b, 8209);
}
```
:::

::: tip 解答例 - 発展課題

::: spoiler クリックして展開

```cpp
// メモ化再帰を用いたダブリングの実装
#include <iostream>
#include <map>
using namespace std;
using i64 = long long;

static map<tuple<i64, i64, i64>, i64> memo;

long long pow_modint_doubling(i64 base, i64 exponent, i64 mod) {
    if (memo.count(make_tuple(base, exponent, mod)) != 0) {
        return memo[make_tuple(base, exponent, mod)];
    }
    if (exponent == 0) {
        return 1;
    }
    else if (exponent == 1) {
        return base;
    }
    i64 answer;
    for (i64 i = (1LL<<60); i != 0; i = i >> 1) {
        if ((exponent-1) & i) {
            answer = pow_modint_doubling(base, i, mod) * pow_modint_doubling(base, exponent-i, mod) % mod;
            break;
        }
    }
    memo[make_tuple(base, exponent, mod)] = answer;
    return answer;
}

int main() {
    i64 a, b;
    cin >> a >> b;
    cout << pow_modint_doubling(a, b, 998244353);
}
```