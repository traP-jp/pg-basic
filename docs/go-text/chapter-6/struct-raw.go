package main

import "fmt"

type Member struct {
    TrapID    string
    StudentID string
    Grade     int
}

func equals(member1 Member, member2 Member) bool {
    return member1.TrapID == member2.TrapID &&
        member1.StudentID == member2.StudentID &&
        member1.Grade == member2.Grade
}

func main() {
    zer0star := Member{"zer0-star", "22BXXXXX", 2}
    hoshimiya := Member{"hoshimiya", "99B99999", 99999}

    if equals(zer0star, hoshimiya) {
        fmt.Println("same")
    } else {
        fmt.Println("not same")
    }
}
