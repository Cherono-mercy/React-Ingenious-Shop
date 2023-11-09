import React from "react";
import { Button, Card } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { useCart } from "react-use-cart";
import {BsCartPlus} from "react-icons/bs"

function ProductCard(props) {
  let { image, price, title } = props.data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  function addToCart() {
    addItem(props.data);
  }

  return (
    <Card 
    style={{ width: "18rem", height: "auto" }}
    className={`${theme? 'bg-black text-light' : 'bg-light text-black'}text-center p-0 overlo-hidden shadow mx-auto mb-4`}
    >
        <div style={{background: "white", height: "15rem", overflow: "hidden", display: "flex",
    justifyContent: "center", alignItems: "center", marginBottom: "inherit"}}>
            <div style={{width: "9rem"}}>
            <Card.Img variant="top" src={image} className="img-fluid"/>
            </div>
        </div>
      
      <Card.Body>
        <Card.Title style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
            {title}
        </Card.Title>
        <Card.Title>
            Ksh. <span className="h3">{price}</span>
        </Card.Title>
        <Button onClick={() => addToCart()}
        className={`${theme? "bg-dark-primary text-black" : "bg-light-primary"}d-flex align-item-center m-auto border-0`}
        >

        <BsCartPlus size="1.8rem"/>
          Add to Cart
         
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;