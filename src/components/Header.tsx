import React from 'react';
import logo from "../assets/logo.png";

type Props = {styles: string[];};

const Header: React.FC<Props> = ({styles}) =>
{
    const img: string[] = ['h-[65px]', 'lg:h-[75px]'];
    const h1: string[] = ['py-4', 'bg-olive-500', 'text-2xl', 'text-center', 'font-medium', 'text-amber-400', 'eagle-lake-regular', 'tracking-wider', 'text-shadow-lg/80'];

    return (
        <>
            <header className={styles.join(" ")}>
                <img src={logo} alt='Logo' className={img.join(" ")}/>
            </header>
            <h1 className={h1.join(" ")}>Password Generator</h1>
        </>
    );
}

export default Header;