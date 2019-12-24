import { Reducer } from 'redux';
import { Effect } from 'dva';
import { message } from 'antd';
import { createLoginAsync } from '@/services/global';

export interface LoginModelState {}

export interface LoginModelType {
  namespace: 'login';
  state: LoginModelState;
  reducers: {};
  effects: {
    createLogin: Effect;
  };
}

const LoginModel: LoginModelType = {
  namespace: 'login',
  state: {},
  reducers: {},
  effects: {
    *createLogin({ payload }, { call, put }) {
      const res = yield call(createLoginAsync, payload);
      if (200 === res.code) {
        message.success('登录成功');
      } else {
        message.error(res.msg);
      }
    },
  },
};

export default LoginModel;
