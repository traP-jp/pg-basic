---
title: プログラミング環境構築 Mac
tags: pg-basic-text
prev: {'link': '/text/section-0', 'text': '0. はじめに'}
next: false
---

# 環境構築 Mac

## Step 1: Clang Install

1. 「⌘ + スペース」 
2. 「Spotlight　を検索」が表示される
![](https://md.trap.jp/uploads/upload_adc9c2a774516259a1da6fe5b39d8644.png)

3. **ターミナル** と入力
4. ターミナルを起動する。 
5. `clang --version` と入力

:::info
なにかインストールを求められた時は、指示に従ってインストールしてください。心配なら TA を呼んでください。
:::

6. `command not found` と表示されなければOK
![](https://md.trap.jp/uploads/upload_3ba7721f3d474e631fa3d24018524aff.png)


7. traQ の tasks チャンネルで :cpp: スタンプをつける

## Step 2: Install VSCode

1. https://code.visualstudio.com/download でダウンロード

2. `⌘+Shift+P` を同時押しして、出てきた画面に `shell command` と入力する。 `Install 'code' command in PATH` を選択。

![](https://md.trap.jp/uploads/upload_2abb6541a6553eba592d6ebb50d48f42.png)

3. ターミナルで `code hello.txt` を入力し、VSCode が起動できたら成功！
![](https://md.trap.jp/uploads/upload_4fedaae551ed06599c053eab0df1961a.png)
![](https://md.trap.jp/uploads/upload_b0f12162818c84b840635422dcb0b2e5.png)

4. `⌘+,` を押して、出てきた画面に「Auto Save」と入力

5. 「Files: Auto Save」の項目を探して、「afterDelay」に変更する
![](https://md.trap.jp/uploads/upload_8a51ad57ec7b6d396cb610c9bbb17040.png)


6. `⌘+Shift+X` を押して、出てきた画面に `Japanese` と入力。 `Japanese Language Pack for Visual Studio Code` をインストールする。インストール完了後、右下の `Install and Restart` を押して VSCode を再起動する。
![](https://md.trap.jp/uploads/upload_6c5cfaf6aadcc679382c966d4bccb753.png)

5. 日本語でVSCode が表示されるようになったら :vscode: スタンプをつける

## Step 3: 拡張機能の設定

1. VSCodeの 画面で `⌘` + `Shift` + `X`

2. 「C++」と入力し、「C/C++ Extenstion」の拡張機能を追加

3. `Code Runner` と入力して、「Code Runner」拡張機能を追加

4. `⌘` + `,` で設定を開く。下記画像の赤丸で囲んだ部分を押して `settings.json` を開く。
![](https://md.trap.jp/uploads/upload_bbdd65cb92c5c57bb38f797676aaea8f.png)

5. `"cpp": ` で始まる行を探して、`g++` を `clang++` に置き換える。

```diff
- "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
+ "cpp": "cd $dir && clang++ -std=c++17 $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
```

:::info
なかった場合は、一番最後の行の1つ前の行（ `}` の前！）に次のコードを追加してください。その前の行に `,` がなかったら追加してください！

```
"code-runner.executorMap": {
    "cpp": "cd $dir && clang++ -std=c++17 $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
},
```

![](https://md.trap.jp/uploads/upload_6123c7ce669910790a06b98cc664b827.png)

:::

6. `"code-runner.executorMap": {` の行の前に `"code-runner.runInTerminal": true,` を書く（コピペ推奨！！）

7. こんな感じになっていれば OK
![](https://md.trap.jp/uploads/upload_1444ef8d082128cc2723db31555f3960.png)

8. ターミナル を開き、 `code main.cpp` と入力する

9. 次のように書く（コピペでも OK ）

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
}
```

10. 画像の赤丸で実行してみる。下側の画面に `Hello, World!` が出れば成功！
![](https://md.trap.jp/uploads/upload_750a50362d2ae00ffcf2f4b041446ed9.png)

:::info
なにか出てきた場合は、代わりに三角の隣の`v` を押して、「Run Code」を押す！

![](https://md.trap.jp/uploads/upload_2b042cfaa37207457e419a5380ccd466.png)
:::

11. traQ の tasks チャンネルで :done: を押す

12. 環境構築はこれで完了です！お疲れ様でした。 :blob_pyon: 