import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Dispatch } from 'redux';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { ConnectState } from '@/models/connect';
import SwitchTab from '@/components/SwitchTab/index.tsx';
import { ILoginParams } from '@/services/services';

const FormItem = Form.Item;

interface ILoginProps extends FormComponentProps {
  sid: string;
  svgCaptcha: string;
  getSvgCaptcha: (sid: string) => Promise<void>;
  doLogin: (params: ILoginParams) => Promise<void>;
}

const Login = (props: ILoginProps) => {
  const {
    sid,
    svgCaptcha,
    form: { getFieldDecorator },
    getSvgCaptcha,
    doLogin,
  } = props;

  useEffect(() => {
    if (!svgCaptcha) {
      getSvgCaptcha(sid);
    }
  }, []);

  const handleSumbit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        doLogin({ ...values, sid });
      }
    });
  };

  return (
    <div>
      <SwitchTab />
      <Form>
        <FormItem label="用户名">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入邮箱' }],
          })(<Input placeholder="请输入邮箱" />)}
        </FormItem>

        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(<Input placeholder="请输入密码" />)}
        </FormItem>

        <FormItem label="验证码">
          {getFieldDecorator('code', {
            rules: [{ required: true, message: '请输入验证码' }],
          })(<Input placeholder="请输入验证码" />)}
        </FormItem>
        <span dangerouslySetInnerHTML={{ __html: svgCaptcha }} />
        <div>
          <Button type="primary" onClick={handleSumbit}>
            立即登录
          </Button>
          <Button type="primary" onClick={() => router.push('/forget')}>
            忘记密码
          </Button>
        </div>
      </Form>
    </div>
  );
};

const WrappedLogin = Form.create()(Login);

const mapStateToProps = ({ global }: ConnectState) => {
  const { sid, svgCaptcha } = global;

  return { sid, svgCaptcha };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getSvgCaptcha: (sid: string) => dispatch({ type: 'global/querySvgCaptcha', payload: sid }),
    doLogin: (params: ILoginParams) => dispatch({ type: 'login/createLogin', payload: params }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLogin);
