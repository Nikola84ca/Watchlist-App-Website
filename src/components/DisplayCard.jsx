import React from "react";
import { Card, Container } from "react-bootstrap";
import ReviewModalWithButton from "./ReviewModalWithButton";
import "./DisplayCard.css";
import "./component.css";
import "./mediaqueries.css";

import noImage from "../assets/images/no_image_avail.jpg";

const DisplayCard = (props) => {
  //const noImage = "../assets/images/no_image_avail.jpg";
  return (
    <Container>
      <Card className="single-card">
        <Card.Img
          // we need to change image for shows without images from the API
          src={props.image?.original ? props.image.original : noImage}
          alt={props.name}
          className="card-img"
          style={{height: 350}}
        />
        <Card.ImgOverlay className="hover-text">
          <Card.Title className="card-title">{props.name}</Card.Title>
          <div className="result-btns">
            {props.action && <props.action show={props} />}

            <ReviewModalWithButton
              show={props}
              review={props.review}
              buttonName={props.buttonName}
            />
          </div>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default DisplayCard;
