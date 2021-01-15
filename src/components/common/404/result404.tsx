import React from '../../lock/node_modules/react';
import { Result, Button } from 'antd';

const Result404 = () => {
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
  )
}

export default Result404;