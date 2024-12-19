import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import '../styles/card.css'

const Card = () => {
  return (
    <div>
      <div className='card'>
        <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/0346153/1.jpg?4774" alt="" />
        <p className='first'>Product Name</p>
        <p className='second'>$10000</p>
        <p className='third'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, aliquam.</p>

        <div className='icon-container'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <button>Add to cart <FaShoppingCart /></button>
      </div>
    </div>
  )
}

export default Card
