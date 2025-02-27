import Vue from 'vue';
import Router from 'vue-router';
import YearPage from '@/components/YearPage.vue'; // Assuming this is the dynamic page component


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/year/:year',  // Dynamic route with the year parameter
      name: 'year',
      component: YearPage,  // Component that will render the dynamic page
    },
  ]
});
