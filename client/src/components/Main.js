import React, { useEffect, useState } from 'react';
import Axios from "axios"


const Main = () => {
    const [allproducts, setallproducts] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products/")
            .then(response => {
                console.log("*******************", response)
                setallproducts(response.data.results)
            })
            .catch(err => console.log(err))
    }, [])
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
                        allproducts.map((product, i) => {
                            return <tr key={i}>
                                <td>{product.title}</td>
                                <td>{product.price.$numberDecimal}</td>
                                <td>{product.description}</td>
                                <td>Place holder</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};



export default Main;