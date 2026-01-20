import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold">404</h1>
            <p className="mt-2 text-gray-600">
                Seite nicht gefunden
            </p>

            <Link
                to="/"
                className="inline-block mt-4 text-blue-600 underline"
            >
                Zurück zur Startseite
            </Link>
        </div>
    )
}

export default NotFound
