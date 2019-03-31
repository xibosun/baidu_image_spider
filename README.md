## Baidu Image Spider

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://github.com/xibosun/baidu_spider)
[![issues](https://img.shields.io/badge/Issues-0-red.svg)](https://github.com/xibosun/baidu_spider/issues)
[![Stars](https://img.shields.io/badge/Stars-0-blue.svg)](https://github.com/xibosun/baidu_spider/stargazers)
[![Dependencies](https://img.shields.io/badge/Dependencies-Python3.7-brightgreen.svg)](https://www.python.org/)
[![Release](https://img.shields.io/badge/Release-v1.0-blue.svg)](https://github.com/xibosun/baidu_spider)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/mit-license.php)
[![](https://xibosun.github.io/baidu_spider/res/chinese.svg)](README-zh.md)

### Introduce

The goal of Baidu Image Spider is to help you get HD images via `images.baidu.com` based on you keywords, you can either save images to your path or save the urls of them in a file.

### Dependencies

`BeautifulSoup4` is needed to use Baide Spider. Install it using `pip`.

```shell
pip3 install BeautifulSoup4
```

### Usage

Type a keyword and download images to a default path. Take "The Starry Night" as an example.

```shell
$ python3 baiduimage.py "The Starry Night"
Get 10 images success
```

It would downloads 10 images to "/save_imgs/The Starry Night/".

Specified number of images using `-n` or `-number` command.

```shell
$ python3 baiduimage.py "The Starry Night" -n 5
Get 5 images success
```

Specified the path to save images using `-p` or `-path` command.

```shell
$ python3 baiduimage.py "The Starry Night" -n 5 -p 'path/to/save/imgs'
Get 5 images success
```

The path should exists. It wouldn't autometically create path.

```shell
$ python3 baiduimage.py "The Starry Night" -p path/does/not/exist
The path "/path/does/not/exist" does not exist!
```

In some cases, it's more convienent to use urls of images rather than images files. You can switch between them using `-u` or `-save_urls` command

```shell
$ python3 baiduimage.py "The Starry Night" -n 5 -p path/to/save/imgs -u
```

Now, A `json` files is saved in the path.

```json
[
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628883&di=b37b6029cdd6b8b0dd7321913344c3e9&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.huodongxing.com%2Ffile%2F20151015%2F11DDE7F24FE07E8288D42C3CBC8D986344%2F30822113502513568.jpg%3Fauth_key%3D1530544386-0-0-ceef63577e69568fcc4dfa5d32b2355d",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628885&di=b8650313ea34c338246411c59b9e16ca&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.yiyongtong.com%2Fuploads%2Fallimg%2F180119%2F1-1P1191A142401.jpg", 
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628886&di=5b8a857d57003269ba01b7194a66152c&imgtype=jpg&er=1&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FP9WMAqF6DdRqhDlgJicIeY0bCpacdH2hOd8YiadGh9v8hVXBkS0w6rraYUkwxQBjV0YQ7E39lN39PSZK2pQjsuFg%2F640%3Fwx_fmt%3Djpeg", 
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628888&di=307860309e022893e924f9795bc0fc0c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.fashiontrenddigest.com%2FdigestPics%2Fday_141202%2F201412021851556294.jpg", 
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554628890&di=90e9a26b55fd6a537c6e756b9cd0a1f6&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170812%2Ffcaa305d522e4f828213cce95395137e.jpg"
]
```
