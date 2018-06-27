import Index from '@/routes/Index.vue'
import New from '@/routes/New.vue'
import Edit from '@/routes/Edit.vue'

export default [
  { path: '/', component: Index },
  { path: '/new', component: New },
  { path: '/:noteId', name: 'edit', component: Edit },
]
