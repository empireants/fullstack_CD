import React, { useState } from 'react'
import axios from 'axios';
export default (product) => {
    //keep track of what is being typed via useState hook
    const [titleProduct, settitleProduct] = useState(""); 
    const [priceProduct, setpriceProduct] = useState("");
    const [descriptionProduct, setdescriptionProduct] = useState("")
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            titleProduct,
            priceProduct,
            descriptionProduct
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Product Manager</h2>

            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>settitleProduct(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setpriceProduct(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setdescriptionProduct(e.target.value)}/>
            </p>

            <input type="submit"/>
        </form>
    )
}