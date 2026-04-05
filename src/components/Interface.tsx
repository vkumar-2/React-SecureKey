import React from 'react';
import Diagram from './sub-components/Diagram';
import Container from './sub-components/Container';

type ElementKey = 'ui' | 'div' | 'span' | 'h1';
const Interface: React.FC = () =>
{
    const styles = (elementId: ElementKey): string[] =>
    {
        switch (elementId)
        {
            case 'ui':
                return ['flex', 'justify-center', 'px-3'];
                break;
            case 'div':
                return ['w-full', 'max-w-6xl', 'mx-3', 'my-6', 'rounded-lg', 'bg-zinc-100', 'border-2'];
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
    const respond = (elementId: ElementKey): string[] =>
    {
        switch (elementId)
        {
            case 'ui':
                return [];
                break;
            case 'div':
                return [''];
                break;
            case 'span':
                return [''];
                break;
            default: return []; break;
        }
    }
    const config =
    {
        ui: `${styles('ui').join(" ")} ${respond('ui').join(" ")}`,
        div: `${styles('div').join(" ")} ${respond('div').join(" ")}`,
        span: `${styles('span').join(" ")} ${respond('span').join(" ")}`,
        h1: styles('h1').join(" "),
        
        components: 
        {
            div: ['m-3', 'mt-5', 'flex', 'justify-center'],
            diagram: ['hidden', 'rounded-lg', 'lg:block', 'lg:flex', 'lg:w-[40%]', 'lg:justify-center'],
            container: ['bg-zinc-300', 'rounded-lg', 'w-[100%]', 'sm:w-[80%]', 'lg:w-[60%]'],
        },
    }

    return (
        <section id="interface" className="flex justify-center px-3">
            <div className="w-full max-w-6xl my-6 rounded-lg bg-zinc-100 border-2">
                <h1 className={config.h1}>Use <span className={config.span}>SecureKey</span> to generate a strong, secure and unique password.</h1>
                <div className={config.components.div.join(" ")}>
                    <Diagram styles={config.components.diagram}/>
                    <Container styles={config.components.container}/>
                </div>
            </div>
        </section>
    );
}

export default Interface;