# 5.2. 引数

関数に値を渡すときは、以下のように実装する。

```go:line-numbers
import "fmt"

func triple(x int) int {
    fmt.Println(x*3)
    return 0
}

func main() {
    triple(4)
    triple(3)
}
```

```
[output]
12
9
```

この関数に渡す値のことを **引数** と呼ぶ。
引数の型は `()` の内側で定義される（`(int x)` の部分）。

```mermaid
flowchart LR
    subgraph main["main()"]
        Start --> calc4["triple(4)"]
        e["End"]
        calc3["triple(3)"]
    end
    calc4 --> start4
    subgraph triple4["triple(4)"]
        start4["start: x=4"] --> print4["fmt.Println(x*3"] --> return4["return 0;"])
    end
    return4-->calc3
    calc3-->start3
    subgraph triple3["triple(3)"]
        start3["start: x=3"] --> print3["fmt.Println(x*3"] --> return3["return 0;"])
    end
    return3 --> e
```

例えば string 型の引数を設定したいなら以下のように実装する。

```go:line-numbers
import "fmt"

func hello(s string) int {
    fmt.Println("Hello, ", s)
    return 0
}

func main() {
    hello("traP")
    hello("Takeno_hito")
}
```

```
[output]
Hello, traP
Hello, Takeno_hito
```

引数は複数個設定することもできる。

```go:line-numbers
import "fmt"

func add(x int, y int) int {
    fmt.Println(x + y)
    return 0
}

func main() {
    a := 5
    b := 10
    add(4, 7)
    add(a, b)
}
```

```
[output]
11
15
```

引数は、関数内でしか使うことができない（関数を呼び出した側の変数は変わらない）。

```go:line-numbers
import "fmt"

func triple(x int) int {
    x = x*3
    return 0
}

func main() {
    x := 4
    triple(x)

    fmt.Println(x)
}

```

```
[output]
4
```

これについての詳細は「参照渡し」の節で扱う。

    
