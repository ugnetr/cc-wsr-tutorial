import React from "react";
import { withTranslation, WithTranslation } from "@wix/wix-i18n-config";
import {
  AddItem,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Cell,
  Dropdown,
  FormField,
  Heading,
  Input,
  Layout,
  Page,
  Text,
} from "wix-style-react";

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
            <Cell span={8}>
              <Card>
                <Card.Header title="General info" />
                <Card.Divider />
                <Card.Content>
                  <Layout>
                    <Cell span={6}>
                      <FormField label="First name" required>
                        <Input />
                      </FormField>
                    </Cell>
                    <Cell span={6}>
                      <FormField label="Last name" required>
                        <Input />
                      </FormField>
                    </Cell>

                    <Cell>
                      <Heading size="extraTiny" autoCapitalize="true">
                        Additional info
                      </Heading>
                    </Cell>
                    <Cell>
                      <FormField label="Favorite color">
                        <Dropdown
                          placeholder="Choose a color"
                          options={[
                            { id: 0, value: "Red" },
                            { id: 1, value: "Green" },
                            { id: 2, value: "Blue" },
                          ]}
                        />
                      </FormField>
                    </Cell>
                    <Cell>
                      <AddItem disabled>Add New List Item</AddItem>
                    </Cell>
                  </Layout>
                </Card.Content>
              </Card>
            </Cell>

            <Cell span={4}>
              <Layout>
                <Cell>
                  <Card>
                    <Card.Header
                      title="Role details"
                      suffix={<Button priority="secondary">Edit</Button>}
                    />
                    <Card.Divider />
                    <Card.Content>
                      <Layout>
                        <Cell>
                          <Heading size="extraTiny" autoCapitalize="true">
                            Official title
                          </Heading>
                          <Text>Keyboard anihilator</Text>
                        </Cell>
                        <Cell>
                          <Heading size="extraTiny" autoCapitalize="true">
                            Experience
                          </Heading>
                          <Text>It's over nine thousand</Text>
                        </Cell>
                      </Layout>
                    </Card.Content>
                  </Card>
                </Cell>

                {/* <Cell>
                  <Card>
                    <Card.Header title="Saved data" />
                    <Card.Divider />
                    <Card.Content></Card.Content>
                  </Card>
                </Cell> */}
              </Layout>
            </Cell>
          </Layout>
        </Page.Content>
      </Page>
    );
  }
}

export default withTranslation()(App);
