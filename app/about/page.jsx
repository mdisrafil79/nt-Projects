import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: "About Us",
  description: "...",
};

const AboutPage = () => {
    return (
        <div>
            <h2>About Us</h2>
            <Image
                src='https://i.pinimg.com/736x/af/27/b2/af27b2c89f840b3d17639d0654994989.jpg'
                width={300}
                height={300}
                alt='taskin'
            />
            <Image src='https://i.ibb.co.com/ksMFNdZV/em.jpg' width={300} height={300} alt='Pic'></Image>
            <Image src='/israfil.jpg' width={300} height={300} alt='Israfil Bro'></Image>
            <Image src='/images/banner.png' width={300} height={300} alt='Baanner'></Image>
            <Image src='/images/br.png' width={300} height={300} alt='Br'></Image>
        </div>
    );
};

export default AboutPage;