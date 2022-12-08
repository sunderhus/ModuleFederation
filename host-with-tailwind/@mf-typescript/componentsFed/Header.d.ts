import React, { HTMLAttributes } from 'react';
interface HeaderProps extends HTMLAttributes<HTMLElement> {
    title: string;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
