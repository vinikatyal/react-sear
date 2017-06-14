import React from 'react'
import _ from 'underscore'
//----------------------------import components
import ProductCard from './ProductCard.jsx'
import ProductSearchFilter from './ProductSearchFilter.jsx'

export default class ProductMain extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        products: props.products
    }
}
formProductData(products) {
    let productsHtml = products.map((prod) => {
        return <ProductCard product={prod}/>
    })

    return productsHtml
}
searchFilterFn(filterValue, searchText) {
    let _this = this
    let propsProducts = this.props.products
    let searchOrNot = false
    if(searchText) {
       searchOrNot = true
    } else {
        // _this.setState({
        //     products: this.props.products
        // }, function(){
        //     _this.forceUpdate()
        // })
    }
    
    let filterBy = {
        'relevance': function () {
            if(searchOrNot) {
                propsProducts = _this.filterIt(propsProducts,searchText)
            }
            _this.setState({
                products: propsProducts
            }, function(){
                _this.forceUpdate()
            })
        },
        'popular': function () {
            //According to ratings:
            let sortedProductsinState = _this.state.products
            if(searchOrNot) {
                sortedProductsinState = _this.filterIt(sortedProductsinState,searchText)
            }
            sortedProductsinState = _.sortBy(sortedProductsinState, function(prod){
                return prod.rating * -1;
            }); 


             _this.setState({
                products: sortedProductsinState
            }, function(){
                _this.forceUpdate()
            })
        },
        'low-price': function () {
            //Ascending Order:
             let sortedProductsinState = _this.state.products
            if(searchOrNot) {
                sortedProductsinState = _this.filterIt(sortedProductsinState,searchText)
            }
            sortedProductsinState = _.sortBy(sortedProductsinState, function(prod){
                return prod.price;
            }); 


             _this.setState({
                products: sortedProductsinState
            }, function(){
                _this.forceUpdate()
            })
        },
        'high-price': function () {
            //Descending Order:
            let sortedProductsinState = _this.state.products
            if(searchOrNot) {
                sortedProductsinState = _this.filterIt(sortedProductsinState,searchText)
            }
            sortedProductsinState = _(sortedProductsinState).sortBy(function (prod) {
                return prod.price * -1;
            });

            _this.setState({
                products: sortedProductsinState
            }, function(){
                _this.forceUpdate()
            })

        },
        'default': function () {
            if(searchOrNot) {
                propsProducts = _this.filterIt(propsProducts,searchText)
            }
            _this.setState({
                products: propsProducts
            }, function(){
                _this.forceUpdate()
            })
        }
    }

     if(filterBy[filterValue]) {
         filterBy[filterValue]()
     } else {
         //filterBy['default']
     }
}
filterIt(arr, searchKey) {
let results = []
for(var i=0; i<arr.length; i++) {
  for(let key in arr[i]) {
     let val = arr[i][key].toString()

    if(val.indexOf(searchKey)!=-1) {
      results.push(arr[i]);
    }
  }
}
return results
}
render() {
    
    if (this.state.products && this.state.products.length > 0) {
        return (
            <div>
                <ProductSearchFilter
                    products={this.state.products}
                    searchFilterFn={this.searchFilterFn.bind(this)}/>

                <div class="product-list">
                    {this.formProductData(this.state.products)}
                </div>
            </div>
        )
    } else {

        return (
            <div>
                <ProductSearchFilter/>
                Loading ......
            </div>
        )
    }
}
}