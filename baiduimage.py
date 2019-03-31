from urllib.request import (
    Request, urlopen, urlretrieve, 
    build_opener, install_opener, 
    HTTPCookieProcessor
)
from urllib.parse import urlencode
from urllib.error import HTTPError
from bs4 import BeautifulSoup
import os, io, re, gzip, json, time, argparse

class BaiduImagesDownloader(object):
    def __init__(self, keyword, number, path, is_saveurls):
        # set variables
        self.keyword = keyword
        self.number = number
        if path:
            # check path existance
            if os.path.exists(path):
                self.path = path
            else:
                print(f'The path "{path}" does not exist!')
                return
        else:
            if not os.path.exists('save_imgs'):
                os.mkdir('save_imgs')
            if not os.path.exists(os.path.join('save_imgs', f'{self.keyword}')):
                os.mkdir(os.path.join('save_imgs', f'{self.keyword}'))
            self.path = os.path.join('save_imgs', f'{self.keyword}')

        self.is_saveurls = is_saveurls
        self.page = 0
        # set headers
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                + '(KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 
            'Accept-Encoding': 'gzip, deflate, br'
        }
        # main
        self.main()
  
    def get_page_json(self):
        url = 'https://image.baidu.com/search/acjson'
        params = {
            'tn': 'resultjson_com',
            'ipn': 'rj',
            'ct': 201326592,
            'is': '',
            'fp': 'result',
            'queryWord': self.keyword,
            'cl': '',
            'lm': '',
            'ie': 'utf-8',
            'oe': 'utf-8',
            'adpicid': '',
            'st': '',
            'z': '',
            'ic': '',
            'word': self.keyword,
            's': '',
            'se': '',
            'tab': '',
            'width': '',
            'height': '',
            'face': '',
            'istype': '',
            'qc': '',
            'nc': '',
            'fr': '',
            'pn': self.page*30,
            'rn': 30,
            'gsm': '3c',
            '1529204719009': ''
        }
        # Get images from Request
        request = Request(url + '?' + urlencode(params), headers=self.headers)
        respond = urlopen(request)
        
        # Read the Respond
        if respond.getheader('Content-Encoding') == 'gzip':
            gf = gzip.GzipFile(fileobj=io.BytesIO(respond.read()))
            content = gf.read().decode()
        else:
            content = respond.read().decode()
        content = re.sub('\'','\"',content)

        return json.loads(content)

    def get_image_url(self, list_num, img_obj):
        #######################################
        # the detail url of an image
        #######################################
        url = 'https://image.baidu.com/search/detail'
        params = {
            'ct': 503316480,
            'z': 0,
            'ipn': 'd',
            'word': self.keyword,
            'step_word': '',
            'hs': 0,
            'pn': self.page,
            'spn': 0,
            'di': img_obj['di'],
            'pi': 0,
            'rn': 1,
            'tn': 'baiduimagedetail',
            'is': '0,0',
            'istype': 2,
            'ie': 'utf-8',
            'oe': 'utf-8',
            'in': '',
            'cl': 2,
            'lm': -1,
            'st': -1,
            'cs': img_obj['cs'],
            'os': img_obj['os'],
            'simid': img_obj['simid'],
            'adpicid': 0,
            'lpn': 0,
            'ln': list_num,
            'fr': '',
            'fmq': str(int(time.time()*1000)) + '_R',
            'fm': 'result',
            'ic': 0,
            's': 'undefined',
            'hd': 0,
            'latest': 0,
            'copyright': 0,
            'se': '',
            'sme': '',
            'tab': 0,
            'width': '',
            'height': '',
            'face': 'undefined',
            'ist': '',
            'jit': '',
            'cg': '',
            'bdtype': 0,
            'oriquery': '',
            'objurl': img_obj['objURL'],
            'fromurl': img_obj['fromURL'],
            'gsm': 0,
            'rpstart': 0,
            'rpnum': 0,
            'islist': '',
            'querylist': '',
            'force': 'undefined',
        }
        request = Request(url + '?' + urlencode(params), headers=self.headers)
        respond = urlopen(request)

        # Get img details
        if respond.getheader('Content-Encoding') == 'gzip':
            gf = gzip.GzipFile(fileobj=io.BytesIO(respond.read()))
            content = gf.read().decode()
        else:
            content = respond.read().decode()

        # Find image url
        html_page = BeautifulSoup(content, 'html.parser')
        return html_page.find(id='hdFirstImgObj').attrs['src']

    def main(self):
        imgnum = 1
        # Every page
        while True:
            # Get page json
            page_json = self.get_page_json()
            list_num = page_json['listNum']

            # Check all imgs
            for img_obj in page_json['data']:
                img_url = self.get_image_url(list_num, img_obj)

                if self.is_saveurls: # Save to files
                    with open(os.path.join(self.path, f'{self.keyword}-{self.number}.txt'), 'a') as f:
                        f.write(f'{imgnum}: {img_url}\n')
                else: # Save images
                    print(f'\rdownloading image {imgnum}...', end='')
                    try:
                        urlretrieve(img_url, os.path.join(self.path, f'{imgnum}.jpg'))
                    except HTTPError as e:
                        continue
                # Next image
                print(f'\rdownload {imgnum} images success', end='')
                imgnum += 1
                if imgnum > self.number: # finished
                    print('')
                    return
                time.sleep(1.5)
        self.page += 1
       
if __name__ == '__main__':
    ap = argparse.ArgumentParser(description='Download Images from BaiduImage by keywords')
    ap.add_argument('keyword', type=str, help='keyword to search')
    ap.add_argument('-n', '-number', type=int, default=10, help='numbers of images you want, default 10')
    ap.add_argument('-p', '-path', type=str, default=None, help='path to save images, default "save_imgs/{keyword}"')
    ap.add_argument('-u', '-save_urls', action='store_true', 
        help='save urls to file, rather than save images, default False')
    args = ap.parse_args()
    BaiduImagesDownloader(args.keyword, args.n, args.p, args.u)
