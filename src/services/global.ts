import request from '@/utils/request';

export interface ILoginParams {
  usename: string;
  password: string;
  code: string;
  sid: string;
}

export interface IRegisterParams {
  usename: string;
  password: string;
  code: string;
  sid: string;
  name: string;
}

export interface IForgetParams {
  // 待补充
}

/**
 * 获取验证码接口
 *
 * @param {stirng} sid 唯一标识
 */
export const fetchCaptchaAsync = (sid: string) => request('/public/captcha', { params: { sid } });

/**
 * 登录接口
 *
 * @param {object} loginInfo 用户登录信息(邮箱、密码、验证码、UUID)
 */
export const createLoginAsync = (params: ILoginParams) =>
  request('/login/login', {
    method: 'POST',
    data: {
      ...params,
    },
  });

/**
 * 注册接口
 *
 * @param {object} registerInfo 用户登录信息(邮箱、密码、验证码、UUID)
 */
export const createRegisterAsync = (registerInfo: IRegisterParams) =>
  request('/login/reg', {
    method: 'POST',
    data: {
      ...registerInfo,
    },
  });

/**
 * 密码找回接口
 *
 * @param {object} params 用户信息(邮箱、验证码)
 */
export const forgetPasswordAsync = (params: IForgetParams) => request('/public/forget', params);
