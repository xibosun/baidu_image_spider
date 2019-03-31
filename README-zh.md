## 百度图片爬虫

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://github.com/xibosun/baidu_spider)
[![issues](https://img.shields.io/badge/Issues-0-red.svg)](https://github.com/xibosun/baidu_spider/issues)
[![Stars](https://img.shields.io/badge/Stars-0-blue.svg)](https://github.com/xibosun/baidu_spider/stargazers)
[![Dependencies](https://img.shields.io/badge/Dependencies-Python3.7-brightgreen.svg)](https://www.python.org/)
[![Release](https://img.shields.io/badge/Release-v1.0-blue.svg)](https://github.com/xibosun/baidu_spider)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/mit-license.php)
[![](https://xibosun.github.io/baidu_spider/res/chinese.svg)](README-zh.md)

### 介绍

此项目可以根据查询关键字通过百度图片，获取高清图片或高清图片的url。

### 依赖

通过 `pip` 安装 `BeautifulSoup4`

```shell
pip3 install BeautifulSoup4
```

### 使用

输入查询关键字，下载图像到默认路径，以"星月夜"为例。

```shell
$ python3 baiduimage.py 星月夜
Get 10 images success
```

默认下载10张图片到 "/save_imgs/The Starry Night/"。
通过 `-n` 或 `-number` 命令指定图片数量

```shell
$ python3 baiduimage.py 星月夜 -n 5
Get 5 images success
```

通过 `-p` 或 `-path` 命令指定下载图片的路径

```shell
$ python3 baiduimage.py 星月夜 -n 5 -p 'path/to/save/imgs'
Get 5 images success
```

路径必须是存在的，程序不会自动创建路径

```shell
$ python3 baiduimage.py 星月夜 -p path/does/not/exist
The path "/path/does/not/exist" does not exist!
```

某些情况下，直接输出图片url比存储图像文件更加方便，可以通过 `-u` 或 `-save_urls` 命令切换两种输出。

```shell
$ python3 baiduimage.py 星月夜 -n 5 -p path/to/save/imgs -u
```

此时，一个 `json` 格式的文件将创建在目录中。

```json
[
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628883&di=b37b6029cdd6b8b0dd7321913344c3e9&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.huodongxing.com%2Ffile%2F20151015%2F11DDE7F24FE07E8288D42C3CBC8D986344%2F30822113502513568.jpg%3Fauth_key%3D1530544386-0-0-ceef63577e69568fcc4dfa5d32b2355d",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628885&di=b8650313ea34c338246411c59b9e16ca&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.yiyongtong.com%2Fuploads%2Fallimg%2F180119%2F1-1P1191A142401.jpg", 
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628886&di=5b8a857d57003269ba01b7194a66152c&imgtype=jpg&er=1&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FP9WMAqF6DdRqhDlgJicIeY0bCpacdH2hOd8YiadGh9v8hVXBkS0w6rraYUkwxQBjV0YQ7E39lN39PSZK2pQjsuFg%2F640%3Fwx_fmt%3Djpeg", 
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628888&di=307860309e022893e924f9795bc0fc0c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.fashiontrenddigest.com%2FdigestPics%2Fday_141202%2F201412021851556294.jpg", 
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628890&di=90e9a26b55fd6a537c6e756b9cd0a1f6&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170812%2Ffcaa305d522e4f828213cce95395137e.jpg"
]
```
