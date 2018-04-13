export const add = ((action, store, { http }) => {
  http('EXPENSES')
    .post(
      '/api/expenses',
      {
        client: 'CLIENT',
        price: store.ui.price.get(),
        fileId: store.data.fileId.get(),
        user: store.data.profile.get().name,
        needRefund: true,
      },
      { credentials: 'include' },
    )
})

export const setPrice = (({ payload }, store) => {
  store.ui.price.set(payload)
})

export const response = ((action, store) => {
  store.ui.response.set('price adding 👏')
})

export const error = (({ payload }, store) => {
  store.ui.response.set('an error occured 🤮')
  console.warn('error when adding price: ', payload)
})
