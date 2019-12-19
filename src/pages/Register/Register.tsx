import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Dispatch } from 'redux';
import { Form, Input, Button, message } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { ConnectState } from '@/models/connect';
import SwitchTab from '@/components/SwitchTab/index.tsx';
import { IRegisterParams } from '@/services/services';
import { object } from 'prop-types';

const FormItem = Form.Item;

interface IRegisterProps extends FormComponentProps {
  sid: string;
  svgCaptcha: string;
  setSid: (sid: string) => Promise<void>;
  getSvgCaptcha: (sid: string) => Promise<void>;
  doRegister: (
    params: IRegisterParams,
  ) => Promise<{
    code: number;
    msg: {
      code: Array<string>;
    };
  }>;
}

const Register = (props: IRegisterProps) => {
  // const [errorMessage, setErrorMessage] = useState({
  //   code: [],
  //   name: [],
  //   username: [],
  // });
  const {
    sid,
    svgCaptcha,
    form: { getFieldDecorator },
    getSvgCaptcha,
    doRegister,
  } = props;

  // 表格布局
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 6 },
  };

  // 表格按钮布局
  const buttonItemLayout = {
    wrapperCol: { span: 6, offset: 4 },
  };

  useEffect(() => {
    // 页面初次渲染获取验证码
    getCaptcha();
  }, []);

  // 获取验证码
  const getCaptcha = () => {
    getSvgCaptcha(sid);
  };

  // 提交注册表单
  const handleSumbit = () => {
    props.form.validateFields((err, values) => {
      // 删除表单中的 confirmPassword 字段
      delete values.confirmPassword;
      if (!err) {
        doRegister({ ...values, sid })
          .then(res => {
            if (res.code === 200) {
              message.success('注册成功!');
              // 清空表单内容
              props.form.resetFields();
              // 注册成功让用户跳转到login界面
              setTimeout(() => {
                router.push('/login');
              }, 1000);
            } else {
              console.log(res.msg);
              message.warning('注册失败');
              // let msg = Object.assign(errorMessage, res.msg);
              // setErrorMessage(msg);
            }
          })
          .catch(err => {});
      }
    });
  };

  /**
   * 校验两次输入的密码
   * @param rule
   * @param val
   * @param callback
   */
  const handleConfirmPasswordValidator = (rule: any, val: string, callback: Function) => {
    if (!val) {
      callback();
    }
    let validateResult = props.form.getFieldValue('password') === val; // 自定义规则
    if (!validateResult) {
      callback('两次输入的密码不一致');
    }
    callback();
  };

  return (
    <div>
      <SwitchTab />
      <Form {...formItemLayout}>
        <FormItem label="邮箱">
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入正确的邮箱格式' },
            ],
          })(<Input placeholder="请输入邮箱" />)}
        </FormItem>
        <FormItem label="昵称">
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: '请输入昵称' },
              { min: 3, message: '昵称的长度不小于3个字符' },
            ],
          })(<Input placeholder="请输入邮箱" />)}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码' },
              { min: 6, message: '密码的长度不小于6个字符' },
            ],
          })(<Input type="password" placeholder="请输入密码" />)}
        </FormItem>
        <FormItem label="确认密码">
          {getFieldDecorator('confirmPassword', {
            rules: [
              { required: true, message: '请输入密码' },
              { validator: handleConfirmPasswordValidator },
            ],
          })(<Input type="password" placeholder="请输入密码" />)}
        </FormItem>
        <FormItem label="验证码">
          {getFieldDecorator('code', {
            rules: [{ required: true, message: '请输入验证码' }],
          })(<Input placeholder="请输入验证码" />)}
          <span onClick={getCaptcha} dangerouslySetInnerHTML={{ __html: svgCaptcha }} />
        </FormItem>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" onClick={handleSumbit}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const WrappedRegister = Form.create()(Register);

const mapStateToProps = ({ global, register }: ConnectState) => {
  const { sid } = global;
  const { svgCaptcha } = register;

  return { sid, svgCaptcha };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // setSid: (sid: string) => dispatch({ type: 'global/setSid', payload: sid }),
    getSvgCaptcha: (sid: string) => dispatch({ type: 'register/querySvgCaptcha', payload: sid }),
    doRegister: (params: IRegisterParams) =>
      dispatch({ type: 'register/createRegister', payload: params }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegister);
