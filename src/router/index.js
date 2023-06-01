import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue'),
    children: [
      {
        path: 'profile',
        name: 'ProfileSection',
        component: () => import('../views/account/ProfileSection.vue'),
      },
      {
        path: 'edit-profile',
        name: 'EditProfile',
        component: () => import('../views/account/EditProfile.vue'),
      },
      {
        path: 'add-song',
        name: 'AddSong',
        component: () => import('../views/account/AddSong.vue'),
      },
      {
        path: 'delete-song',
        name: 'DeleteSong',
        component: () => import('../views/account/DeleteSong.vue'),
      },
      {
        path: 'add-youtube-video',
        name: 'AddYoutubeVideo',
        component: () => import('../views/account/AddYoutubeVideo.vue'),
      },
      {
        path: 'delete-youtube-video',
        name: 'DeleteYoutubeVideo',
        component: () => import('../views/account/DeleteYoutubeVideo.vue'),
      },
      {
        path: 'create-post',
        name: 'CreatePost',
        component: () => import('../views/account/CreatePost.vue'),
      },
      {
        path: 'edit-post',
        name: 'EditPost',
        component: () => import('../views/account/EditPost.vue'),
      },
      {
        path: 'posts',
        name: 'PostsSection',
        component: () => import('../views/account/PostsSection.vue'),
      },
      {
        path: 'post-by-id',
        name: 'PostById',
        component: () => import('../views/account/PostById.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


// {
//   path: '/about',
//   name: 'about',
//   route level code-splitting
//   this generates a separate chunk (about.[hash].js) for this route
//   which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// }