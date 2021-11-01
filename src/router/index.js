import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Surah from '../views/surahSingle/Surah.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/surah/:id',
		name: 'Surah',
		component: Surah
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
