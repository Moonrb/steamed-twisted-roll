import React, {useState} from 'react';
import Swiper from '_react-id-swiper@2.1.2@react-id-swiper/lib/index';
import {Pagination, Navigation, Autoplay} from '_swiper@4.5.0@swiper/dist/js/swiper.esm';
import Table from '../../../../component/table-options/table';
import './swiper.scss'

const SimpleSwiper = (props) => {

    const params = {
        modules: [Pagination, Navigation, Autoplay],
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.homeImgswiper-pagination',
            type: 'bullets',
            clickable: true
        },
        spaceBetween: 30,
        centeredSlides: true,
        rebuildOnUpdate: true,
        loop: true,
    };

    // 外部引用按钮控制swiper
    const [swiper, updateSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    let swiperlist = props.swiperlist.pc_index_carousel;
    return (
        <div className='swiperDiv'>
            <Swiper {...params} getSwiper={updateSwiper}>
                {
                    swiperlist ?

                        swiperlist.map(item => (
                            <div key={item.hongren_info.uid}>
                                <Table key={item.hongren_info.uid} {...props} id={item.hongren_info.uid} path='/video'>
                                    <div className='homeimg'>
                                        <img src={item.ad_image} alt=""/>
                                    </div>

                                </Table>
                            </div>
                        ))
                        :
                        null
                }
            </Swiper>
            <button onClick={goPrev} className='goPrev'>Prev</button>
            <button onClick={goNext} className='goNext'>Next</button>
        </div>
    )

};


export default SimpleSwiper;
