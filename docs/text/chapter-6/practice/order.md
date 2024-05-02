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
}

int main() {
    vector<Item> items = {
        Item{5000, "机", "それなり"},
        ...
    }
    
    // ここに 1番 2番を 解けるプログラムを書く
}
```

## 入出力例
```text
[Input 1]
1 0
```

```text
[Output 1]
机 5000 それなり
```

```text
[Input 2]
2 100001
```

```text
[Output 2]
机 5000 それなり
チョコ 100 おいしい
安いPC 100000 たかい
```
::: spoiler Answer
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
        for (Item item : items) {
            if (item.price <= price) {
                item.print();
            }
        }
    }
}
```

:::