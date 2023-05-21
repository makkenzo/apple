import { useState } from 'react';
import Slider from 'react-slick';

import SliderItem from './SliderItem';

const Carousel = () => {
    const [curSlide, setCurSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: true,
        centerPadding: '24%',
        beforeChange: (oldIndex, newIndex) => setCurSlide(newIndex),
        afterChange: (cur) => setCurSlide(cur),
    };

    return (
        <Slider {...settings} className="mt-3">
            <div
                className={
                    curSlide === 0
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem bg="/src/assets/carousel/last-thing.jpg" genre="Mystery" desc="Protect what you love." />
            </div>
            <div
                className={
                    curSlide === 1
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem bg="/src/assets/carousel/silo.jpg" genre="Sci-Fi" desc="The truth will surface." />
            </div>
            <div
                className={
                    curSlide === 2
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem bg="/src/assets/carousel/desert.jpg" genre="Comedy" desc="It's not you. It's her." />
            </div>
            <div
                className={
                    curSlide === 3
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem bg="/src/assets/carousel/lasso.jpg" genre="Comedy" desc="Kindness makes a comeback." />
            </div>
            <div
                className={
                    curSlide === 4
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                {/* <img src="/src/assets/carousel/baseball.jpg" className="h-[551px] pr-3" alt="" /> */}
                <SliderItem bg="/src/assets/carousel/baseball.jpg" genre="Sports" desc="Live MLB games every Friday." />
            </div>
            <div
                className={
                    curSlide === 5
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem
                    bg="/src/assets/carousel/still.jpg"
                    genre="Documentary"
                    desc="From Emmy and Oscar winner Davis Guggenheim."
                />
            </div>
            <div
                className={
                    curSlide === 6
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem
                    bg="/src/assets/carousel/door.jpg"
                    genre="Comedy"
                    desc="Your life's potential is one card away."
                />
            </div>
            <div
                className={
                    curSlide === 7
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem bg="/src/assets/carousel/shrinking.jpg" genre="Comedy" desc="Breakdown. Breakthrough." />
            </div>
            <div
                className={
                    curSlide === 8
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem bg="/src/assets/carousel/morning.jpg" genre="Drama" desc="Control is an illusion." />
            </div>
            <div
                className={
                    curSlide === 9
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem
                    bg="/src/assets/carousel/ghosted.jpg"
                    genre="Action"
                    desc="Meeting that special someone can be a real adventure."
                />
            </div>
            <div
                className={
                    curSlide === 10
                        ? 'transition-opacity duration-300 ease-in-out opacity-100'
                        : 'transition-opacity duration-300 ease-in-out opacity-40'
                }
            >
                <SliderItem bg="/src/assets/carousel/stillwater.jpg" genre="Kids & Family" desc="New season." />
            </div>
        </Slider>
    );
};

export default Carousel;
