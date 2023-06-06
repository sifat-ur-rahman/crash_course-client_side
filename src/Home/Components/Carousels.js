import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
    return (
        <Carousel variant="dark my-4 rounded-top">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/FKfjjgX/cover-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='text-white'>
        <h1>Get Started Digital </h1>
                        <h1>Learning</h1>
                        <p>It is necessary for you to keep yourself updated with the latest, in-demand programming
                            languages. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Gk87fS3/cover-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
        <h1>Get Started Digital </h1>
                        <h1>Learning</h1>
                        <p>It is necessary for you to keep yourself updated with the latest, in-demand programming
                            languages. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/JChf3yd/cover-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='text-white'>
        <h1>Get Started Digital </h1>
                        <h1>Learning</h1>
                        <p>It is necessary for you to keep yourself updated with the latest, in-demand programming
                            languages. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Carousels;