import {createRouter, createWebHashHistory} from 'vue-router';

import MainPage from './pages/MainPage.vue'
import ProjectDoc from './pages/ProjectDoc.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/', 
			name:'mainPage', 
			component: MainPage
		},
		{
			path: '/projectDoc/:projectId', 
			name: 'projectDoc',
			component: ProjectDoc
		}
	]
})

export default router;