import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreateBook = () => {
  const [name, setBookName] = useState('');

  const postData = () => {
    axios.post('http://localhost:5000/api/books/', {
      name,
    });
  };

  return (
    <div>
      <h1>Add new book names</h1>
      <form action="POST">
        <input
          type="text"
          onChange={(e) => setBookName(e.target.value)}
        ></input>

        <button onClick={postData} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
