import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  // {
  //   name: 'react app', // app name registered
  //   entry: '//localhost:7100',
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
  {
    name: 'vueapp',
    entry: '//localhost:8098',
    container: '#vueContainer',
    activeRule: '/',
  },
]);
start();