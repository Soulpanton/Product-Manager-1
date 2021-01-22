import React, {useState} from 'react';
import Axios from "axios";
import {navigate} from "@reach/router"


const NewProcuct = () => {
    const [productInfo, setProductInfo] = useState({
        title:"",
        price:0,
        description:""
    })

    const changHandler = (e) =>{
        console.log("Changes detected on", e.target.name)
        setProductInfo({
            ...productInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = e =>{
        e.preventDefault();
        console.log("Submitting info from form")
        console.log(productInfo)
        Axios.post("http://localhost:8000/api/products/create", productInfo)
            .then(res=>{
                console.log("Response after submitting the axios post request:", res)
                if(res.data.results){
                    navigate("/")
                }
                else{
                    console.log("Form must be filled correctly")
                }
            })
            .catch(err => console.log("errors that came from posting",err))
        

    }





    return (
        <div>
            <form onSubmit= {submitHandler}>
                <div>
                <label htmlFor="">Title</label>
                <input type="text" name="title" onChange= {changHandler} id=""/>
                </div>

                <div>
                <label htmlFor="">Price $</label>
                <input type="number" step="0.01" name="price" onChange= {changHandler} id=""/>
                </div>

                <div>
                <label htmlFor="">Description</label>
                <input type="text" name="description" onChange= {changHandler} id=""/>
                </div>
                <input type="submit" value="Add Product"/>
                
            </form>
        </div>
    );
};


export default NewProcuct;