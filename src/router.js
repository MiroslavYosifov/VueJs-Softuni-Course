import { createRouter, createWebHistory } from 'vue-router';

import About from './views/About.vue';
import Contact from './views/Contact.vue';
import ProjectPage from './views/ProjectPage.vue';
import ProjectDetail from './components/project/ProjectDetail.vue';
import MyProfile from './views/MyProfile.vue';
import NotFound from './views/NotFound.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
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
          props: true 
        } 
      ] 
    },
    { 
      path: '/my-profile', 
      component: MyProfile,
      beforeEnter(to, from, next) {
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, from, next) {
  console.log(to, from);
  next(); //accept path
  //next(false); //decline path
})

// router.afterEach(function(to, from, next) {
//   // sending analytics data
// })

export default router;