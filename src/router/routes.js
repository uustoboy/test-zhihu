
import AppIndex from '@/components/AppIndex'
import DetailsPage from '@/components/DetailsPage'
import ReviewDetails from '@/components/ReviewDetails'
import ThemesIndex from '@/components/ThemesIndex'
import IndexList from '@/components/IndexList'

export default [
  {
    path: '/',
    redirect: 'IndexList',
    name: 'AppIndex',
    component: AppIndex,
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '/IndexList',
        name: 'IndexList',
        component: IndexList
      },
      {
        path: '/ThemesIndex/:id',
        name: 'ThemesIndex',
        component: ThemesIndex
      }
    ]
    // redirect: '/IndexList'
  },
  {
    path: '/DetailsPage/:id',
    name: 'DetailsPage',
    component: DetailsPage
  },
  {
    path: '/ReviewDetails/',
    name: 'ReviewDetails',
    component: ReviewDetails
  }
]
