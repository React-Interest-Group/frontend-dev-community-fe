import { Reducer } from 'redux';
import { Effect } from 'dva';
import { message } from 'antd';
import { fetchCaptchaAsync, createLoginAsync } from '@/services/global';

export interface LoginModelState {
  svgCaptcha?: string; // 验证码
}

export interface LoginModelType {
  namespace: 'login';
  state: LoginModelState;
  effects: {
    querySvgCaptcha: Effect;
    createLogin: Effect;
  };
  reducers: {
    setSvgCaptcha: Reducer<LoginModelState>;
  };
}

const LoginModel: LoginModelType = {
  namespace: 'login',
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
    *createLogin({ payload }, { call, put }) {
      const res = yield call(createLoginAsync, payload);

      if (200 === res.code) {
        message.success('登录成功');
      } else {
        message.error(res.msg);
      }
    },
  },
  reducers: {
    setSvgCaptcha(state, { payload }): LoginModelState {
      return {
        ...state,
        svgCaptcha: payload,
      };
    },
  },
};

export default LoginModel;
