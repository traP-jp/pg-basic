# hello shell

ターミナル (シェル) の `find` コマンドで遊んでみましょう。

## 問題

のひとくんは晩ごはんのメモの URL をディレクトリの中に丁寧にしまっていたつもりだったのですが、名前を適当につけていたのでどこに置いていたか忘れてしまいました。

代わりに見つけて、晩ごはんのメモを教えて下さい。

## 沢山のディレクトリがあるやつを見る方法

::: tip

Windows (Ubuntu) で、↓のステップの中でエラーが出たら TA を呼んでください。

TA 向け: curl と zip のインストールが必要です。もし入ってなければ以下の手順で導入してください。

```sh
sudo apt install zip wget -y
```

```sh
mkdir hello-shell
cd hello-shell
wget https://pg-basic.trap.show/hello-shell.zip
unzip hello-shell.zip
```
