import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CloudinaryGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image?tags=g1`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_CLOUDINARY_API_KEY}`,
          },
        }
      );
      setImages(response.data.resources);
    };
    getImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img key={image.public_id} src={image.url} alt={image.public_id} />
      ))}
    </div>
  );
};

export default CloudinaryGallery;
