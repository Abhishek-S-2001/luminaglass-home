import Image from 'next/image';

import image from '@/resources/GlassChandeliers1.jpeg'

export default function HeroSection() {

    return(
    <div className="grid grid-flow-row">
        <Image src={image} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Glass Chandeliers" layout="responsive" />
            {/* Add your content overlay here */}
            <div className="overlay">
                <h1 className=" text-4xl font-bold">Welcome to our Glass Decor Store</h1>
                {/* Add more content as needed */}
            </div>
        
        <div className="...">02</div>
        <div className="...">03</div>
        <div className="...">04</div>
        <div className="...">05</div>
        <div className="...">06</div>
        <div className="...">07</div>
    </div>
    )
}