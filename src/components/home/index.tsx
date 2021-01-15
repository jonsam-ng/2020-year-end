import React, { FC } from 'react';
import chunk from "lodash/chunk";
import { useBoolean } from 'ahooks';
import DocumentTitle from 'react-document-title';
  
const Home: FC = () => {
  const [light, { toggle: toggleLight }] = useBoolean(false);
  console.log(chunk(['a', 'b', 'c', 'd'], 2));
  return (
  <DocumentTitle title='Home'>
    <>
      <h1 onClick={() => toggleLight()}>Home</h1>
      <h2>Light is { light ? 'on' : 'off' }.</h2>
    </>
  </DocumentTitle>)

}

export default Home;