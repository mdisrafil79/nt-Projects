import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h2>About Us</h2>
            <Image src='/israfil.jpg' width={300} height={300} alt='Israfil Bro'></Image>
            <Image src='/images/banner.png' width={300} height={300} alt='Baanner'></Image>
            <Image src='/images/br.png' width={300} height={300} alt='Br'></Image>
        </div>
    );
};

export default AboutPage;