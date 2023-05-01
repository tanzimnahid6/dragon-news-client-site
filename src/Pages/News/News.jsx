import React from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import {Link} from 'react-router-dom'
import EditorInsight from "./EditorInsight";


const News = () => {
  const news = useLoaderData();
  const { image_url, title, details, category_id } = news;
  console.log(news);
  return (
    <div>
      <h4 className="text-left">Dragon News</h4>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body className="text-left">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>All News In This Category</Link>
        </Card.Body>
      </Card>
            <EditorInsight x={3}></EditorInsight>
     
    </div>
  );
};

export default News;
