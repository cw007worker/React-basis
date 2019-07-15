import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            < div className="item" >
                <div className="image">
                    <img src='images/products/321FItness.jpg' />
                </div>
                <div>
                    <div>
                        <h3>The current Commotion</h3>
                    </div>
                    <div>
                        <span>This is subscription</span>

                    </div>
                </div>
            </div >
        )
    }
}

export default Product;
