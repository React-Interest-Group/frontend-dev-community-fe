import { Reducer } from 'redux';
import { Effect } from 'dva';
import { message } from 'antd';
import { createRegisterAsync } from '@/services/global';

export interface RegisterModelState {}

export interface RegisterModelType {
  namespace: 'register';
  state: RegisterModelState;
  effects: {
    createRegister: Effect;
  };
  reducers: {};
}

const RegisterModel: RegisterModelType = {
  namespace: 'register',
  state: {
    svgCaptcha: '',
  },
  effects: {
    *createRegister({ payload }, { call, put }) {
      const res = yield call(createRegisterAsync, payload);
      return res;
    },
  },
  reducers: {},
};

export default RegisterModel;
