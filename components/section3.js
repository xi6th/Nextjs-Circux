import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "../components/_child/author"

export default function section3 (){
    return (
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center"> Most Popular </h1>
            {/* swiper */}
            <Swiper
            slidesPerView={2}
            >
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
            </Swiper>
            
        </section>
    )
}

function Post(){
    return (
        <div className="grid">
            <div className="images">

            </div>
            <div className="info flex justify-center flex-col py-4">
                <Link href={'/'} legacyBehavior><a><Image src="/images/img1.jpg"  width={510} height={350}/></a></Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={'/'} legacyBehavior><a className='text-gray-900 hover:text-gray-700'>Business, Travel</a></Link>
                    <Link href={'/'} legacyBehavior><a className='text-gray-900 hover:text-gray-700'>-July 3, 2022</a></Link>
                </div>
                <div className='title'>
                    <Link href={'/'} legacyBehavior><a className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>How to Avoid December Burnout</a></Link>
                </div>
                <p className='text-gray-500 py-3'>
                    “The most successful people I know have a narrow focus, protect themselves against time-wasters, say no to almost everything.” — Derek Sivers, Hell Yeah or No
                </p>
                <Author></Author>
            </div>
        </div>
    )
}