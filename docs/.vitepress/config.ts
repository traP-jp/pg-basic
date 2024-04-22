import { link } from 'fs';
import { defineConfig } from 'vitepress'

const containerMdExtend = require('./detail-plugin.js');
const markdowinItCharts = require('markdown-it-charts');
//import markdownItMermaid from 'markdown-it-mermaid'
import { withMermaid } from "vitepress-plugin-mermaid";


// https://vitepress.dev/reference/site-config

export default withMermaid({
    title: "pg-basic text",
    description: "プログラミング基礎講習会テキスト",
    cleanUrls: false,
    markdown: {

        //        lineNumbers: true,
        config: (md) => {
            md.use(
                require('markdown-it-container'),
                'spoiler',
                containerMdExtend(md),
            );
            md.use(markdowinItCharts);
            md.use(require('markdown-it-mathjax3'));
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: 'local'
        },
        nav: [
            { text: 'ホーム', link: '/' },
            { text: 'テキスト', link: '/text/chapter-0/' }
        ],

        sidebar: [
            {
                text: 'About',
                items: [
                    { text: 'このテキストについて', link: '/about' }
                ]
            },
            {
                text: '0. はじめに',
                link: '/text/chapter-0/',
                items: [
                    { text: '環境構築 - Mac', link: '/text/chapter-0/enviroment/mac' },
                    { text: '環境構築 - Windows', link: '/text/chapter-0/enviroment/windows' },
                    { text: '講習会ガイダンス', link: '/text/chapter-0/guidance' }
                ]
            },
            {
                text: 'I. はじめてのプログラミング',
                link: '/text/chapter-1/',
                items: [
                    { text: 'コンパイルとOS', link: '/text/chapter-1/compile-os' },
                    { text: 'ターミナルの扱い', link: '/text/chapter-1/terminal' },
                ],
            },
            {
                text: 'II. 変数と入出力',
                link: '/text/chapter-2/',
                items: [
                    { text: 'はじめてのプログラミング解説', link: '/text/chapter-2/hello-world' },
                    { text: 'int 変数', link: '/text/chapter-2/variables' },
                    { text: '変数の入力', link: '/text/chapter-2/input' },
                    { text: '練習問題', link: '/text/chapter-2/practice/' },
                ]
            },
            {
                text: 'III. 演算・計算',
                link: '/text/chapter-3/',
                items: [
                    { text: '条件分岐', link: '/text/chapter-3/if-else' },
                    { text: '型', link: '/text/chapter-3/type' },
                    { text: '練習問題', link: '/text/chapter-3/practice/' },
                ]
            },
            {
                text: 'IV. 繰り返し処理',
                link: '/text/chapter-4/',
                items: [
                    { text: 'for ①', link: '/text/chapter-4/for-basic' },
                    { text: 'while', link: '/text/chapter-4/while' },
                    { text: '配列', link: '/text/chapter-4/array' },
                    { text: '文字列 ②', link: '/text/chapter-4/string' },
                    { text: 'for ②', link: '/text/chapter-4/for-advanced' },
                ]
            },
            {
                text: 'V. コードの簡易化① - Function',
                link: '/text/chapter-5/',
                items: [
                    { text: '関数とは', link: '/text/chapter-5/about-function' },
                    { text: '引数', link: '/text/chapter-5/argument' },
                    { text: '返り値', link: '/text/chapter-5/return-value' },
                    { text: '参照渡し', link: '/text/chapter-5/call-by-ref' },
                ]
            },
            {
                text: 'VI. コードの簡易化② - Struct',
                link: '/text/chapter-6/',
                items: [
                    { text: '構造体', link: '/text/chapter-6/struct' },
                    { text: 'メソッド', link: '/text/chapter-6/method' },
                ]
            },
            { text: 'VII. おわりに・おまけ', link: '/text/chapter-7/' },
            {
                text: 'VIII. 発展事項 (WIP)',
                link: '/text/chapter-8/',
                items: [
                    { text: '計算量とオーダー', link: '/text/chapter-8/complexity' },
                    { text: '再帰関数', link: '/text/chapter-8/recursive-function' },
                    { text: '実行時間', link: '/text/chapter-8/exec-time' },
                    { text: 'カプセル化', link: '/text/chapter-8/capsule' },
                ],
            },
            {
                text: 'for traP Member Only',
                items: [
                    { text: '講習会 Wiki ページ', link: 'https://wiki.trap.jp/Event/welcome/23/lecture/pg-basic' },
                    { text: '練習問題', link: 'https://md.trap.jp/IE4NUAc_RR-USMIXlevsgA' },
                ]
            }
        ],

        socialLinks: [
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188.15 181.66"><defs><style>.cls-1{fill:#005bac;}</style></defs><title>traP_logo_icon</title><g id="レイヤー_2" data-name="レイヤー 2"><g id="レイヤー_1-2" data-name="レイヤー 1"><path class="cls-1" d="M161.22,122.21l-19.4,4.86A62.61,62.61,0,0,1,68.28,149.2l10.44-10.76a49.1,49.1,0,0,0,59.34-34.1L164.64,113a78.49,78.49,0,0,1-3.42,9.2m20.24-25.36q.19-3,.2-6A91.57,91.57,0,0,0,179.9,73l-12.78,7.1a76.74,76.74,0,0,1,.76,10.78c0,1.63-.06,3.24-.16,4.84L139.9,93.28c0-.81.06-1.63.06-2.45A48.87,48.87,0,0,0,130,61.23l-1.26,1a47.5,47.5,0,0,1,7.12,13.54l-1.41.75a46,46,0,0,1,2.3,14.35c0,.73,0,1.46-.06,2.18L113.8,91a23.16,23.16,0,0,1-.64,5.17L135,103.35a46,46,0,0,1-44.21,33.43,45.39,45.39,0,0,1-9.53-1l13.77-14.19-32.51-3.89L60.08,86.94,32.86,114.37A62.58,62.58,0,0,1,53.14,40.9l1.8-7A66.91,66.91,0,0,1,90.83,23.5c1.58,0,3.14.06,4.69.17h0l4.77,8a59.41,59.41,0,0,1,20.37,7.23l2.68-2.53a62.85,62.85,0,0,0-21.32-8L97.2,20.26Q94,20,90.83,20A70.53,70.53,0,0,0,56.17,29l2-8a76.68,76.68,0,0,1,32.62-7.24c2.37,0,4.71.12,7,.33l7.1-13A92.46,92.46,0,0,0,90.83,0,90.86,90.86,0,0,0,13.08,137.82l-9.43,40.9,41.74-9.23a90.87,90.87,0,0,0,132.35-52.21l6.39,2.09a97.5,97.5,0,0,0,4-22l-6.69-.57Z"/></g></g></svg>'
                },
                link: 'https://trap.jp'
            }
        ]
    }
})
