import {useState} from "react";
import {Link} from "react-router-dom";
import type {FoundItem} from "../types";
import {addUserFoundItem} from "../storage/foundItemsStorage";

const Lost = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const item: FoundItem = {
            id: crypto.randomUUID(),
            title: String(form.get("title") ?? "").trim(),
            category: String(form.get("category") ?? "Sonstiges"),
            color: String(form.get("category") ?? "Keine Angabe"),
            description: String(form.get("description") ?? "").trim(),
            location: String(form.get("location") ?? "").trim(),
            contactName: String(form.get("contact-name") ?? "").trim(),
            contactEmail: String(form.get("email") ?? "").trim(),
        };

        addUserFoundItem(item);

        setSubmitted(true);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
                <div className="rounded-full bg-green-100 p-6 mb-6">
                    <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meldung erfolgreich erstellt!</h2>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                    Wir haben deine Verlustmeldung aufgenommen. Sobald jemand einen passenden Gegenstand findet, wirst
                    du benachrichtigt.
                </p>
                <div className="flex gap-4">
                    <Link to="/"
                          className="rounded-xl bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-colors">
                        Zurück zur Startseite
                    </Link>
                    <Link to="/found"
                          className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
                        Fundstücke durchsuchen
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">

            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Verlust melden
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Beschreibe den Gegenstand so genau wie möglich, damit er leichter zugeordnet werden kann.
                </p>
            </div>

            <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                <form onSubmit={handleSubmit} className="px-4 py-6 sm:p-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                Gegenstand (Titel)
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    required
                                    placeholder="z.B. Schwarzes iPhone 12, Roter Rucksack..."
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                Kategorie
                            </label>
                            <div className="mt-2">
                                <select
                                    id="category"
                                    name="category"
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                >
                                    <option>Elektronik</option>
                                    <option>Kleidung</option>
                                    <option>Taschen & Rucksäcke</option>
                                    <option>Schlüssel</option>
                                    <option>Dokumente</option>
                                    <option>Sonstiges</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Beschreibung
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    placeholder="Besondere Merkmale, Kratzer, Inhalt..."
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                Ort des Verlusts (ungefähr)
                            </label>
                            <div className="mt-2">
                                <select
                                    id="location"
                                    name="location"
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                >
                                    <option>Weiß nicht genau</option>
                                    <option>FH Vorarlberg (Campus)</option>
                                    <option>Bahnhof Dornbirn</option>
                                    <option>Marktplatz</option>
                                    <option>Messepark</option>
                                    <option>Stadtbus</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full border-t border-gray-900/10 pt-8 mt-4">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Kontaktinformationen</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Wie können wir dich erreichen, wenn es
                                gefunden wird?</p>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="contact-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Dein Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="contact-name"
                                    id="contact-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                E-Mail Adresse
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-8">
                        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">
                            Abbrechen
                        </Link>
                        <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                        >
                            Verlust melden
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Lost;