import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ItemCard from '../molecules/ItemCard';

function CardCarousel({products}) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (

        <div className='w-full p-9'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {Array.isArray(products) && products.map((p) => (
                        <div key={p.id}>
                            <ItemCard product={p} imageUrl={p.image_url} name={p.name} price={p.price} quantity={p.quantity} description={p.description}></ItemCard>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CardCarousel;