const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    hildren: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'popis', component: () => import('pages/PopisKnjigaPage.vue') },
    ]

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
