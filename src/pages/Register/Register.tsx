import React from 'react';

const Register: React.SFC = () => {
  return <div>注册</div>;
};

// import React, { useState, useEffect } from 'react';
// import { connect } from 'dva';
// import { Dispatch } from 'redux';
// import { Form, Input, Button } from 'antd';
// import { FormComponentProps } from 'antd/es/form';
// import uuid from 'uuid/v4';
// import { ConnectState } from '@/models/connect';

// const FormItem = Form.Item;

// interface ILoginProps extends FormComponentProps {
//   sid: string;
//   svgCaptcha: string;
//   setSid: (sid: string) => Promise<void>;
//   getSvgCaptcha: (sid: string) => Promise<void>;
// }

// const Login = (props: ILoginProps) => {
//   const {
//     sid,
//     svgCaptcha,
//     form: { getFieldDecorator },
//     setSid,
//     getSvgCaptcha,
//   } = props;

//   useEffect(() => {
//     getCaptcha();
//   }, []);

//   // 获取验证码
//   const getCaptcha = () => {
//     let newSid = sid;
//     if (!newSid) {
//       newSid = uuid();
//       setSid(newSid);
//     }

//     getSvgCaptcha(newSid);
//   };

//   const handleSumbit = () => {
//     props.form.validateFields((err, values) => {
//       console.log('err:', err);
//       console.log('values:', values);
//     });
//   };

//   return (
//     <div>
//       <Form>
//         <FormItem label="邮箱">
//           {getFieldDecorator('email', {
//             rules: [{ required: true, message: '请输入邮箱' }],
//           })(<Input placeholder="请输入邮箱" />)}
//         </FormItem>
//         <FormItem label="密码">
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: '请输入密码' }],
//           })(<Input placeholder="请输入密码" />)}
//         </FormItem>
//         <FormItem label="验证码">
//           {getFieldDecorator('email', {
//             rules: [{ required: true, message: '请输入验证码' }],
//           })(<Input placeholder="请输入验证码" />)}
//         </FormItem>
//         <span dangerouslySetInnerHTML={{ __html: svgCaptcha }} />
//         <div>
//           <Button type="primary" onClick={handleSumbit}>
//             立即登录
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// const WrappedLogin = Form.create()(Login);

// const mapStateToProps = ({ global, login }: ConnectState) => {
//   const { sid } = global;
//   const { svgCaptcha } = login;

//   return { sid, svgCaptcha };
// };

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     setSid: (sid: string) => dispatch({ type: 'global/setSid', payload: sid }),
//     getSvgCaptcha: (sid: string) => dispatch({ type: 'login/querySvgCaptcha', payload: sid }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(WrappedLogin);

export default Register;
