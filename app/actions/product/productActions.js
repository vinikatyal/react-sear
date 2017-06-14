import {getProductsRepo} from '../../repositories/product'


export const getProducts = () => {
    return function (dispatch, getState) {
        dispatch({type: "FETCH_PRODUCTS"});

        getProductsRepo().then(function (response) {
            dispatch({type: "FETCH_PRODUCTS_FULFILLED", payload: response.data.products});
          })
            .catch(function (err) {
                dispatch({type: "FETCH_PRODUCTS_REJECTED", payload: err});
            })
    }
}

export const filterProducts = (params) => {
  return function(dispatch, getState) {
    dispatch({ type: "FILTER_PRODUCTS", payload: params });
  }

}