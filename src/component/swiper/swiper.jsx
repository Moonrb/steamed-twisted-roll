import React,{ useState } from 'react'
import Swiper from 'react-id-swiper';
import { Pagination, Navigation ,Autoplay} from 'swiper/dist/js/swiper.esm'
import Table from '../table-options/table'

const SimpleSwiper = (props) => {

    const params = {
        modules: [Pagination, Navigation, Autoplay],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        spaceBetween: 30
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
    let swiperlist = props.swiperlist.pc_index_carousel
    return(
        <div>
        <Swiper {...params} getSwiper={updateSwiper} modules={[Navigation]} key={props.swiperlist[0]}>
            {
                swiperlist?

                swiperlist.map(item=>(
                    <div key={item.hongren_info.uid}>
                        <Table key={item.hongren_info.uid} {...props} id={item.hongren_info.uid} path='/video'>
                            1111111111111111111111
                        </Table>
                    </div>
                ))
                    :
                    null
            }
        </Swiper>
            <button onClick={goPrev} className='goPreV'>+</button>
            <button onClick={goNext} className='goNext'>-</button>
        </div>
    )

};

const swiperImg = (props)=>{
(props.swiperlist.pc_index_carousel).map((item)=>(
        <div key={item.hongren_info.uid}>
            <Table key={item.hongren_info.uid} {...props} id={item.hongren_info.uid} path='/video'>
                1111111111111111111111
            </Table>
        </div>
    ));

console.log(props.swiperlist.pc_index_carousel)
    }
;
export default SimpleSwiper;
