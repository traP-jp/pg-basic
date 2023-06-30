# 4.3. 配列

プログラミングでは、同じ様な変数を複数作りたいときがある。例えば、100人の点数の平均点を取りたい時に変数は100個必要となる。このときに、配列を使う。

配列とは、変数の集合のようなものである。

C++ において配列を使う時は、`vector` を用いる。`string` と同様にして、`vector`をインクルードする。

```cpp:line-numbers
#include <vector>
```

以下のようにして、`<>`内に型を宣言することで、配列を定義することができる。

```cpp:line-numbers
vector<int> array;
vector<string> strarray;
```

このように記述すると空の配列が作成される。以下のように、初めから配列に値を入れることもできる

```cpp:line-numbers
vector<int> arr = {10, 20, 30, 40, 50};
```

以下のように、 `[]` の中に数字を書くことで要素を取得できる。数列を考えた時の $a_i$ の $i$ だと思うと良い。この時要素は*
*0始まり**である。

```cpp:line-numbers
vector<int> arr = {10, 20, 30, 40, 50};
cout << arr[2] << endl;
arr[1] = 100;
cout << arr[1] << endl;
```

```
[output]
30
100
```

`.size()` とすると、配列の要素数を調べることができる。

```cpp:line-numbers
vector<int> arr = {10, 20, 30, 40, 50};
int siz = arr.size();
cout << siz << endl;
```

```
[output]
5
```

これと、`for` を用いれば、配列の要素を全て取得することができる。

```cpp:line-numbers
vector<int> arr = {10, 20, 30, 40, 50};
for (int i=0; i < arr.size(); i++) {
  cout << arr[i] << endl;
}
```

`for` 文の中で、 `arr[0]` から `arr[4]` までが1つずつ出力されるコードだという事が理解できるだろうか。`i < arr.size()`
の条件から、`i` は 0 から 4 までの場合で実行される。（5 は `5 < 5` となり条件を満たさない。）

`.push_back()` を用いると、配列の末尾に新しい要素を追加することができる。

```cpp:line-numbers
vector<int> arr = {10, 20, 30, 40, 50};
arr.push_back(-10);

cout << arr[5] << endl;
cout << arr.size() << endl;
```

```
[output]
-10
6
```

for文と組み合わせると、できる事が非常に広がる。

