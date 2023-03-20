import { RouteRecordRaw } from "vue-router";

const Plyr = () => import('@/views/plyr-page/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/samples',
    children: [
      {
        path: '',
        component: Plyr,
        meta: {
          title: 'Plyr示例'
        }
      }
    ]
  }
]

export default routes