import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.productCode}>{item.name}: {item.productCode}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
