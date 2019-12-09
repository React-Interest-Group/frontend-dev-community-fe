const routes = [
  {
    path: '/',
    component: '../layouts/index',
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
