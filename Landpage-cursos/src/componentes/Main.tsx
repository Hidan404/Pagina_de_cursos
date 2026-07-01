import React from "react"

interface MainProps {
    children: React.ReactNode
}
export function Main({ children }: MainProps){
    return (
        <main className="flex flex-col items-center justify-center gap-6">
            {children}
        </main>
    )
}