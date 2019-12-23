import { Reducer } from 'redux';
import { Effect } from 'dva';
import { message } from 'antd';
import { fetchCaptchaAsync, createRegisterAsync } from '@/services/global';

export interface RegisterModelState {
  svgCaptcha?: string; // 验证码
}

export interface RegisterModelType {
  namespace: 'register';
  state: RegisterModelState;
  effects: {
    querySvgCaptcha: Effect;
    createRegister: Effect;
  };
  reducers: {
    setSvgCaptcha: Reducer<RegisterModelState>;
  };
}

const RegisterModel: RegisterModelType = {
  namespace: 'register',
  state: {
    svgCaptcha: '',
  },
  effects: {
    *querySvgCaptcha({ payload }, { call, put }) {
      const res = yield call(fetchCaptchaAsync, payload);
      if (200 === res.code) {
        yield put({
          type: 'setSvgCaptcha',
          payload: res.data,
        });
      } else {
        message.error(res.msg);
      }
    },
    *createRegister({ payload }, { call, put }) {
      const res = yield call(createRegisterAsync, payload);
      return res;
    },
  },
  reducers: {
    setSvgCaptcha(state, { payload }): RegisterModelState {
      return {
        ...state,
        svgCaptcha: payload,
      };
    },
  },
};

export default RegisterModel;
