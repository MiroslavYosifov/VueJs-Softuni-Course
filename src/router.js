import { createRouter, createWebHistory } from 'vue-router';

import About from './views/About.vue';
import Contact from './views/Contact.vue';
import ProjectsList from './views/ProjectsList.vue';
import ProjectDetail from './views/ProjectDetail.vue';
import MyProfile from './views/MyProfile.vue';
import NotFound from './views/NotFound.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: About },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/projects', component: ProjectsList },
    { path: '/projects/:projectId', component: ProjectDetail, props: true },
    { path: '/my-profile', component: MyProfile },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;