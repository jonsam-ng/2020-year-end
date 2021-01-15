import React, { FC, lazy, Suspense } from 'react';
import Router from './router';
import useStore from './stores/index';
import { observer } from 'mobx-react';
import { Button, Spin, BackTop } from 'antd';
import { useTranslation } from 'react-i18next';
// import CircleLoading from './components/common/loading/circleLoading';
import './App.scss';
// import * as Sentry from '@sentry/browser';
// const Header = lazy(() => import('./components/header'));
const ProgressDownloader = lazy(() => import('./components/progressDownloader'));

// const onError = e => {
//   Sentry.withScope(scope => {
//     scope.setExtras({ componentStack: e.message }); 
//     // 因为我用的是tsx，对类型要求的比较严格，所以才会写成对象的方式传参，componentStack是componentDidcatch的error参数的key
//     Sentry.captureException(e.error);
//   });
// };
// // 必须要用addEventListener，并且第三个参数为true，不然错误无法冒泡到app.jsx中
// window.addEventListener('error', onError, true);

const App: FC = () => {
  const { t, i18n } = useTranslation();
  // const { baseStore, baseStoreDecorate } = useStore();
  // const { idx, strIdx, add } = baseStore; 

  const dp = {
    url: '/weixin/Windows/WeChatSetup.exe',
    loadingTip: '正在下载 ...',
    downloadedTip: '下载完成！',
    beforeDownload: () => {},
    afterDownload: () => {},
    filename: '',
    message: {
      title: '提示：',
      desc: '文件下载完成！',
    }
  }
  return (
    <Suspense fallback={<Spin tip={t("Loading...")} style={{marginTop: '2%'}}></Spin>}>
      <div className="App">
        {/* <h1 onClick={(e) => {add()}}>{idx}</h1>
        <h2>{strIdx}</h2>
        <Button type="primary" onClick={(e) => {add()}}>Button</Button>
        <Header></Header>
        <Router></Router>
        <BackTop /> */}
        <ProgressDownloader {...dp}/>
      </div>
    </Suspense> 
  );
}

export default observer(App);