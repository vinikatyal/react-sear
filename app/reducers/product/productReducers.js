export default function products(state = {
  fetching: false,
  fetched: true,
  products: {
  }
}, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return Object.assign({}, state, { fetching: true })
    case 'FETCH_PRODUCTS_REJECTED':
      return Object.assign({}, state, { fetching: false, error: action.payload })
    case 'FETCH_PRODUCTS_FULFILLED':
      return Object.assign({},
        state, {
          fetching: false,
          fetched: true,
          products: action.payload,
        }
      )
    default:
      new Error('No action type matched in getProducts reducer')
  }

  return state
}