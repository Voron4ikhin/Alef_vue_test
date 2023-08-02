import { createRouter, createWebHistory } from "vue-router";
import UserPreview from '/src/components/UserPreview.vue'
import UserEdit from '/src/components/UserEdit.vue'

const routes = [
   {
        path: '/',
        name: 'Preview',
        component: UserPreview,
   },
   {
    path: '/edit',
    name: 'Editing',
    component: UserEdit,
},
]

const router = createRouter({
    history: createWebHistory(),

    routes,
})

export default router