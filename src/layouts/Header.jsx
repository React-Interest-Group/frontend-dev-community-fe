import React, { PureComponent } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class HeaderView extends PureComponent {
  render() {
    return (
      <Header>
        <span style={{ color: '#fff' }}>头部</span>
      </Header>
    );
  }
}

export default HeaderView;
