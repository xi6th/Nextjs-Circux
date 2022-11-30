import Image from 'next/image'
import Link from 'next/link'
import { BsAlignCenter } from 'react-icons/bs'
import Author from './_child/author'
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function session1(){

    SwiperCore.use([Autoplay])
    const bg = {
        background:"url('/images/banner.png')no-repeat",
        backgroundPosition:"right"
    }

    return(
        <section className='py-16' style={bg}>
            <div className='container mx-auto md:px-20'>
                <h1 className='font-bold text-4xl pb-12 text-center'> Trending </h1>


                <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay:2000
                }}
                >
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
                </Swiper>
                
            </div>
        </section>
    )
}

function Slide(){
    return(
        <div className='grid md:grid-cols-2'>
            <div className='image'>
                <Link href={'/'} legacyBehavior>
                    <a>
                        <Image src="/images/img1.jpg" width={510} height={500}/>
                    </a>
                </Link>
            </div>
            <div className='info flex justify-center flex-col'>
                <div className='cat'>
                    <Link href={'/'} legacyBehavior><a className='text-gray-900 hover:text-gray-700'>Business, Travel</a></Link>
                    <Link href={'/'} legacyBehavior><a className='text-gray-900 hover:text-gray-700'>-July 3, 2022</a></Link>
                </div>
                <div className='title'>
                    <Link href={'/'} legacyBehavior>
                        <a className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>
                            How to Avoid December Burnout
                        </a></Link>
                </div>
                <p className='text-gray-500 py-3'>
                    “The most successful people I know have a narrow focus, protect themselves against time-wasters, say no to almost everything.” — Derek Sivers, Hell Yeah or No
                </p>
                <Author></Author>
            </div>
        </div>
    )
}

{/* <div className='grid md:cols-2 flex'></div> */}