#include <iostream>
#include <string>

using namespace std;

struct Member {
  string trap_id, student_id;
  int grade;
};
bool equals(Member member1, Member member2) {
  return member1.trap_id == member2.trap_id &&
         member1.student_id == member2.student_id &&
         member1.grade == member2.grade;
}

int main() {
  Member zer0star{"zer0-star", "22BXXXXX", 2};
  Member hoshimiya{"hoshimiya", "99B99999", 99999};

  if (equals(zer0star, hoshimiya)) {
    cout << "same" << endl;
  } else {
    cout << "not same" << endl;
  }
}
