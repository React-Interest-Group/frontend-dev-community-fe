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
        beforeEnter: (to: any, from: any, next: any) => {
          if (from.name === 'login') {
            next();
          } else {
            next('/login');
          }
        },
      },
      {
        path: '/forget',
        component: './Forget/Forget',
      },
    ],
  },
];

export default routes;
