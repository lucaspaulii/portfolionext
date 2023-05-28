'use client'
import { createContext, useState } from "react";

const PageContext = createContext({
    pageData: "/",
    setPageData: (value: string) => {}
});
export default PageContext;

export function PageProvider({children} : any) {
    const [pageData, setPageData] = useState("/");


    return (
        <PageContext.Provider value={{pageData, setPageData}}>
            {children}
        </PageContext.Provider>
    )
}