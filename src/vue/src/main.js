import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let instance = null;

function render() {
  instance = new Vue({
    render: h => h(App),
  }).$mount('#app')
}

render();

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  // storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}