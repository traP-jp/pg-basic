# 4.2. for 文の様々な書き方

for 文は、以下のように様々な書き方ができる。

```go:line-numbers
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

```go:line-numbers
for i := range 5 {
    fmt.Println(i)
}
```

また、while 文のように書くこともできる。

```go:line-numbers
i := 0
for i < 50 {
    fmt.Println(i)
    i += 10
}
```
