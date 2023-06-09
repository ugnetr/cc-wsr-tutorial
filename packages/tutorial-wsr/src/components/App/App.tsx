import React from 'react';
import { Layout, Cell, Box } from 'wix-style-react';

export default () => (
  <Layout>
    <Cell span={6}>
      <Layout>
        <Cell span={6}>I take half of the size</Cell>
        <Cell span={6}>me too</Cell>
      </Layout>
    </Cell>
  </Layout>
);
