import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../../actions/product/productActions.js'
import ProductMain from '../../components/product/ProductMain.jsx'

class ProductContainer extends React.Component {
 constructor(props) {
  super(props)
  this.props.getProductsList()
 }
 render() {
     if(this.props.products && this.props.products.length > 0) {
       
     return(
         <div>
             <ProductMain products={this.props.products}/>
         </div>
     )
     } else {

     return(
         <div>
             Loading...........
         </div>
     )
     }
 }
}


const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductsList : () => {
            dispatch(getProducts());
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer)