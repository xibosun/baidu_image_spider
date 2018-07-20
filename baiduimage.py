import urllib.request
from urllib import parse
import re
import gzip
import io 
import json

class search:
    def __init__(self):
        pass
    def searchpic(self, keyword, count):
        url='https://image.baidu.com/search/acjson'
        headers = {
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Host': 'image.baidu.com',
        'Upgrade-Insecure-Requests': 1,
        }
        imgnum=0
        for i in range(100):
            param={'tn': 'resultjson_com',
            'ipn': 'rj',
            'ct': 201326592,
            'is': '',
            'fp': 'result',
            'queryWord': keyword,
            'cl': '',
            'lm': '',
            'ie': 'utf-8',
            'oe': 'utf-8',
            'adpicid': '',
            'st': '',
            'z': '',
            'ic': '',
            'word': keyword,
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
            'pn': (i)*30,
            'rn': 30,
            'gsm': '3c',
            '1529204719009': ''}
            data = parse.urlencode(param)
            req = urllib.request.Request(url+'?'+data, headers=headers,method="GET")
            rawreq=urllib.request.urlopen(req)
            encoding = rawreq.getheader('Content-Encoding')
            page = rawreq.read()
            content=''
            if encoding == 'gzip':
                buf = io.BytesIO(page)
                gf = gzip.GzipFile(fileobj=buf)
                content1 = gf.read()
                content=content1.decode()
            content=re.sub('\'','\"',content)
            '''
            print(content)
            f=open("test.txt","w",encoding="UTF-8")
            f.write(content)
            f.close()
            '''
            #page = urllib.request.urlopen(req).read()
            #content = page.decode()
            
            imglist=[]
            reqjson=json.loads(content)        
            for obj in reqjson["data"]:
                try:#null
                    if(obj["hoverURL"][0]=='h'):
                        imglist.append(obj["hoverURL"])
                except:
                    pass
            
            for imgname in imglist:
                imgdata=urllib.request.urlopen(imgname)
                data=imgdata.read()
                name='search/'+keyword+'_'+str(imgnum)+'.jpg'
                with open(name, "wb") as code:  
                    code.write(data)  
                    code.close()
                    imgnum+=1
                    if imgnum>=count:
                        break
            if imgnum>=count:
                break   
    def searchurl(self, keyword, count):
        try:
            url='https://image.baidu.com/search/acjson'
            headers = {
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Host': 'image.baidu.com',
            'Upgrade-Insecure-Requests': 1,
            }
            imgnum=0
            imglist=[]
            for i in range(100):
                param={'tn': 'resultjson_com',
                'ipn': 'rj',
                'ct': 201326592,
                'is': '',
                'fp': 'result',
                'queryWord': keyword,
                'cl': '',
                'lm': '',
                'ie': 'utf-8',
                'oe': 'utf-8',
                'adpicid': '',
                'st': '',
                'z': '',
                'ic': '',
                'word': keyword,
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
                'pn': (i)*30,
                'rn': 30,
                'gsm': '3c',
                '1529204719009': ''}
                data = parse.urlencode(param)
                req = urllib.request.Request(url+'?'+data, headers=headers,method="GET")
                rawreq=urllib.request.urlopen(req)
                encoding = rawreq.getheader('Content-Encoding')
                page = rawreq.read()
                content=''
                if encoding == 'gzip':
                    buf = io.BytesIO(page)
                    gf = gzip.GzipFile(fileobj=buf)
                    content1 = gf.read()
                    content=content1.decode()
                content=re.sub('\'','\"',content)
                '''
                print(content)
                f=open("test.txt","w",encoding="UTF-8")
                f.write(content)
                f.close()
                '''
                #page = urllib.request.urlopen(req).read()
                #content = page.decode()
                
                reqjson=json.loads(content)        
                for obj in reqjson["data"]:
                    try:#null
                        if(obj["hoverURL"][0]=='h'):
                            imglist.append(obj["hoverURL"])
                            imgnum+=1
                            if imgnum>=count:
                                break  
                    except:
                        pass
                if imgnum>=count:
                    break  
            return imglist 
        except:
            return []

keyword=input("input keyword：")
count=int(input("number of pics："))
ins=search()
ins.searchpic(keyword,count)
print(ins.searchurl(keyword,count))
