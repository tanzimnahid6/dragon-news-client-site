import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { FiBookmark, FiEye, FiShare2, FiStar } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

import Card from "react-bootstrap/Card";
import { Image } from 'react-bootstrap';
import moment from 'moment/moment';
import Rating from 'react-rating';
const NewsCard = ({ news }) => {
 

    const {_id,title,details,image_url,author,rating,total_view} = news
    
    
  return (
    <div className="mt-4">
      <Card className="">
        <div>
          <Card.Header className="d-flex m-2 align-items-center">
            <Image
              style={{ height: "45px", width: "45px" }}
              src={author?.img}
              roundedCircle
            />
            <div className="m-2 flex-grow-1">
              <h6 className="m-0">{author?.name}</h6>
              <p className="p-0 m-0">
                {moment(author?.published_date).format("yyyy-mm-d")}
              </p>
            </div>
            <div className="ms-auto">
              <span>
                <FiBookmark></FiBookmark>
                <FiShare2></FiShare2>
              </span>
            </div>
          </Card.Header>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />

          <Card.Text>
            {details?.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details?.slice(0, 250)}...
                <Link to={`/news/${_id}`}>Show More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1">
            <Rating
              initialRating={rating?.number}
              emptySymbol={<FiStar></FiStar>}
              fullSymbol={<AiFillStar  className='text-warning'></AiFillStar>}
              readonly
            ></Rating>
            {rating?.number}
          </div>
          <div>
            <FiEye></FiEye>
            {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;