// import { Reducer } from 'redux';
// import { Effect } from 'dva';
// import { message } from 'antd';
// import { fetchCaptchaAsync } from '@/services/global';

// export interface RegisterModelState {
//   svgCaptcha?: string; // 验证码
// }

// export interface RegisterModelType {
//   namespace: 'login';
//   state: RegisterModelState;
//   effects: {
//     querySvgCaptcha: Effect;
//   };
//   reducers: {
//     setSvgCaptcha: Reducer<RegisterModelState>;
//   };
// }

// const RegisterModel: RegisterModelType = {
//   namespace: 'login',
//   state: {
//     svgCaptcha: '',
//   },
//   effects: {
//     *querySvgCaptcha({ payload }, { call, put }) {
//       const res = yield call(fetchCaptchaAsync, payload);

//       console.log('res:', res);

//       if (0 === res.code) {
//         yield put({
//           type: 'setSvgCaptcha',
//           payload: res.data,
//         });
//       } else {
//         message.error(res.msg);
//       }
//     },
//   },
//   reducers: {
//     setSvgCaptcha(state, { payload }): RegisterModelState {
//       return {
//         ...state,
//         svgCaptcha: payload,
//       };
//     },
//   },
// };

// export default RegisterModel;
