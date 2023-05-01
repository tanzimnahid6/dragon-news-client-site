import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";


const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();

  return (
    <div>
      {id&&<h1>This is category section:{categoryNews.length}</h1>}
      {categoryNews.map((singleNews, id) => (
        <NewsCard key={id} news={singleNews}></NewsCard>
      ))}
     
    </div>
  );
};

export default Category;
