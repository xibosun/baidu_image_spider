## Baidu Image Spider

[![Build Status](https://xibosun.github.io/douban_spider/docs/build_status.svg)](https://github.com/xibosun/baidu_spider)
[![issues](https://xibosun.github.io/douban_spider/docs/issues.svg)](https://github.com/xibosun/baidu_spider/issues)
[![Stars](https://xibosun.github.io/douban_spider/docs/stars.svg)](https://github.com/xibosun/baidu_spider/stargazers)
[![Dependencies](https://xibosun.github.io/douban_spider/docs/dependencies.svg)](https://www.python.org/downloads/release/python-363/)
[![Release](https://xibosun.github.io/douban_spider/docs/release.svg)](https://github.com/xibosun/baidu_spider)
[![License](https://xibosun.github.io/douban_spider/docs/license.svg)](https://opensource.org/licenses/mit-license.php)
[![](https://xibosun.github.io/douban_spider/docs/chinese.svg)](README-zh.md)

### Introduce

Baidu Image Spider can help you find image based on your keyword.

### Dependencies

install `gzip`, `json`, `re`, using `pip`.

### Usage

First, type the keyword to search. Take "The Starry Night" as an example.

```
input keyword: The Starry Night
```

Then input the number of images you want.

```
number of pics: 12
```

### result

Then it would save the images or return the urls of them with *JSON* format.

```
['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3151821785,2257953516&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2180750087,196933357&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3934163105,2026184406&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3378451335,1895294952&fm=27&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3879481087,3883224317&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=386725354,2830833392&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2074250503,1148182660&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3201361018,3145236084&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1472224935,1575682395&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1081326597,2339731606&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4026543696,3011650539&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4139601809,3953991665&fm=27&gp=0.jpg']
```
