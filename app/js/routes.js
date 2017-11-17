import Index from '@/js/routes/Index.vue'
import New from '@/js/routes/New.vue'
import Edit from '@/js/routes/Edit.vue'

export default [
  { path: '/', component: Index },
  { path: '/new', component: New },
  { path: '/:noteId', name: 'edit', component: Edit },
]
