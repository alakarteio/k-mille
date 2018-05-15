export const add = ((action, store, { http }) => {
  const taxe = Number.parseFloat(store.ui.taxe.get(), 10)

  http('EXPENSES')
    .post(
      '/api/expenses',
      {
        client: 'CLIENT',
        price: store.ui.price.get(),
        taxe: Number.isNaN(taxe) ? '' : taxe,
        fileId: store.data.fileId.get(),
        user: store.data.profile.get().name,
        forWhom: store.ui.forWhom.get(),
        needRefund: true,
      },
      { credentials: 'include' },
    )
})

export const init = (action, store) => {
  store.ui.price.set(store.data.prices.get()[0])
  store.ui.forWhom.set('alakarte')
}

export const setPrice = (({ payload }, store) => store.ui.price.set(payload))

export const setTaxe = (({ payload }, store) => store.ui.taxe.set(payload))

export const setForWhom = (({ payload }, store) => store.ui.forWhom.set(payload))

export const response = ((action, store) => store.ui.response.set('price adding 👏'))

export const error = (({ payload }, store) => {
  store.ui.response.set('an error occured 🤮')
  console.warn('error when adding price: ', payload)
})
