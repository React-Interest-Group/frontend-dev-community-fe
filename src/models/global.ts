import { Reducer } from 'redux';
import { setKeyInCache, getKeyFromCache } from '@/utils/cache';

export interface GlobalModelState {
  sid: string | null;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  reducers: {
    setSid: Reducer<GlobalModelState>;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    sid: getKeyFromCache('sid'), //通用唯一识别码，具有唯一性
  },
  reducers: {
    setSid(state, { payload }): GlobalModelState {
      setKeyInCache('sid', payload);

      return {
        ...state,
        sid: payload,
      };
    },
  },
};

export default GlobalModel;
