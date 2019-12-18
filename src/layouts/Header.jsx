import React, { PureComponent } from 'react';
import { Layout, Row, Col, Menu, Icon, Button } from 'antd';
import styles from './Header.less';

const { Header } = Layout;

class HeaderView extends PureComponent {
  render() {
    return (
      <Header>
        <Row gutter={16}>
          <Col sm={8} md={6} lg={4} xl={4}>
            {/* logo区域 */}
            <div className={styles.logo} />
          </Col>
          <Col sm={8} md={10} lg={12} xl={14}>
            {/* 主菜单区域 */}
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Icon type="message" />交流
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="book" />案例
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="layout" />框架
              </Menu.Item>
            </Menu>
          </Col>
          <Col sm={8} md={8} lg={8} xl={6} className={styles.area_login}>
            {/* 登录区域 */}
            <Button className={styles.button_login} type="link" icon="user">登入</Button>
            <Button className={styles.button_login} type="link">注册</Button>
            <Button className={styles.button_login} type="link" icon="qq"></Button>
            <Button className={styles.button_login} type="link" icon="weibo"></Button>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default HeaderView;
