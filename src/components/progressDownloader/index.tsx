/**
 * @Author wuqingshan
 * @Description 带下载进度的下载组件
 * @Compatibility 
 * @Date 2020-09-01 16:19:04 Tuesday
 * @depend 依赖于antd
 */
import React, { useState, useEffect } from 'react';
import CircleStatusLoader from './components/circleStatusLoader';
import { notification } from 'antd';

interface IProps {
  url: string,
  loadingTip: string,
  downloadedTip: string,
  beforeDownload?: Function
  afterDownload?: Function,
  filename?: string,
  message?: {
    title: string,
    desc: string,
  }
  className?: string,
  style?: object,
}

const ProgressDownloader = (props:IProps) => {

  const {url, 
    beforeDownload = () => {}, 
    afterDownload = () => {}, loadingTip, downloadedTip, 
    message = {
      title: '通知：',
      desc: '下载完成',
    }, 
    filename, 
    className, style
  } = props;
  const {title, desc} = message;

  const [loading, setLoading] = useState<boolean>(true);
  const [tip, setTip] = useState<string>(loadingTip);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  const parseUrl = (url:string) => {
    if(url.includes('?')){
      return url.split('?')[0].split('/').pop();
    }
    return url.split('/').pop()
  }

  const saveFilename = filename ? filename : parseUrl(url);

  useEffect(() => {
    if(url) {
      download()
    }
    return () => {
      // cleanup
    }
  }, [])

  const save = (object: any, name: string) => {
		var a = document.createElement('a');
		var url = URL.createObjectURL(object);
		a.href = url;
		a.download = name;
		a.click();
	};

  const download = () => {
    beforeDownload();
		var request = new XMLHttpRequest();
		request.responseType = 'blob';
		request.open('GET', url);
		request.addEventListener('error', e => {
			console.log('error', e);
		});
		request.addEventListener('progress', e => {
      let curProcess = Math.floor((e.loaded / e.total) * 100);
      console.log('已下载：', curProcess);
			if (curProcess >= 100) {
				setTip(downloadedTip);
				notification['success']({
					message: title,
					description: desc,
				});
			}
			setLoadingProgress(curProcess); // state是异步的，更新稍微滞缓
		});
		request.addEventListener('load', function (e) {
      save(request.response, saveFilename as string);
			afterDownload();
		});
		request.send();
	};

  return (
    <div className={`progress__downloader--container ${className}`} style={style}>
				{/* <CircleStatusLoader auto={true} title={downloadedTip} strokeColor="3F90F7" speed={10} /> */}
				{
          loading && <CircleStatusLoader auto={false} percent={loadingProgress} title={tip} strokeColor="74BB46" />
        }
    </div>

  )
}

export default ProgressDownloader;
