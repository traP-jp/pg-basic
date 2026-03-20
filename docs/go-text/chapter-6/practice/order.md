# 6-A1. Order

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

```go:line-numbers
import "fmt"

type Item struct {
    // ここを実装する
}

func main() {
    items := []Item{
        {5000, "机", "それなり"},
        // ここにアイテムを追加
    }
    
    // ここに 1番 2番を 解けるプログラムを書く
}
```

### 入力/出力例

::: details 例1

**入力**

```
1 0
```

**出力**

```
机 5000 それなり
```

:::

::: details 例2

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

::: details ヒント1
`Item`構造体を宣言して、以下のメンバー変数とメソッドを実装しよう。
- `price`(`int`型)
- `name`(`string`型)
- `spec`(`string`型)
- `print`メソッド
:::

::: details ヒント2
クエリとして入力される`1`または`2`の値に応じて、条件に合致するアイテムの情報を出力しよう。
:::

### 解答例

::: tip 解答例1

::: spoiler クリックして展開
```go:line-numbers
import "fmt"

type Item struct {
    price int
    name  string
    spec  string
}

func (i Item) print() {
    fmt.Println(i.name, i.price, i.spec)
}

func main() {
    items := []Item{
        {5000, "机", "それなり"},
        {100, "チョコ", "おいしい"},
        {300000, "ゲーミングPC", "やすい"},
        {100000, "安いPC", "たかい"},
    }
    
    // クエリの条件分岐
    var query_type int
    fmt.Scan(&query_type)
    if query_type == 1 {
        var no int
        fmt.Scan(&no)
        items[no].print()
    } else if query_type == 2 {
        var price int
        fmt.Scan(&price)
        for i := 0; i < len(items); i++ {
            item := items[i]
            if item.price <= price {
                item.print()
            }
        }
    }
}
```

:::
