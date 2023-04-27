import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return <footer className="bg-white justify-self-end mt-auto">
        <div className="container mx-auto flex flex-row justify-between items-center h-20 py-6 h-fit">
            <div className="flex-1 h-20">
                <div className="h-full p-3">
                    <img className="h-full" src="/pokeball.png"/>
                </div>
            </div>
        </div>
    </footer>;
}
