import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-150">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div>
                        <Link to="/" className="text-lg font-bold text-gray-900">
                            Lost<span className="text-blue-600">&</span>Found
                        </Link>
                        <p className="mt-4 text-sm text-gray-600 max-w-xs leading-relaxed">
                            Die zentrale Plattform für Dornbirn und Umgebung. 
                            Helfen wir uns gegenseitig, verlorene Dinge wiederzufinden.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Navigation</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link to="/" className="text-base text-gray-600 hover:text-blue-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/lost" className="text-base text-gray-600 hover:text-blue-600 transition-colors">
                                    Verloren melden
                                </Link>
                            </li>
                            <li>
                                <Link to="/found" className="text-base text-gray-600 hover:text-blue-600 transition-colors">
                                    Gefundenes ansehen
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Kontakt</h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center gap-2 text-base text-gray-600">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Campus Dornbirn
                            </li>
                            <li>
                                <a href="mailto:projekt@fhv.at" className="flex items-center gap-2 text-base text-gray-600 hover:text-blue-600 transition-colors">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    fortnite.LucianBalls@F1Racist.at
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-12 border-t border-gray-120 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Lost & Found Dornbirn
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;