import React from "react";
import { FormField, Input, Card, Layout, Cell } from "wix-style-react";

export default () => {
  const [charCount, setCharCount] = React.useState(0);
  const [value, setValue] = React.useState("");

  const handleOnChange = (value: string) => {
    setValue(value);
    setCharCount(value.length);
  };

  return (
    <Card>
      <Card.Header title="First card" />
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell span={4}>
            <FormField
              label="An input field"
              required
              infoContent="Help me fill the field"
              charCount={5 - charCount}
            >
              <Input
                value={value}
                onChange={(event) => handleOnChange(event.target.value)}
              />
            </FormField>
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  );
};
