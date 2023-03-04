import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData();
  return (
        <div>
          {
            data.map(singleData =><h2 key={singleData.id}>{singleData.title}</h2> )
          }
        </div>
    );
};

export default Home;