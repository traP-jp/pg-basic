# hello shell

ターミナル (シェル) の `find` コマンドで遊んでみましょう。

## 問題

のひとくんは晩ごはんのメモの URL をディレクトリの中に丁寧にしまっていたつもりだったのですが、名前を適当につけていたのでどこに置いていたか忘れてしまいました。

代わりに見つけて、晩ごはんのメモを教えて下さい。

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

::: spolier hint 1
ファイルの検索は `find` コマンドを使います。 `man find` で find コマンドについて調べることができます。
:::
