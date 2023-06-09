import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { withTranslation } from "@wix/wix-i18n-config";
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
  IconButton,
  Input,
  Layout,
  Page,
  Text,
  WixStyleReactProvider,
} from "wix-style-react";
import DeleteSmall from "wix-ui-icons-common/DeleteSmall";

type FormInputData = { firstName: string; lastName: string };

type FormData = FormInputData & { favoriteColor: Color | undefined };

type Color = "Red" | "Green" | "Blue";

type ColorOption = { id: string; value: Color };

const colorOptions: ColorOption[] = [
  { id: "0", value: "Red" },
  { id: "1", value: "Green" },
  { id: "2", value: "Blue" },
];

const App: FunctionComponent = () => {
  const [formInputData, setInputFormData] = useState<FormInputData>({
    firstName: "",
    lastName: "",
  });

  const [favoriteColor, setFavoriteColor] = useState<string>("");
  const [submittedValues, setSubmittedValues] = useState<FormData>();

  const handleClearColor = () => setFavoriteColor("");

  const handleClearForm = () => {
    setInputFormData({
      firstName: "",
      lastName: "",
    });
    handleClearColor();
  };

  const handleFormInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!formInputData.firstName || !formInputData.lastName) return;

    // Handle submit
    setSubmittedValues({
      ...formInputData,
      favoriteColor: colorOptions.find((option) => option.id === favoriteColor)
        ?.value,
    });

    handleClearForm();
  };

  return (
    <WixStyleReactProvider>
      <Page>
        <Page.Header
          actionsBar={
            <Box gap="SP2">
              <Button
                skin="inverted"
                onClick={handleClearForm}
                disabled={
                  !formInputData.firstName &&
                  !formInputData.lastName &&
                  !favoriteColor
                }
              >
                Clear
              </Button>
              <Button
                dataHook="submitButton"
                onClick={handleSubmit}
                disabled={!formInputData.firstName && !formInputData.lastName}
              >
                Submit
              </Button>
            </Box>
          }
          breadcrumbs={
            <Breadcrumbs
              activeId="2"
              items={[
                { id: "1", value: "Root Page" },
                { id: "2", value: "WSR Form" },
              ]}
            />
          }
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
                        <Input
                          dataHook="firstNameInput"
                          name="firstName"
                          value={formInputData.firstName}
                          onChange={handleFormInputChange}
                        />
                      </FormField>
                    </Cell>
                    <Cell span={6}>
                      <FormField label="Last name" required>
                        <Input
                          dataHook="lastNameInput"
                          name="lastName"
                          value={formInputData.lastName}
                          onChange={handleFormInputChange}
                        />
                      </FormField>
                    </Cell>

                    <Cell>
                      <Heading size="extraTiny" autoCapitalize="true">
                        Additional info
                      </Heading>
                    </Cell>
                    <Cell>
                      <FormField label="Favorite color">
                        <Layout>
                          <Cell span={10}>
                            <Dropdown
                              dataHook="favoriteColorDropdown"
                              placeholder="Choose a color"
                              options={colorOptions}
                              selectedId={favoriteColor}
                              onSelect={(option) =>
                                setFavoriteColor(option.id as string)
                              }
                            />
                          </Cell>
                          <Cell span={2}>
                            <IconButton
                              priority="secondary"
                              onClick={handleClearColor}
                              disabled={!favoriteColor}
                            >
                              <DeleteSmall />
                            </IconButton>
                          </Cell>
                        </Layout>
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
                      suffix={
                        <Button priority="secondary" disabled>
                          Edit
                        </Button>
                      }
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

                {submittedValues && (
                  <Cell>
                    <Card>
                      <Card.Header title="Saved data" dataHook="savedDataHeader" />
                      <Card.Divider />
                      <Card.Content>
                        <Layout>
                          {[
                            {
                              title: "First name",
                              value: submittedValues.firstName,
                            },
                            {
                              title: "Last name",
                              value: submittedValues.lastName,
                            },
                            {
                              title: "Favorite color",
                              value: submittedValues.favoriteColor,
                            },
                          ]
                            .filter(({ value }) => !!value)
                            .map(({ title, value }) => (
                              <Cell key={title}>
                                <Heading size="extraTiny" autoCapitalize="true">
                                  {title}
                                </Heading>
                                <Text>{value}</Text>
                              </Cell>
                            ))}
                        </Layout>
                      </Card.Content>
                    </Card>
                  </Cell>
                )}
              </Layout>
            </Cell>
          </Layout>
        </Page.Content>
      </Page>
    </WixStyleReactProvider>
  );
};

export default withTranslation()(App);
