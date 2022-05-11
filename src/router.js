import { createRouter, createWebHashHistory } from 'vue-router';

// views
import HomeView from './views/HomeView.vue';
import RoomsView from './views/RoomsView.vue';
import PublicRooms from './views/PublicRooms.vue';
import DirectRooms from './views/DirectRooms.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/rooms',
    component: RoomsView,
    children: [
      {
        path: 'public',
        component: PublicRooms,
      },
      {
        path: 'direct',
        component: DirectRooms,
      },
      {
        path: '',
        redirect: '/rooms/public',
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
