import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import {CSSProperties} from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App: React.FC = () =>
{
    return (
        <section className={sets('wrap').join(" ")}>
            <Header styles={sets('header')}/>
            <Main styles={sets('main')} content={<><Interface/><App3/></>}/>
            <Footer styles={sets('footer')}/>
        </section>
    );
}

type setType = 'wrap' | 'header' | 'main' | 'footer';
const sets = (type: setType): string[] =>
{
    switch (type)
    {
        case 'wrap':
            return ['min-h-screen', 'flex', 'flex-col'];
            break;
        case 'header':
            return ['w-full', 'py-2', 'bg-olive-600', 'flex', 'justify-center'];
            break;
        case 'main':
            return ['bg-zinc-200', 'w-full', 'flex-1'];
            break;
        case 'footer':
            return ['bg-olive-600', 'w-full', 'py-2', 'text-center', 'text-2xl', 'text-white'];
            break;
        default: return []; break;
    }
}
const Interface: React.FC = () =>
{
    type elements = 'ui' | 'div' | 'span' | 'h1';
    const styles = (elementId: elements): string[] =>
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
    const respond = (elementId: elements): string[] =>
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
        
        components: {
            div: ['m-3', 'mt-5', 'flex', 'justify-center'],
            diagram: ['hidden', 'rounded-lg', 'lg:block', 'lg:flex', 'lg:w-[40%]', 'lg:justify-center'],
            container: ['bg-zinc-300', 'rounded-lg', 'w-[100%]', 'sm:w-[80%]', 'lg:w-[60%]'],
        },
    }

    return (
        <section id="interface" className={config.ui}>
            <div className={config.div}>
                <h1 className={config.h1}>Use <span className={config.span}>SecureKey</span> to generate a strong, secure and unique password.</h1>
                <div className={config.components.div.join(" ")}>
                    <Diagram styles={config.components.diagram}/>
                    <Container styles={config.components.container}/>
                </div>
            </div>
        </section>
    );
}

type propDiagram = {styles: string[];};
const Diagram: React.FC<propDiagram> = ({styles}) =>
{
    return (
        <div className={styles.join(" ")}>
            <img src='../src/assets/image.png' alt='Concept image' className="w-full"/>
        </div>
    );
}

type propContainer = {styles: string[];};
const Container: React.FC<propContainer> = ({styles}) =>
{
    const [length, setLength] = useState<number>(10);
    const [lowerCase, setLowerCase] = useState<boolean>(false);
    const [upperCase, setUpperCase] = useState<boolean>(false);
    const [numbers, setNumbers] = useState<boolean>(false);
    const [specialChars, setSpecialChars] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const copy = (): void => {navigator.clipboard.writeText(password);};
    const changeLength = (e: React.ChangeEvent<HTMLInputElement>) => setLength(Number(e.target.value));
    
    const classList =
    {
        div: [
            ['m-2', 'flex', 'shadow', 'rounded-lg', 'overflow-hidden'], 
            ['m-2', 'flex', 'items-center','gap-x-4'],
            ['m-2', 'flex', 'items-center', 'gap-x-2'],
        ],
        password: ['bg-white', 'outline-none', 'w-full', 'py-1', 'px-3'], // 1
        copy: ['text-white', 'px-4', 'py-2', 'shrink-0', 'cursor-pointer', 'bg-blue-700', 'hover:bg-blue-600', 'focus:bg-blue-600'], // 2
        buttons: ['cursor-pointer', 'border', 'rounded-full', 'h-10', 'w-10', 'p-0', 'shrink-0', 'inline-flex', 'items-center', // 3
                  'justify-center', 'text-2xl', 'leading-none'],
    }
    
    return (
        <section className={styles.join(" ")}>
            <div className={classList.div[0].join(" ")}>
                <input type="text" value={password} placeholder="Password" className={classList.password.join(" ")} readOnly/> {/* 1 */}
                <button type="button" onClick={copy} className={classList.copy.join(" ")}>Copy</button> {/* 2 */}
            </div>
            <div className={classList.div[1].join(" ")}>
                <label className="text-lg">Length: <span className="font-bold">{length}</span></label>
                <button className={classList.buttons.join(" ")}><span className="leading-none">-</span></button> {/* 3 */}
                <input 
                    type="range" 
                    min={6} max={100} 
                    value={length} 
                    className="cursor-pointer w-[60%]" 
                    onChange={changeLength}
                />
                <button className={classList.buttons.join(" ")}><span className="leading-none">+</span></button> {/* 3 */}
            </div>
            <div className={classList.div[2].join(" ")}>
                <input
                    type="checkbox"
                    checked={upperCase}
                    id="uppercase-input"
                    onChange={() => setUpperCase((previous) => !previous)}
                />
                <label htmlFor="uppercase-input">Uppercase</label>
            </div>
            <div className={classList.div[2].join(" ")}>
                <input
                    type="checkbox"
                    checked={lowerCase}
                    id="lowercase-input"
                    onChange={() => setLowerCase((previous) => !previous)}
                />
                <label htmlFor="lowercase-input">Lowercase</label>
            </div>

            <div className={classList.div[2].join(" ")}>
                <input
                    type="checkbox"
                    checked={numbers}
                    id="number-input"
                    onChange={() => setNumbers((previous) => !previous)}
                />
                <label htmlFor="number-input">Numbers</label>
            </div>

            <div className={classList.div[2].join(" ")}>
                <input
                    type="checkbox"
                    checked={specialChars}
                    id="char-input"
                    onChange={() => setSpecialChars((previous) => !previous)}
                />
                <label htmlFor="char-input">Special Characters</label>
            </div>
        </section>
    );
   
}


const App3 = () =>
{
    const [length, setLength] = useState<number>(10);
    const [lowerCase, setLowerCase] = useState<boolean>(true);
    const [upperCase, setUpperCase] = useState<boolean>(true);
    const [numbers, setNumbers] = useState<boolean>(false);
    const [specialChars, setSpecialChars] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const passwordGen = useCallback((): void => 
    {
        let password = "";
        let stringData = "";

        if (lowerCase) stringData += "abcdefghijklmnopqrstuvwxyz";
        if (upperCase) stringData += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numbers) stringData += "0123456789";
        if (specialChars) stringData += "!$%^&_+=@";

        if (stringData.length === 0)
        {
            setPassword("");
        }
        else
        {
            for (let i = 0; i < length; i++)
            {
                let char = Math.floor(Math.random() * stringData.length);
                password += stringData.charAt(char);
            }

            setPassword(password);
        }
    }, [length, lowerCase, upperCase, numbers, specialChars, setPassword]);

    useEffect(() => 
    {
        passwordGen();
    }, [length, lowerCase, upperCase, numbers, specialChars, passwordGen]);

    const margins: CSSProperties = {margin: "2rem"};
    const auto: CSSProperties = {margin: 'auto'};

    const copy = (): void =>
    {
        navigator.clipboard.writeText(password);
    };

    return (
        <div className="flex justify-center" style={margins}>
            <div className="bg-gray-800 w-full max-w-screen-md shadow-md rounded-lg text-orange-500" style={auto}>
                <h1 className="text-center">Password Generator</h1>
    {/*             <p className="mt-2 text-sm">
                    {
                        length >= 6 && length <= 12
                            ? "Weak"
                            : length >= 13 && length <= 19
                            ? "Moderate"
                            : "Strong"
                    }
                </p> */}

            </div>
        </div>
    );
}

export default App;

