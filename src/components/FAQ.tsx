import React from 'react';
import getQAs from './sub-components/QAs';
import Spoiler from './sub-components/Spoiler';

type ElementKey = 'ui' | 'div' | 'span' | 'h1';
const FAQ: React.FC = () =>
{
    const styles = (elementId: ElementKey): string[] =>
    {
        switch (elementId)
        {
            case 'ui':
                return ['flex', 'justify-center', 'px-3'];
                break;
            case 'div':
                return ['w-full', 'max-w-6xl', 'my-6', 'rounded-lg', 'bg-zinc-100', 'border-2'];
                break;
            case 'h1':
                return ['text-center', 'text-lg', 'sm:text-xl', 'my-4'];
                break;
            case 'span':
                return ['font-bold'];
                break;
            default: return []; break;
        }
    }
    const config =
    {
        ui: styles('ui').join(" "),
        div: styles('div').join(" "),
        span: styles('span').join(" "),
        h1: styles('h1').join(" "),
        components: 
        {
            div: ['m-3', 'mt-5', 'flex', 'justify-center'],
            diagram: ['hidden', 'rounded-lg', 'lg:block', 'lg:flex', 'lg:w-[40%]', 'lg:justify-center'],
            container: ['bg-zinc-300', 'rounded-lg', 'w-[100%]', 'sm:w-[80%]', 'lg:w-[60%]'],
        },
    }

    return (
        <section id="faq" className="flex justify-center px-3">
            <div className={config.div}>
                <h1 className={config.h1}>Frequently Asked Questions</h1>
                <Spoiler question={getQAs('question', 0)} answer={getQAs('answer', 0)}/>
                <Spoiler question={getQAs('question', 1)} answer={getQAs('answer', 1)}/>
                <Spoiler question={getQAs('question', 2)} answer={getQAs('answer', 2)}/>
                <Spoiler question={getQAs('question', 3)} answer={getQAs('answer', 3)}/>
                <Spoiler question={getQAs('question', 4)} answer={getQAs('answer', 4)}/>
            </div>
        </section>
    );
}

export default FAQ;