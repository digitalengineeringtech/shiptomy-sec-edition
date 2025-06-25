import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
// import { SquareArrowOutUpRight } from 'lucide-react';

interface ImageProps {
    link: string,
    img: string,
    title: string
}

const ContactUs: React.FC<ImageProps> = (props) => {
    return (
        <div className="body">
            <Link
                className="card social"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="overlay" />
                <div className="circle">
                    <img src={props.img} width={50} className='z-10' />
                </div>
                <p className='font-bold text-2xl '>{props.title}</p>


            </Link>
        </div>
    );
}


export default ContactUs;
