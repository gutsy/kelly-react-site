import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import deer from './imgs/deer-small.jpeg';
import marmet from './imgs/marmet-small.jpeg';
import wolf from './imgs/wolf-small.jpeg';
import cat from './imgs/cat-small.jpeg';

class SwiperComponent extends Component {
    render() {
        const params = {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            }
        };

        return(
            <Swiper {...params}>
                <div><img src={wolf} alt="the wolf" /></div>
                <div><img src={marmet} alt="the marmet" /></div>
                <div><img src={cat} alt="the cat" /></div>
                <div><img src={deer} alt="the deer" /></div>
            </Swiper>
        )
    }
}

export default SwiperComponent;