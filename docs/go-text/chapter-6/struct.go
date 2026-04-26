package main

import "fmt"

// #region define
type Member struct {
    TrapID    string
    StudentID string
    Grade     int
}

// #endregion define

// #region function
func equals(member1 Member, member2 Member) bool {
    return member1.TrapID == member2.TrapID &&
        member1.StudentID == member2.StudentID &&
        member1.Grade == member2.Grade
}

// #endregion function

func main() {
    // #region declare
    zer0star := Member{"zer0-star", "22BXXXXX", 2}
    hoshimiya := Member{"hoshimiya", "99B99999", 99999}
    // #endregion declare

    // #region use
    if equals(zer0star, hoshimiya) {
        fmt.Println("same")
    } else {
        fmt.Println("not same")
    }
    // #endregion use
}
