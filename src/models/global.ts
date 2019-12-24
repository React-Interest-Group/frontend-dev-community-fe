import { Reducer } from 'redux';
import { Effect } from 'dva';
import { message } from 'antd';
import { setKeyInCache, getSid } from '@/utils/utils';
import { fetchCaptchaAsync } from '@/services/global';

export interface GlobalModelState {
  sid?: string | null;
  svgCaptcha?: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  reducers: {
    setSid: Reducer<GlobalModelState>;
    setSvgCaptcha: Reducer<GlobalModelState>;
  };
  effects: {
    querySvgCaptcha: Effect;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    sid: getSid('sid'), //通用唯一识别码，具有唯一性
    svgCaptcha: '', //验证码
  },
  reducers: {
    setSid(state, { payload }): GlobalModelState {
      setKeyInCache('sid', payload);

      return {
        ...state,
        sid: payload,
      };
    },
    setSvgCaptcha(state, { payload }): GlobalModelState {
      return {
        ...state,
        svgCaptcha: payload,
      };
    },
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
  },
};

export default GlobalModel;
