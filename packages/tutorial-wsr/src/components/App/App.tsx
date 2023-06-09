import React from 'react';
import { Layout, Cell, Box } from 'wix-style-react';

export default () => (
  <Layout>
    <Cell><Box border="1px solid black">I am a full row</Box></Cell>
    <Cell span={6}><Box border="1px solid black">I take half of the size</Box></Cell>
    <Cell span={6}><Box border="1px solid black">me too</Box></Cell>
    <Cell span={4}><Box border="1px solid black">third</Box></Cell>
    <Cell span={4}><Box border="1px solid black">me too</Box></Cell>
    <Cell span={4}><Box border="1px solid black">me too</Box></Cell>
  </Layout>
);
