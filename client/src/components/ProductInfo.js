// {useEffect} to render as soon as the api call is make
// useState  to create a variable to store info that could change
import React, { useEffect, useState } from 'react';
// to make api calls
import Axios from 'axios';

// passing the info from the route with props grants us access to that info
const ProductInfo = (props) => {
    console.log("LOGGING PROPS FROM PRODUCT INFO COMPONENTS!!!", props)
    // set useState to an object initially cause were going to get a product object from response
    const [productDetails, setProductDetails] = useState({
        // have the use state to expect the following initial main keys 
        title: "",
        price: "",
        description: ""
    })

    // 2 parts for useEffect
    // 1 the call back function then a comma
    //  then an array that runs the function when loading the page
    useEffect(() => {
        // api call with get + the id
        Axios.get(`http://localhost:8000/api/products/${props.productId}`)
            .then(response => {
                console.log("got back the response from api to find the product", response)
                // setting the info from the api into productDetails using setProductDetails
                setProductDetails(response.data.results)
            })
            .catch(err => console.log("ERROOOORRRRRRRRRR", err))
    }, [])
    return (

        <div>
            <h3>Heres the info about that product</h3>
            {/* info passed through pros */}
            <p>Player Id: {props.productId}</p>
            {/* cause we set state to productDetails we can access that info and show it  */}
            <p>Product Title: {productDetails.title}</p>
            <p>Product Price: {productDetails.price.$numberDecimal}</p>
            <p>Product Description: {productDetails.description}</p>
        </div>
    );
};


export default ProductInfo;