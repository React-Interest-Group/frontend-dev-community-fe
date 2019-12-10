import React from 'react';
import router from 'umi/router';
import classNames from 'classnames';

import styles from './index.less';

const SwitchTab = () => {
  const tabList = [
    {
      name: '登录',
      path: '/login',
    },
  ];

  if (window.location.pathname === '/login' || window.location.pathname === '/register') {
    tabList.push({
      name: '注册',
      path: '/register',
    });
  }

  if (window.location.pathname === '/forget') {
    tabList.push({
      name: '找回密码',
      path: '/forget',
    });
  }

  return (
    <div className={styles.tabsList}>
      {tabList.map(tab => {
        const cls = classNames(styles.tabTitle, {
          [styles.active]: tab.path === window.location.pathname,
        });

        return (
          <span className={cls} key={tab.path} onClick={() => router.push(tab.path)}>
            {tab.name}
          </span>
        );
      })}
    </div>
  );
};

export default SwitchTab;
