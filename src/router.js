import Vue from 'vue';
import VueRouter from 'vue-router';

import { store } from './store/store';

Vue.use(VueRouter);

import About from './views/About.vue';
import Contact from './views/Contact.vue';
import ProjectPage from './views/ProjectPage.vue';
import ProjectDetail from './components/project/ProjectDetail.vue';
import FeatureDetail from './components/feature/FeatureDetail.vue';
import MyProfile from './views/MyProfile.vue';
import SigninForm from './components/auth/SigninForm.vue';
import SignupForm from './components/auth/SignupForm.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/', component: About },
  { path: '/about', component: About, children: [] },
  { path: '/contact', component: Contact },
  { 
    path: '/projects', 
    component: ProjectPage, 
    children: [ 
      { 
        path: ':projectId', 
        component: ProjectDetail, 
        props: true,
      },
      { 
        path: '/feature/:featureId', 
        component: FeatureDetail, 
        props: true 
      } 
    ] 
  },
  { 
    path: '/my-profile', 
    component: MyProfile,
    beforeEnter(to, from, next) {
      console.log('Pytiq', store.state);
      if(store.state.authToken) {
        next();
      } else {
        next('/signin');
      }
      
    }
  },
  { path: '/signin', component: SigninForm },
  { path: '/signup', component: SignupForm },
  { path: '/:notFound(.*)', component: NotFound }
];

export const router = new VueRouter({
  mode: 'history',
  routes
});