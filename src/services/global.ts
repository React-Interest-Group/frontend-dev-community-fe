/**
 * Acer管理页面接口
 */
import { stringify } from 'qs';
import request from '@/utils/request';

export interface ILoginParams {
  usename: string;
  password: string;
  code: string;
  sid: string;
}

/**
 * 获取验证码接口
 *
 * @param {stirng} sid 唯一标识
 */
export const fetchCaptchaAsync = (sid: string) => request('/public/captcha', { params: { sid } });

/**
 * 密码找回接口
 *
 * @param {object} params 用户信息(邮箱、验证码)
 */
export const forgetPasswordAsync = params => request('/forget', params);

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
