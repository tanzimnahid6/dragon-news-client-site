import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import EditorInsight from '../../Pages/News/EditorInsight';

const LeftNav = () => {

    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/category')
          .then((res) => res.json())
          .then((data) => setCategories(data))
          .catch((error) => console.log(error));
    },[])
    return (
      <div className="text-left">
        <h4>All Category here</h4>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="p-0">
              {category.name}
            </Link>
          </p>
        ))}

        <EditorInsight x={1}></EditorInsight>
      </div>
    );
};

export default LeftNav;