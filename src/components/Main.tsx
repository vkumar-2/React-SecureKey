import React from 'react';
import {ReactNode} from 'react';

type prop = 
{
    styles: string[];
    content: ReactNode;
};

const Main: React.FC<prop> = ({styles, content}) =>
{
    let a: number;
    let b: string;
    let c: boolean;
    let d: Date;
    let e: any;
    let f: string[];
    let g: bigint;
    let h: object;
    
    a = 10; 
    b = "text";

    return (
        <main className={styles.join(" ")}>
            {content}
        </main>
    );
}

export default Main;