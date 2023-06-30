# 6.3. カプセル化

> すいません、めちゃくちゃ思想を書いてしまったため、なんかいい感じにしておいてください --- zer0-star

構造体を使うときは、ただ複数の変数をまとめたいだけではなく、まとめたものに何らかの"役割"
を持たせることが多い。例えば、上の例では`trap_id`、`student_id`、`grade`をまとめたものに「traP部員」という役割を与えている。

このように役割を持った構造体があるとき、もはや必要なのは構造体の持つ生の情報そのものよりも、特定のメソッド群による"振舞い"
であるということがある。このとき、期待される振舞い以外の情報は、使う側にとって知る必要がない、どころか知ってしまってはプログラムの複雑性が増してしまうということがある。

つまり、知る必要のあるメンバ変数やメソッド以外はむしろ積極的に外部のプログラムから隠蔽したくなってくるのである。もっと言えば、メンバ変数もメソッドを介して操作したい（取得しかできないなどの制御がしやすいなどの理由により）。（このあたりの感覚は、ある程度プログラミングに習熟しないとわからないと思う（逆に、初心者が理解できたら、怖いと思う）。理解できなくてもプログラミングに支障はないので、無視して進んでくれても構わない。ただ、いつかは身に付けて欲しいと思っている。）

このように、必要なメンバ変数やメソッドだけを公開してそれ以外を隠蔽することを、**カプセル化**と呼ぶ。

C++でカプセル化をするには、定義の前後に`public:`や`private:`を置く。`public:`
の後のメンバ変数やメソッドは公開され、`private:`の後のものは隠蔽される。公開されたメソッドから隠蔽されたメンバを参照することはできる。

```cpp:line-numbers
struct hoge {
    public:
    int a; // 公開
    string b; // 公開
    int c() { // 公開
        return 10;
    }
    private:
    int d, e; // 隠蔽
    string f() { // 隠蔽
        return b;
    }
    public:
    bool g; // 公開
    int h() { // 公開
        return d + a;
    }
};
```

ちなみに、`struct`の代わりに`class`というキーワードでも構造体を宣言することができる。`struct`だとデフォルトで`public`
だが、`class`だとデフォルトで`private`になるという違いがある。

カプセル化したコードの例を見てみよう。以下は構造体 `Car` である。

`Accelerate()` で加速、 `Brake()` で減速する。また、 `MoveFoward()` で前進する。

```cpp:line-numbers
struct Car {
    private:
    int speed = 0;
    int pos = 0;

    public:
    int GetSpeed() {
        return speed;
    }
    int GetPos() {
        return pos;
    }
    void Accelerate() {
        speed += 3;
        MoveFoward();
    }
    void Brake() {
        speed -= 2;
        if (speed < 0) speed = 0;
        MoveFoward();
    }
    void Stop() {
        speed = 0;
    }
    void MoveFoward() {
        pos += speed;
    }
};
```

このような場合において、減速・加速を main 関数内で行うと以下のようになる。

```cpp:line-numbers
int main() {
    Car car;

    car.Accelerate();

    car.Brake();

    cout << car.GetSpeed() << endl;
    cout << car.GetPos() << endl;

    car.MoveFoward();

    car.Stop();

    cout << car.GetPos() << endl;    
}
```

これを関数を用いずに実装すると以下のようになる。

```cpp:line-numbers
int main() {
    int car_speed;
    int car_pos;

    car_speed += 3;
    car_pos += car_speed;

    car_speed -= 2;
    car_pos += car_speed;

    cout << car_speed << endl;
    cout << car_pos << endl;

    car_pos += car_speed;

    car_speed = 0;

    cout << car_pos << endl;

}
```

実行されている物は変わらないが、前者の方が"何をしているか"がわかりやすいだろう。
それと、加減速の条件を変更したいと思った時（例えば、加速するとスピードが `+4` される事にしたい）に、変更する部分は少なく済む。
これは、カプセル化を適切に行えていれば、「どのように加速されるか」をmain関数側は気にする必要がないからである。

::: info
[**\[ VI の練習問題へ\]**](https://md.trap.jp/IE4NUAc_RR-USMIXlevsgA#Section-VI)

[**\[講習会ページに戻る\]**](https://wiki.trap.jp/Event/welcome/23/lecture/pg-basic)
:::

