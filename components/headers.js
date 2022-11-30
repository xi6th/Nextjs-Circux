import {BsMessenger, BsTwitter,BsYoutube} from 'react-icons/bs';
import Link from 'next/link';

export default function header () {
    return (
        <header className='bg-gray-50'>
            <div className='xl:container xl:max-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
                <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
                    <input className='input-text' type='text'  placeholder="Search .."/>
                </div>
                <div className='shrink w-80 sm:order-2'>
                    <Link href={'/'} legacyBehavior>
                        <a className='font-bold uppercase text-3xl'> DESIGN</a>
                    </Link>
                </div>
                <div className='w-96 order-3 flex justify-center'>
                    <div className='flex gap-6'>
                    <Link href={'/'} legacyBehavior><a> <BsMessenger color='#888888'/></a></Link> 
                    <Link href={'/'} legacyBehavior><a> <BsTwitter color='#888888'/></a></Link>                    
                    <Link href={'/'} legacyBehavior><a> <BsYoutube color='#888888'/> </a></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}


{/* <div className="xl:container xl:max-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3"> */}
