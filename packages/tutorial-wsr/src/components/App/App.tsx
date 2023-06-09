import React from "react";
import {
  Layout,
  Cell,
  Card,
  FormField,
  Input,
  Dropdown,
} from "wix-style-react";

export default class extends React.Component {
  state = {
    inputValue: "",
    dropdownSelectedId: -1,
  };
  render() {
    return (
      <Layout>
        <Cell>
          <Card>
            <Card.Header title="Inputs and Selection" />
            <Card.Content>
              <Layout>
                <Cell span={8}>
                  <FormField
                    label="<Input/> - A simple Input"
                    infoContent="Use this for regular text input"
                    status="error"
                    statusMessage="This is an error message."
                  >
                    <Input
                      value={this.state.inputValue}
                      onChange={(e) =>
                        this.setState({ inputValue: e.target.value })
                      }
                    />
                  </FormField>
                </Cell>
                <Cell span={8}>
                  <FormField
                    label="<Dropdown/> - A simple select component"
                    infoContent="Use this to pick a value from a set"
                  >
                    <Dropdown
                      selectedId={this.state.dropdownSelectedId}
                      onSelect={(option) =>
                        this.setState({ dropdownSelectedId: option.id })
                      }
                      options={[
                        {
                          id: 0,
                          value: "first option",
                        },
                        {
                          id: 1,
                          value: "second option",
                        },
                        {
                          id: 2,
                          value: "Third option",
                        },
                      ]}
                    />
                  </FormField>
                </Cell>
              </Layout>
            </Card.Content>
          </Card>
        </Cell>
      </Layout>
    );
  }
}
