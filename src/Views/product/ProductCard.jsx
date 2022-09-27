import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import "./Product.Card.css"
import { storeproduct } from "../../Redux/Slices/userSlice";
import { getOneImage } from '../../Controller/ImageController/imageProcessor';

const  ProductCard = ({image,title,description,data})=> 
{
    const dispatch = useDispatch();

  return (
    <Card className='card' >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button className='w-100' variant="primary" onClick={()=>setTimeout(()=>{dispatch(storeproduct(data));setTimeout(()=>window.location.href='/ProductDetails',80)},10)}>View</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;