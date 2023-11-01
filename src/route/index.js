import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import TestEntryCard from '../views/TestEntryCard.vue'

const router = createRouter({
  history: createWebHashHistory(
    import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'TestEntryCard',
    component: TestEntryCard
  }]
})

export default router