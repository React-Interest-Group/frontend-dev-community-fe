const routes = [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: '../pages/index',
      },
      {
        path: '/login',
        component: './Login/Login',
      },
      {
        path: '/register',
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
