import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowAllBooks = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Show all books</h1>
      {APIData.map((data) => {
        return <h3>{data.name}</h3>;
      })}
    </div>
  );
};

export default ShowAllBooks;
