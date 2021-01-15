import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header:React.FC = (props: any) => {
  const { t, i18n } = useTranslation();
  const [ idx, setIdx ] = useState(0);
  return (
    <>
      <button onClick={()=>i18n.changeLanguage(i18n.language === 'en'?'zh_CN':'en')}>{i18n.language === 'en'?'中文':'english'}</button>
      <span>{t('loading')}</span>
      <h1 onClick={() => {setIdx(idx+1)}}>{idx}</h1>
    </>
  )
}

export default Header;