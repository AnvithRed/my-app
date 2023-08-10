// Home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Nature Carousel!</h1>
      <Carousel>
        <div>
          <img src="https://thumbs.dreamstime.com/b/hand-holding-glass-globe-ball-tree-growing-green-nature-blur-background-eco-concept-161081206.jpg.jpg" alt="Nature 1" />
        </div>
        <div>
          <img src="https://cdn.pearltrees.com/s/pic/sq/nature-jpeg-image-1024-pixels-9589177.jpg" alt="Nature 2" />
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
};

export default Home;
