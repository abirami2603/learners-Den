import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import YearPage from './pages/YearPage.vue';

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/year/:year', component: YearPage },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create the Vue app and mount it
const app = createApp(App);
app.use(router);
app.mount('#app');
document.querySelector('body').style.overflowY = 'scroll';
