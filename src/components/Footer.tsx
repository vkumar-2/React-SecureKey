import React from 'react';

type Props = {styles: string[];};

const Footer: React.FC<Props> = ({styles}) =>
{
    const p: string[] = ['py-1', 'text-xl', 'text-shadow-lg/40'];
    const a: string[] = ['text-green-400', 'hover:text-green-600', 'focus:text-amber-600'];

    return (
        <footer className={styles.join(" ")}>
            <p className={p.join(" ")}>&copy; 2025 - {new Date().getFullYear()}</p>
            <p className={p.join(" ")}>Built with {/* */}
                <a className={a.join(" ")} href="https://react.dev/" target="_blank">React</a>, {/* */}
                <a className={a.join(" ")} href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> & {/* */}
                <a className={a.join(" ")} href="https://tailwindcss.com/" target="_blank">Tailwind</a>
            </p>
        </footer>
    );
}

export default Footer;