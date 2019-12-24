const routes = [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/login',
      },
      {
        path: '/login',
        name: 'login',
        component: './Login/Login',
      },
      {
        path: '/register',
        name: 'register',
        component: './Register/Register',
      },
      {
        path: '/forget',
        component: './Forget/Forget',
      },
    ],
  },
];

export default routes;
