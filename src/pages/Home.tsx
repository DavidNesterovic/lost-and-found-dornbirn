import { Link } from "react-router-dom";
import FoundItemCard from "../components/ItemCard";
import type { FoundItem } from "../types";
import {foundItems} from "../data/foundItems";

const recentItems: FoundItem[] = foundItems.slice(0, 3);

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 pb-12">
            
            {/* Hero Section */}
            <div className="text-center pt-12 sm:pt-20">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Verloren & Gefunden <br className="hidden sm:inline" />
                    <span className="text-blue-600">in Dornbirn</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                    Die zentrale Plattform für verlorene und gefundene Gegenstände in Dornbirn.
                    Hast du etwas verloren oder bist du ein ehrlicher Finder?
                </p>

                {/* BUTTONS: Jetzt nebeneinander (flex-row) und gleich breit (flex-1) */}
                <div className="mt-10 mx-auto max-w-md w-full flex flex-row items-center justify-center gap-4 sm:gap-x-6 sm:w-auto">
                    
                    {/* BUTTON 1: Verloren */}
                    <Link 
                        to="/lost" 
                        className="flex-1 sm:flex-none flex items-center justify-center rounded-xl bg-blue-600 py-3 sm:py-4 px-4 sm:px-8 text-base sm:text-lg font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:bg-blue-500 transition-all duration-300"
                    >
                        <span className="sm:hidden">Verloren</span>
                        <span className="hidden sm:inline">Ich habe etwas verloren</span>
                    </Link>

                    {/* BUTTON 2: Gefunden */}
                    <Link 
                        to="/found" 
                        className="flex-1 sm:flex-none flex items-center justify-center rounded-xl py-3 sm:py-4 px-4 sm:px-8 text-base sm:text-lg font-bold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400 hover:bg-gray-50 transition-all duration-300"
                    >
                        <span className="sm:hidden">Gefunden</span>
                        <span className="hidden sm:inline">Ich habe etwas gefunden <span aria-hidden="true">→</span></span>
                    </Link>

                </div>
            </div>

                {/* Feature Section */}
                <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 mt-16">
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-16 shadow-lg ring-1 ring-gray-900/5">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">So funktioniert's</h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">
                                In drei simplen Schritte zum Erfolg.
                            </p>
                        </div>

                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </div>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">1. Suchen oder Melden</dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">Durchsuche die Liste der gefundenen Gegenstände oder erstelle einen neuen Eintrag.</p>
                                    </dd>
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </div>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">2. Kontakt aufnehmen</dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">Schreibe dem Finder oder Eigentümer über die Plattform oder E-Mail.</p>
                                    </dd>
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">3. Gegenstand zurückerbekommen</dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">Trefft euch an einem sicheren Ort, um den Gegenstand zurückzugeben oder abzuholen.</p>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Recent Items Section */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Zuletzt Gefunden</h2>
                        <Link to="/found" className="text-md font-semibold text-blue-600 hover:text-blue-400 transition-colors">
                            Alle ansehen <span aria-hidden="true">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentItems.map((item) => (
                            <FoundItemCard key={item.id} item={item} isMobile={false}/>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Home
