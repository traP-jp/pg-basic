
#include <iostream>
#include <string>

using namespace std;

// #region define
struct Member {
  string trap_id, student_id;
  int grade;
};
// #endregion define

// #region function
bool equals(Member member1, Member member2) {
  return member1.trap_id == member2.trap_id &&
         member1.student_id == member2.student_id &&
         member1.grade == member2.grade;
}
// #endregion function

int main() {
  // #region declare
  Member zer0star{"zer0-star", "22BXXXXX", 2};
  Member hoshimiya{"hoshimiya", "99B99999", 99999};
  // #endregion declare

  // #region use
  if (equals(zer0star, hoshimiya)) {
    cout << "same" << endl;
  } else {
    cout << "not same" << endl;
  }
  // #endregion use
}