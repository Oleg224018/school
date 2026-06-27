import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import EducationPage from '../pages/EducationPage.vue'
import ParentingPage from '../pages/ParentingPage.vue'
import NewsPage from '../pages/NewsPage.vue'
import ParentsPage from '../pages/ParentsPage.vue'
import ContactsPage from '../pages/ContactsPage.vue'
import AdmissionPage from '../pages/AdmissionPage.vue'
import HistoryPage from '../pages/HistoryPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/education', component: EducationPage },
  { path: '/parenting', component: ParentingPage },
  { path: '/news', component: NewsPage },
  { path: '/parents', component: ParentsPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/admission', component: AdmissionPage },
  { path: '/history', component: HistoryPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
