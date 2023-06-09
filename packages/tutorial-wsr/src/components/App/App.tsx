import React from 'react';
import { Layout, Cell, Card } from 'wix-style-react';

export default () => (
  <Layout>
    <Cell span={6}>
      <Card>
        <Card.Header title="first card" />
        <Card.Divider/>
        <Card.Content>
          <Layout>
            <Cell span={4}>first part</Cell>
            <Cell span={4}>second part</Cell>
            <Cell span={4}>third part</Cell>
          </Layout>
        </Card.Content>
      </Card>
    </Cell>
  </Layout>
);
