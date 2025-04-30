---
title: プログラミング環境構築 Windows
prev: {link: '/text/chapter-0/', text: '0. はじめに'}
next: {link: '/text/chapter-0/guidance', text: 講習会ガイダンス'}
---

# 環境構築 Windows

## Step 1: Install WSL

1. https://apps.microsoft.com/detail/9N0DX20HK701?hl=ja-jp&gl=JP&ocid=pdpshare で Windows Terminal をインストール（既にインストールされていれば飛ばしてOKです）

1. アプリ検索の画面で、 `Terminal` と入力し 「管理者として実行」

    ![](https://md.trap.jp/uploads/upload_367dc95b2cd3e74c808320a907977237.png)


2. `wsl --install -d Ubuntu` と入力して、エンターキーを押す。

    ![](https://md.trap.jp/uploads/upload_7266a7465d2df1dbc341237b2e4983b3.png)


    :::warning TA向け

    WSL インストールトラブルシューティング 
    https://learn.microsoft.com/ja-jp/windows/wsl/troubleshooting

    `wsl --install` に失敗した際の手動インストールマニュアル
    （Windowsバージョンの要件なども書いてあります）
    https://learn.microsoft.com/ja-jp/windows/wsl/install-manual

    :::

    :::warning TA向け

    極稀に、BIOS で virtualization 設定が切られている為に WSL がインストールできない事があります（`Please enable the Virtual Machine Platform Windows feature and ensure virtualization is enabled in the BIOS.` と表示されます）
    この場合は BIOS に入って、 Advanced -> Virtualization の順で有効化してください。

    :::

3. Ubuntu のアカウント設定
    1. `Enter new UNIX username:` が表示されるので、**半角英数小文字** でユーザーネームを入れる。（ `take` とか `takemura` とか `ryugo` とか短い方が良い。フォルダの名前になります）
    2. `New Password:` WSL 内で使いたいパスワードを入力。何も表示されませんが入力されています。入力できたら エンターキーを押す。
    3. `Retype New password:` もう一度入力。

    ![](https://md.trap.jp/uploads/upload_0fb105e906b7670d57ba0d0810418a95.png)

4. ウィンドウを閉じる

6. スタートから Windows Terminal を起動

7. `Ctrl` + `,` で設定画面を開く

8. 「規定のプロファイル」を「Ubuntu」に変更（複数あるならどれでも良い）

    ![](https://md.trap.jp/uploads/upload_0ce2e7b6aa4468178d034ffc65934316.png)

9. 「保存」ボタンを押す

10. Windows Terminal を閉じて、もう一度開く

11. traQ の tasks チャンネルで :wsl: スタンプを押す

## Step 2: Install Clang

1. WSL上で `sudo apt update`

3. パスワードを求められるので、WSLで設定したパスワードを入力
4. WSL上で `sudo apt install clang zip curl -y` を実行する
5. `clang --version` で clang のバージョンが表示されれば成功
6. 11. traQ の tasks チャンネルで :cpp: を押す

## Step 3: VSCode Install & Init

1. https://code.visualstudio.com/download から VSCode をインストール

2. 起動後、 `Ctrl` + `Shift` + `X` を押す

3. `Japanese` と入力し、 `Japanese Language Pack for Visual Studio Code` をインストール。

    ![](https://md.trap.jp/uploads/upload_b54bb733b3bf68010e033d30f2bf57c2.png)

4. VSCode の右下「Change Language and Restart」を押してインストール。

5. もう一度、 `Ctrl` + `Shift` + `X` を押す

6. `WSL` を入力し、 `WSL` をインストール

    ![](https://md.trap.jp/uploads/upload_80d3b7bc083b103d30d372ba8dabbe5b.png)

7. `Ctrl+,` を押して、出てきた画面に「Auto Save」と入力

8. 「Files: Auto Save」の項目を探して、「afterDelay」に変更する

    ![](https://md.trap.jp/uploads/upload_8a51ad57ec7b6d396cb610c9bbb17040.png)

9. ターミナルで `code hello.txt` を入力し、VSCode が起動できたら成功！

    ![](https://md.trap.jp/uploads/upload_b00fe65803252e719a394f50527731d9.png)

8. traQ の tasks チャンネルで :vscode: スタンプを押す

## Step 4： 拡張機能の設定

1. VSCodeの 画面で `Ctrl` + `Shift` + `X`

2. 「C++」と入力し、「C/C++ Extenstion Pack」の拡張機能を追加

3. `Code Runner` と入力して、「Code Runner」拡張機能を追加

4. `Ctrl` + `,` で設定を開く。下記画像の赤丸で囲んだ部分を押して `settings.json` を開く。

    ![](https://md.trap.jp/uploads/upload_bbdd65cb92c5c57bb38f797676aaea8f.png)

5. もし`"cpp": `で始まる行がなければ、一番最後の行の1つ前の行（ `}` の前！）に次のコードを追加する。その前の行に `,` がなかったら追加する。

    ```
    "code-runner.executorMap": {
        "cpp": "cd $dir && clang++ -std=c++17 $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    },
    ```

    ![](https://md.trap.jp/uploads/upload_6123c7ce669910790a06b98cc664b827.png)

    ::: tip

    もしすでに`"cpp": ` で始まる行があった場合、以下のように`g++` を `clang++` に置き換える。

    ```diff
    - "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    + "cpp": "cd $dir && clang++ -std=c++17 $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    ```

    :::

6. `"code-runner.executorMap": {` の行の前に `"code-runner.runInTerminal": true,` を書く（コピペ推奨！！）

7. こんな感じになっていれば OK

    ![](https://md.trap.jp/uploads/upload_1444ef8d082128cc2723db31555f3960.png)

::: warning

この時点で `settings.json` の編集画面の一部に **赤い波線** がある場合は、入力にミスがある可能性が高いです！
もう一度確認してみてください。

解決しない場合は近くの TA または [**相談チャンネル** (部内限定)](https://q.trap.jp/channels/event/workshop/pg-basic/sodan) にお知らせください。

:::

8. WSL を開き、 `code main.cpp` と入力する

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

    ::: tip

    ボタンを押してもうまくいかない場合は、代わりに三角の隣の `v` を押して、「Run Code」を押してみてください！

    ![](https://md.trap.jp/uploads/upload_2b042cfaa37207457e419a5380ccd466.png)

    :::

11. traQ の tasks チャンネルで :done: スタンプを押す

12. 環境構築はこれで完了です！お疲れ様でした。 :blob_pyon: 
