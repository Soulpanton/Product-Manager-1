import React, { useEffect, useState } from 'react';
// use Axios to call on the api instead of using postman
import Axios from "axios";
import { Link } from "@reach/router";


const Main = () => {
    // useState is an array here cause the response is an array of product objects
    const [allproducts, setallproducts] = useState([])

    const [deleteClicked, setDeleteClicked] = useState(false)

    useEffect(() => {
        // making a call to this route
        Axios.get("http://localhost:8000/api/products/")
            .then(response => {
                // console the response here
                console.log("*******************", response)
                // setting response to allproducts with setallproducts
                setallproducts(response.data.results)
            })
            .catch(err => console.log(err))
    }, [deleteClicked])

    const deleteClickHandler = (e, productId) => {
        console.log("deleting product from list number:", productId)
        Axios.delete(`http://localhost:8000/api/products/destroy/${productId}`)
            .then(response => {
                console.log("just deleted item number", productId)
                setDeleteClicked(!deleteClicked)

            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <table className="table table-danger col-8 mx-auto">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // looping through the array from the response set on allproducts
                        // for each object named player and index
                        allproducts.map((product, i) => {
                            return <tr key={i}>
                                <td>{product.title}</td>
                                <td>{product.price.$numberDecimal}</td>
                                <td>{product.description}</td>
                                {/* this link sends us to that route with the _id from the models */}
                                {/* going to App.js and finding a matching route on the <Router> */}
                                <td>
                                    <Link className="btn btn-info m-1" to={`/products/${product._id}`}>View Product</Link>
                                    <Link className="btn btn-info m-1" to={`/products/edit/${product._id}`}>Edit Product</Link>
                                    <button className="btn btn-info m-1" onClick={(e) => deleteClickHandler(e, product._id)}>Delete Product</button>

                                </td>


                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};



export default Main;