import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import {CSSProperties} from 'react';

type PropSpoiler  = {
    question: string;
    answer: string;
};
const Spoiler: React.FC<PropSpoiler> = ({question, answer}) =>
{
    const [open, setOpen] = useState<boolean>(false);
    const setRounded = () =>
    {
        if (open) return 'rounded-t-lg';
        return 'rounded-lg';
    }
    const styles = 
    {
        div: ['m-4'],
        h2: ['cursor-pointer', 'bg-indigo-900', 'font-bold', 'tracking-wide', setRounded(), 'p-2', 'text-md', 'text-white', 
             'hover:text-zinc-300', 'focus:text-zinc-300', 'sm:text-lg'],
        reveal: ['bg-indigo-200', 'p-2', 'rounded-b-lg', 'text-md', 'sm:text-lg'],
    };
    const reveal = () =>
    {
        if (open) return (
            <div className={styles.reveal.join(" ")}>{answer}</div>
        );
    };
    const symbol = () =>
    {
        if (open) return (
            <span className="text-blue-200">-</span>
        );
        return (
            <span className="text-blue-200">+</span>
        );
    };
    return (
        <div className={styles.div.join(" ")}>
            <h2 onClick={() => setOpen(!open)} className={styles.h2.join(" ")}>{symbol()} {question}</h2>
            {reveal()}
        </div>
    );
}

export default Spoiler;