import { AnyAction, Dispatch } from 'redux';
import { RouterTypes } from 'umi';
import { GlobalModelState } from './global';
import { LoginModelState } from '../pages/Login/models/login';

export { GlobalModelState, LoginModelState };

export interface ConnectState {
  global: GlobalModelState;
  login: LoginModelState;
}

export interface ConnectProps<T = {}> {
  dispatch?: Dispatch<AnyAction>;
}

export default ConnectState;
