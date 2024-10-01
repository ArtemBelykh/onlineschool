import React, {createContext, FC, ReactNode, useContext, useEffect} from 'react';

const TitleContext = createContext<string>('');

export const changeTitle = (titleApp: string) => {
    document.title = titleApp
}
export const TitleProvider = ({title, children}: { title: string; children: ReactNode }): JSX.Element => {
    useEffect(() => {
        changeTitle(title);
    }, [title]);
    return (
        <TitleContext.Provider value={title}>
            {children}
        </TitleContext.Provider>
    );
}


export const useTitle = () => useContext(TitleContext);