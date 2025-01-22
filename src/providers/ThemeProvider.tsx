"use client"

import { ThemeContext } from '@/context/ThemeContext';
import React, { ReactNode, useContext, useEffect, useState } from 'react'

interface ThemeContextProviderProps {
    children: ReactNode;
}
const ThemeProvider : React.FC<ThemeContextProviderProps> = ({ children }) => {

    const {theme} = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[]);
    
  if(mounted) return <div className={theme}>{children}</div>
}

export default ThemeProvider
