import { createRouter, createWebHistory } from 'vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: HomeView,
		},
	],
})

export default router
