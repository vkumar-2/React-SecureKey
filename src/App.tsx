import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Interface from './components/Interface';
import FAQ from './components/FAQ';

type SetType = 'wrap' | 'header' | 'main' | 'footer';
const sets = (type: SetType): string[] =>
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
const Elements: React.FC = () => (
    <>
        <Interface />
        <FAQ />
    </>
)
const App: React.FC = () =>
{
    return (
        <section className={sets('wrap').join(" ")}>
            <Header styles={sets('header')}/>
            <Main styles={sets('main')} content={<Elements/>}/>
            <Footer styles={sets('footer')}/>
        </section>
    );
}

export default App;

