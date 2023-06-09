import React from 'react';
import { FormField, Input } from 'wix-style-react';

export default () => (
  <FormField
    label="An input field"
    required
    infoContent="Help me fill the field"
  >
    <Input />
  </FormField>
);
