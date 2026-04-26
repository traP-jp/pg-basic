# 6.2. メソッド

構造体に関連する処理は関数と同じように、**メソッド**として定義できる。
Go では、構造体の外で「レシーバ」を使ってメソッドを定義する。

```go:line-numbers
import "fmt"

type Member struct {
    trapID    string
    studentID string
    grade     int
}

func (m Member) getStudentPrefix() string {
    return m.studentID[:3]
}

func main() {
    zer0star := Member{"zer0-star", "22BXXXXX", 2}
    yukikurage := Member{"yukikurage", "21BYYYYY", 3}

    fmt.Println(zer0star.getStudentPrefix())
    fmt.Println(yukikurage.getStudentPrefix())
}
```

```txt
[output]
22B
21B
```

メソッド経由でインスタンスを更新する場合は、ポインタレシーバを使う。

```go:line-numbers
import "fmt"

type Member struct {
    trapID    string
    studentID string
    grade     int
}

func (m *Member) updateGrade(newGrade int) {
    m.grade = newGrade
}

func main() {
    zer0star := Member{"zer0-star", "22BXXXXX", 2}
    zer0star.updateGrade(1)
    fmt.Println(zer0star.grade)
}
```

```
[output]
1
```

::: tip
Go には `this->` は存在しない。レシーバ変数（この例では `m`）経由でアクセスする。
:::
