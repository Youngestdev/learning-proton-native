import React, { Component } from 'react';

import { render, Window, App, Menu } from 'proton-native';

class Example extends Component {
  render() {
    return (
      <App>
         <Menu label="HI">
           <Menu.Item>Hi</Menu.Item>
           <Menu.Item>Hello</Menu.Item>
         </Menu>
        <Window title="Example" size={{w: 500, h: 500}} />
      </App>
    );
  }
}

render(<Example />);