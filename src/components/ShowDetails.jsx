
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShow();
  }, [id]);

  if (!show) {
    return <div className="container mx-auto mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6">{show.name}</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        <Link to={`/booking/${show.id}`} className="text-blue-500 hover:underline">
          Book Ticket
        </Link>
      </div>
    </div>
  );
};

export default ShowDetails;
