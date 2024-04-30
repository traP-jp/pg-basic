# hello shell

ターミナル (シェル) のファイルを検索するコマンド、 `find` コマンドで遊んでみましょう。

## 問題

のひとくんは晩ごはんのメモの URL をディレクトリの中に丁寧にしまっていたつもりだったのですが、名前を適当につけていたのでどこに置いていたか忘れてしまいました。

代わりに見つけて、晩ごはんのメモを教えて下さい。ファイルは .txt って末尾だった気がします。

そういえば `ls` ってコマンドでファイル一覧を見れた気がするけど、実行してみても全く見当が付きません。 `find` コマンドを使わないと難しいなぁ……。

## 問題ファイルのダウンロード方法

```sh
curl https://pg-basic.trap.show/hello-shell.zip -o hello-shell.zip
unzip hello-shell.zip
rm hello-shell.zip
cd hello-shell/
```

::: tip

Windows (Ubuntu) で、↑のステップの中でエラーが出たら TA を呼んでください。

TA 向け: curl と zip のインストールが必要です。もし入ってなければ以下の手順で導入してください。

```sh
sudo apt install zip curl -y
```

:::

::: spoiler hint 1

ファイルの検索は `find` コマンドを使います。 `man find` で find コマンドについて調べることができます。ただし英語。

もしくは、Google で `man find` と検索しても良いでしょう。こっちは日本語もあります。

見つけたファイルは `cat [file]` で出力できます。

:::

::: spoiler hint 2

`find . -name [探したいファイル]` で調べられます。 `*` を使うと、曖昧検索ができます。 `code-*` と書くと、 `code-` で始まるファイルを検索できます。

:::

::: spoiler hint 3

- `find . -name '*.txt'` でファイルを見つけることができます。
- `cat 6db1b5a2e7/08dc869896/memo.txt` と入力してみましょう。 `TAB` キーを押すと、候補を選んでくれます。

:::

::: spoiler answer

<https://pg-basic.trap.show/text/chapter-1/practice/t4k3n0h1to-d1nn3r.html> にあるらしいです。

:::
