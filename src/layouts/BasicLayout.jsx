import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Footer from './Footer';
import Header from './Header';
import styles from './BasicLayout.less';

const { Content } = Layout;

class BasicLayout extends PureComponent {
  getContext() {
    const { location, breadcrumbNameMap } = this.props;
    return {
      location,
      breadcrumbNameMap,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Header />
        <Content className={styles.content}>{children}</Content>
        <Footer />
      </Layout>
    );
  }
}

export default BasicLayout;
