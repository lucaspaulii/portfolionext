"use client";
import LangContext from "@/context/langContext";
import { redirect, usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Page() {
    const { setLang } = useContext(LangContext);
    const pathname = usePathname();

    useEffect(() => {
        const redirectPath = pathname.split('/')[1]
        redirect(`#${redirectPath}`)
    }, [])
    return <div className="h-full w-full bg-blue-900"></div>
};