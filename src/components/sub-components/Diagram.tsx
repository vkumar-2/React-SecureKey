import React from 'react';

type PropDiagram = {styles: string[];};
const Diagram: React.FC<PropDiagram> = ({styles}) =>
{
    return (
        <div className={styles.join(" ")}>
            <img src='../src/assets/image.png' alt='Concept image' className="w-full"/>
        </div>
    );
}

export default Diagram;