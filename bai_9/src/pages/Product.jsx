import React from 'react'
import data from "../data.json"
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from 'antd';

const user = null;

const Product = () => {
    const [searchParams , setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    const onBuy = () =>{
        if(!user){
            navigate("/login");
            return;
        }
        alert("cam on")
    }

  return (
    <div>
        <button onClick={() => setSearchParams({sort:"gia cao den thap"})}>
            Gia cao den thap
        </button>
        <button onClick={() => setSearchParams({sort:"gia thap den cao"})}>
            Gia thap den cao
        </button>
        <br />
        <div className='product-image'>
            {data.map((item) => (
                <div>
                    <Link to={`/product/${item.id}`}>
                        <img src={item.image} key={item.id}/>
                    </Link>
                    <br />
                    <Button onClick={onBuy}>By Now</Button>
                </div>
        ))}
        </div>
        
    </div>
  )
}

export default Product