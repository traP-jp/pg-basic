# 6-1. Order

以下のような商品の一覧が与えられる。

| No. | 値段    | 名前         | スペック |
| --- | ------- | ------------ | -------- |
| 0   | 5,000   | 机           | それなり |
| 1   | 100     | チョコ       | おいしい |
| 2   | 300,000 | ゲーミングPC | やすい   |
| 3   | 100,000 | 安いPC       | たかい   |

これらの商品を扱える構造体 `Item` を作成しよう。

また、以下のクエリに対して、返答しよう。

1. 番号が与えられたときに、その商品の名前、値段、スペックを表示する。
2. 値段が与えられたときに、その**値段以下**の全ての商品の名前、値段、スペックをすべて表示する。

```cpp:line-numbers
#include <iostream>
#include <vector>
using namespace std;

struct Item {
    // ここを実装する
};

int main() {
    vector<Item> items = {
        Item{5000, "机", "それなり"},
        // ここにアイテムを追加
    };
    
    // ここに 1番 2番を 解けるプログラムを書く
}
```

### 入力/出力例

:::info 例1

:::spoiler クリックして展開

**入力**

```
1 0
```

**出力**

```
机 5000 それなり
```

:::

:::info 例2

:::spoiler クリックして展開

**入力**

```
2 100001
```

**出力**

```
机 5000 それなり
チョコ 100 おいしい
安いPC 100000 たかい
```

:::

### ヒント

::: tip ヒント1

::: spoiler クリックして展開
`Item`構造体を宣言して、以下のメンバー変数とメソッドを実装しよう。
- `price`(`int`型)
- `name`(`string`型)
- `spec`(`string`型)
- `print`メソッド
:::

::: tip ヒント2

::: spoiler クリックして展開
クエリとして入力される`1`または`2`の値に応じて、条件に合致するアイテムの情報を出力しよう。
:::

### 解答例

::: danger 解答例1

::: spoiler クリックして展開
```cpp:line-numbers
#include <iostream>
#include <vector>
using namespace std;

struct Item {
    int price;
    string name;
    string spec;

    void print() {
        cout << name << " " << price << " " << spec << endl;
    }
};

int main() {
    vector<Item> items = {
        Item{5000, "机", "それなり"},
        Item{100, "チョコ", "おいしい"},
        Item{300000, "ゲーミングPC", "やすい"},
        Item{100000, "安いPC", "たかい"}
    };
    
    // クエリの条件分岐
    int query_type;
    cin >> query_type;
    if (query_type == 1) {
        int no;
        cin >> no;
        items[no].print();
    } else if (query_type == 2) {
        int price;
        cin >> price;
        for (int i=0; i<items.size(); i++) {
            Item item = items[i];
            if (item.price <= price) {
                item.print();
            }
        }
    }
}
```

:::
