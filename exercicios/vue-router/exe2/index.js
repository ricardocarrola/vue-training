// router/index.js
const routes = [
    {
        path: '/shop',
        component: () => import('../views/Shop.vue'),
        children: [
            // Completar rotas aninhadas
        ]
    }
]