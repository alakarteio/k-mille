export const add = ((action, store, { http }) => {
  const taxe = Number.parseFloat(store.ui.taxe.get(), 10)

  http('EXPENSES')
    .post(
      '/api/expenses',
      {
        date: Date.now(),
        client: 'CLIENT',
        price: store.ui.price.get(),
        taxe: Number.isNaN(taxe) ? '' : taxe,
        fileId: store.data.fileId.get(),
        user: store.data.profile.get().name,
        context: store.ui.context.get().trim(),
        needRefund: store.ui.needRefund.get(),
      },
      { credentials: 'include' },
    )
})

export const cancel = ((action, store, { http }) => {
  http('IMAGES')
    .delete(
      `/api/images/${store.data.fileId.get()}`,
      {},
      { credentials: 'include' },
    )
})

export const goBack = (action, store, { router }) => router.goBack()

export const init = (action, store) => {
  store.ui.price.set(store.data.prices.get()[0])
  store.ui.context.set('alakarte')
  store.ui.taxe.set(0.2)
}

export const setPrice = (({ payload }, store) => store.ui.price.set(payload))

export const setTaxe = (({ payload }, store) => store.ui.taxe.set(payload))

export const setContext = (({ payload }, store) => store.ui.context.set(payload))

export const setNeedRefund = (({ payload }, store) => store.ui.needRefund.set(payload))

export const success = ((action, store, { notification }) => notification.success('expense added 👏'))

export const error = ((action, store, { notification }) => {
  notification.error('🤮 error ocured when trying to add the expense ')
})
