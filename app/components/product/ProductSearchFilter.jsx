import React from 'react'

export default class ProductSearchFilter extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        filterValue: "relevance",
        searchText: ""
    }
     this.updateSearchString = this.updateSearchString.bind(this);
     this.searchEnter = this.searchEnter.bind(this);
}
handleOnClick(e) {
    let filterValue = e.target.value;
    let searchText = document
        .getElementById("text-search")
        .value

    this.setState({
        filterValue: filterValue,
        searchText: searchText
    }, function () {
        this.props.searchFilterFn(filterValue, searchText)
    })

}
updateSearchString(e) {
    this.setState({searchText: e.target.value});
}
search() {
    this.props.searchFilterFn(this.state.filterValue, this.state.searchText)
}

searchEnter(e) {
    if (e.key === 'Enter') {
        this.search();
    }
}

render() {
    return (
        <div>
            <div class="product-search">
                <input type="text" id="text-search"
                onKeyUp={this.searchEnter}  onChange={this.updateSearchString}/>
            </div>
            <hr/>
            <div class="product-filter">
                <span>
                    <input
                        type="radio"
                        name="filter"
                        id="chk-rele"
                        value="relevance"
                        onClick={(e) => this.handleOnClick(e)}/>
                    Relevance</span>
                <span>
                    <input
                        type="radio"
                        name="filter"
                        id="chk-pop"
                        value="popular"
                        onClick={(e) => this.handleOnClick(e)}/>
                    Popular</span>
                <span>
                    <input
                        type="radio"
                        name="filter"
                        id="chk-low-price"
                        value="low-price"
                        onClick={(e) => this.handleOnClick(e)}/>
                    Low Price</span>
                <span>
                    <input
                        type="radio"
                        name="filter"
                        id="chk-high-price"
                        value="high-price"
                        onClick={(e) => this.handleOnClick(e)}/>
                    High Price</span>
                {/*<span> <input type="radio" name="filter"  id="chk-new" value="new" onClick={ (e) => this.handleOnClick(e) }/> New</span>*/}
            </div>
        </div>
    )
}
}