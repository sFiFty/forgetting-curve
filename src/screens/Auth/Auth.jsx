import React, { Component } from 'react';
import { FormGroup, InputGroup } from "@blueprintjs/core";

class Auth extends Component {
  render() {
    return (
      <div>
        <form>
          <FormGroup
            helperText="Helper text with details..."
            label="Label A"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" placeholder="Placeholder text" />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Auth;