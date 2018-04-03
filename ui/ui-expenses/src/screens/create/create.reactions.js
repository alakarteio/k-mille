export const send = ((action, store, { http }) => {
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
  store.ui.create.selectedPrice.set(payload)
})

export const response = ((action) => {
  console.log(action)
})

export const toggleInput = ((action, store) => {
  store.ui.create.showInput.set(!store.ui.create.showInput.get())
})
