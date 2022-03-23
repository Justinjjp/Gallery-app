import React from 'react';
import Rating from '../components/Rating';
// import data from '../data';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function ProductScreen(props) {

  const params = useParams();
  const { id: product } = params;
  if (!product) {
    return <div> Product not found </div>
  }
  return (
    <div>
    <Link to='/'>Back to Home</Link>
    <div className='row top'>
    <div className='col-2'>
    <img className='large' src={product.image} alt={product.name} />
    </div>
    <div className='col-1'>
    <ul>
    <li>
    <h1>{product.name} </h1>
    </li>
    <li>
    <Rating 
    rating = {product.rating}
    numReviews = {product.numReviews}>
    </Rating>
    </li>
    <li>Price :<i className="fa fa-inr">{product.price} </i></li>
    <li>Description
    <p>{product.description}</p>
    </li>
    
    </ul>
    
    </div>
    <div className='col-1'>
    <div className='card cardBody'>
      <ul>
        <li>
          <div className='row'>
            <div>Price</div>
            <div className='price'><i className="fa fa-inr"></i>{product.price} </div>
          </div>
        </li>
        <li>
          <div className='row'>
            <div>Status</div>
            <div>
              {product.countInStock > 0 ?(
                <span className='success'>In Stock</span>
                ):(
                  <span className='error'>Unavailable</span>
              )}
            </div>
          </div>
        </li>
        <li>
            <button className='primary block'>Add to Cart</button>
        </li>
      </ul>
    </div>
    
    </div>
    
    </div>
    </div>
  )
}
