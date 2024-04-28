# 6-1. Order

以下のような商品の一覧が与えられます。

| No. | 値段    | 名前         | スペック |
| --- | ------- | ------------ | -------- |
| 0   | 5,000   | 机           | それなり |
| 1   | 100     | チョコ       | おいしい |
| 2   | 300,000 | ゲーミングPC | やすい   |
| 3   | 100,000 | 安いPC       | たかい   |

これらの商品を扱える構造体 `Item` を作成してください。

また、これらに加えて、

1. 番号が与えられたときに、その番号、商品名と値段、スペックを表示するプログラムを作成してください。
2. 値段が与えられたときに、その**値段以下**の商品の番号、名前、値段、スペックをすべて出力するプログラムを作成してください。

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
}

int main() {
    vector<Item> items = {
        Item{5000, "机", "それなり"},
        ...
    }
    
    // 1番の実装
    int target_number;
    cin >> target_number;
    items[target_number].print();

    // 2番の実装
    int max_price;
    cin >> max_price;
    for (int i = 0; i < items.size(); i++) {
        if (items[i].price <= max_price) {
            items[i].print();
        }
    }
    return 0;
}
```

:::