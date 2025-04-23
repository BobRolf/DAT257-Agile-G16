import { useEffect } from 'react';

const ThemeProvider = () => {
    useEffect(() => {
        document.body.setAttribute('data-bs-theme', 'dark');
    }, []);

    return null;
};
export default ThemeProvider;