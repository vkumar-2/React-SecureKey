import React from 'react';

/* export const greet = (): void =>
{
    console.log("Hello, name");
} */

type props = 
{
    name: string;
}
const Misc = ({name}: props) =>
{
    return (
        <p>{name}</p>
    );
}

export default Misc;

