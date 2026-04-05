import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import {CSSProperties} from 'react';

type PropContainer = {styles: string[];};
const Container: React.FC<PropContainer> = ({styles}) =>
{
    // state variables
    const [length, setLength] = useState<number>(10);
    const [lowerCase, setLowerCase] = useState<boolean>(true);
    const [upperCase, setUpperCase] = useState<boolean>(true);
    const [numbers, setNumbers] = useState<boolean>(false);
    const [specialChars, setSpecialChars] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    // functions
    const copy = (): void => {navigator.clipboard.writeText(password);};
    const changeLength = (e: React.ChangeEvent<HTMLInputElement>) => setLength(Number(e.target.value));
    const incrementLength = (): void => {setLength((previous) => Math.min(previous + 1, 100));};
    const decrementLength = (): void => {setLength((previous) => Math.max(previous - 1, 6));};
    const regenPassword = (): void => {passwordGen();};
    const resetSettings = (): void => 
    {
        setLength(10);
        setLowerCase(true);
        setUpperCase(true);
        setNumbers(false);
        setSpecialChars(false);
    };

    // setup password generator
    const passwordGen = useCallback((): void => 
    {
        let password = "";
        let stringData = "";

        // concatenate characters if states are true
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

    // render message if password is weak/strong
    const passwordStrength = (type: 'style' | 'message'): string =>
    {
        switch (type)
        {
            case 'style':
            {
                if (length <= 20) return "bg-red-800 text-white";
                if (length <= 40) return "bg-amber-800 text-white";
                if (length <= 60) return "bg-emerald-800 text-white";
                return "bg-emerald-900 text-white";
                break;
            }
            case 'message':
            {
                if (length <= 20) return "Weak";
                if (length <= 40) return "Moderate";
                if (length <= 60) return "Strong";
                return "Very Strong";
                break;
            }
            default: return ""; break;
        }
    }
    
    // tailwind class config
    const classList =
    {
        div: 
        [
            ['m-2', 'flex', 'shadow', 'rounded-lg', 'overflow-hidden'], 
            ['m-2', 'flex', 'items-center','gap-x-4'],
            ['m-2', 'flex', 'items-center', 'gap-x-2'],
        ],
        password: ['bg-white', 'outline-none', 'w-full', 'py-1', 'px-3'], // 1
        copy: ['text-white', 'px-4', 'py-2', 'shrink-0', 'cursor-pointer', 'bg-blue-700', 'hover:bg-blue-600', 'focus:bg-blue-600'], // 2
        buttons: ['cursor-pointer', 'border', 'rounded-full', 'h-10', 'w-10', 'p-0', 'shrink-0', 'inline-flex', 'items-center', // 3
                  'justify-center', 'text-2xl', 'leading-none', 'bg-violet-300 hover:bg-violet-400 focus:bg-violet-400'],
        menuButtons: ['py-2', 'px-4', 'rounded-lg', 'cursor-pointer', 'text-white', 'bg-blue-700', 'hover:bg-blue-600', 'focus:bg-blue-600'], // 4
    }
    
    // render HTML
    return (
        <section className={styles.join(" ")}>
            <div className={classList.div[0].join(" ")}>
                <input type="text" value={password} placeholder="Password" className={classList.password.join(" ")} readOnly/> {/* 1 */}
                <button type="button" onClick={copy} className={classList.copy.join(" ")}>Copy</button> {/* 2 */}
            </div>
            <div className={`${classList.div[2].join(" ")} justify-center`}>
                <p className="text-lg py-2">Password Strength: {/* */}
                    <span className={`py-1 px-3 mx-3 rounded-full text-sm ${passwordStrength('style')}`}>{passwordStrength('message')}</span>
                </p>
            </div>
            <div className="px-2 py-2 flex items-center gap-x-3 w-full box-border">
                <label className="text-lg w-28 shrink-0">
                    Length: <span className="font-bold inline-block w-8 text-right tabular-nums">{length}</span>
                </label>
                <button type="button" className={classList.buttons.join(" ")} onClick={decrementLength}>
                    <span className="leading-none">-</span>
                </button>
                <input
                    type="range"
                    min={6}
                    max={100}
                    value={length}
                    className="cursor-pointer flex-1 min-w-0"
                    onChange={changeLength}
                />
                <button type="button" className={classList.buttons.join(" ")} onClick={incrementLength}>
                    <span className="leading-none">+</span>
                </button>
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
            <div className={`${classList.div[2].join(" ")} justify-center gap-x-9 my-4`}>
                <button type="button" onClick={regenPassword} className={classList.menuButtons.join(" ")}>Regenerate</button> {/* 4 */}
                <button type="button" onClick={resetSettings} className={classList.menuButtons.join(" ")}>Reset</button> {/* 4 */}
            </div>
        </section>
    );
}

export default Container;