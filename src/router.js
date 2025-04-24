import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router';

import Home from '@/page/PageHome/AppHome.vue';
import Blog from '@/page/PageBlog/AppBlog.vue';
import Post from '@/page/PagePost/AppPagePost.vue';
import About from '@/page/PageAbout/AppPageAbout.vue';
import Business from '@/page/PageBusiness/AppPageBusiness.vue';
import Author from '@/page/PageAuthor/AppPageAuthor.vue';
import Contact from '@/page/PageContact/AppPageContact.vue';
import Policy from '@/page/PagePolicy/AppPagePolicy.vue';



const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/policy',
      name: 'Policy',
      component: Policy
    }
  ];
  
  const router = createRouter({
    // history: createMemoryHistory(),
    history: createWebHashHistory(),
    routes
  });
  
  export default router;
