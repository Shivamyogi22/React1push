import { useState } from 'react';
import './ProductForm'

function ProductForm(props){

 

    const [newTitle, setTitle]= useState('');
    const [ newDate, setDate]= useState('');

    function titleChangeHandler(event){
        // console.log("Title Change karoge");
        console.log(event.target.value);
        // jse ji  ye use krenge vo apne ko console m uss event is related targeted values dega
        setTitle(event.target.value);

    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

//  yaha pr hum event pass kremge jo ki default action ko rokega then hum Usko console pr udpate krenge jo bhi apne hook funciton se likha hoga , then hum usko map krenge value k sth so that usko hum Ui pr update kr de
    function submitHandler(event){
        event.preventDefault();

        const ProductData ={
            title:newTitle,
            date:newDate
        };

        // console.log(ProductData);

        props.onSaveProduct(ProductData);
        
        setTitle('');
        setDate('');

    }

    return(
        <form onSubmit={submitHandler} >
            <div className='new-product_title'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler} ></input>  
                {/* Yaha pr jo onclick h vo input pr dhyan rkhega */}
            </div>
            <div className='new-product_date' >
                <label>Date</label>
                <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className='new-product_button' >
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}
export default ProductForm;