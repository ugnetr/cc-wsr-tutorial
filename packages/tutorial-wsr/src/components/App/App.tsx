import React from "react";
import { withTranslation, WithTranslation } from "@wix/wix-i18n-config";
import { Box, Breadcrumbs, Button, Cell, Layout, Page } from "wix-style-react";

interface AppProps extends WithTranslation {}

class App extends React.Component<AppProps> {
  render() {
    const { t } = this.props;

    return (
      <Page>
        <Page.Header
          actionsBar={
            <Box gap="SP2">
              <Button skin="inverted">Clear</Button>
              <Button>Submit</Button>
            </Box>
          }
          breadcrumbs={
            <Breadcrumbs
              activeId="2"
              items={[
                { id: "1", value: "Root Page" },
                { id: "2", value: "WSR Form" },
              ]}
              onClick={() => {}}
            />
          }
          onBackClicked={() => {}}
          title="WSR Form"
        />
        <Page.Content>
          <Layout>
            <Cell span={8}>General info</Cell>
            <Cell span={4}>
              <Layout>
                <Cell>Role details</Cell>
                <Cell>Saved data</Cell>
              </Layout>
            </Cell>
          </Layout>
        </Page.Content>
      </Page>
    );
  }
}

export default withTranslation()(App);
