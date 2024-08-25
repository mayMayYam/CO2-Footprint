import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AktuelleProjekteView from '../views/AktuelleProjekteView.vue'
import OrKSUeberUnsView from '../views/OrKSUeberUnsView.vue'
import PartnerView from '../views/PartnerView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import DatenschutzView from '../views/DatenschutzView.vue'
import KontaktView from '../views/KontaktView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aktuelleProjekte',
    name: 'aktuelleProjekte',
    component: AktuelleProjekteView
  },
  {
    path: '/partner',
    name: 'partner',
    component: PartnerView
  },
  {
    path: '/orKSUeberUns',
    name: 'orKSUeberUns',
    component: OrKSUeberUnsView
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: DatenschutzView
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: KontaktView
  },
  {
    path: "/components/homePage",
    name: "HomePage",
    component: () => import("@/components/HomePage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash};
      
    }
    else {return { x: 0, y: 0 };
  }
  }
})

export default router
