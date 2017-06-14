import React from 'react'


export default class ProductCard extends React.Component {
 constructor(props) {
  super(props)
 }
 render() {
     let features = this.props.product.features.map(function(feature) {
         return <li>{feature}</li>
     });
     let rating = this.props.product.rating * 25
     console.log(rating)
     var ratingStyle = {
       rating: rating+'%'
      };
     return(
         <div class="product-card">
             <div class="product-name">{this.props.product.itemTitle}</div>
             <div class="product-image"><img src={this.props.product.itemImage}/></div>
             
            <div class="product-info">
            <div class="rating star-ratings-css">
            <div class="star-ratings-css-top" style={{width: ratingStyle.rating}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
             <div class="amount">
             <div><hr/></div>
              <div class="price">Rs. {this.props.product.price}</div>
              <div class="emiPrice">EMI from Rs {this.props.product.emiPrice}</div>
              <div><hr/></div>
             </div>

             <ul class="features">
                 {features}
             </ul>
             </div>


         </div>
     )
 }
}