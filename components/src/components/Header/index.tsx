import React, { HTMLAttributes } from 'react';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
    title:string;
}

const Header:React.FC<HeaderProps> = ({title, className, ...props})=>{

    return(
        <header 
            {...props}
            className={`p-3 text-center bg-red-600 ${className?? ''}`}
        >
            {title}
        </header>
    )
};


export default Header;
