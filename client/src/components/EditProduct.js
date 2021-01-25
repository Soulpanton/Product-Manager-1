import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { navigate } from '@reach/router';

function EditProduct(props) {
    const [productDetails, setProductDetails] = useState({
        // have the use state to expect the following initial main keys 
        title: "",
        price: "",
        description: ""
    })

    const [errors, setErrors] = useState({})

    // to make an api call on loading of the page
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.productId}`)
            .then(response => {
                console.log("RESPONSE FROM THE API CALL", response)
                setProductDetails(response.data.results)
            })
        // don't forget to add the brackets if not its going to send non stop api calls
    }, [])

    const changeHandler = e => {
        console.log("oooohhhhhhhhhh you trying to edit something on ", e.target.name)
        setProductDetails({
            ...productDetails,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log("TRYING TO SUBMIT SOME INFO I SEE!!!")
        // remember to add the variable where the info is store inState after the put request
        Axios.put(`http://localhost:8000/api/products/update/${props.productId}`, productDetails)
            .then(response => {
                console.log("Just updated the info on the for its right here:", response)
                if (response.data.results) {
                    navigate("/")
                }
                else {
                    setErrors(response.data.errors)

                }
            })
            .catch(err => console.log("err on trying to update info", err))
    }


    return (
        <div>
            <h3>Edit a Product</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" id="" value={productDetails.title} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="">Price $</label>
                    <input type="number" step="0.01" name="price" id="" value={productDetails.price.$numberDecimal} onChange={changeHandler} />

                </div>

                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" id="" value={productDetails.description} onChange={changeHandler} />
                </div>
                <input type="submit" value="Edit This Product" />
            </form>
        </div>
    );
}


export default EditProduct;