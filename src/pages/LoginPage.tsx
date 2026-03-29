import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/foundItemsApi";

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Bitte E-Mail und Passwort eingeben.");
            return;
        }

        try {
            setIsSubmitting(true);

            await loginUser({
                email,
                password,
            });

            navigate("/");
            window.location.reload();
        } catch (err: any) {
            if (err.response?.status === 401) {
                setError("Ungültige Login-Daten.");
            } else if (err.response?.data) {
                const backendError = JSON.stringify(err.response.data);
                setError(backendError);
            } else {
                setError("Login fehlgeschlagen.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mx-auto max-w-md px-4 py-10">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h1 className="mb-2 text-2xl font-bold text-gray-900">Login</h1>
                <p className="mb-6 text-sm text-gray-600">
                    Melde dich an, um neue Fundstücke zu erstellen.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                            E-Mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
                            placeholder="name@mail.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                            Passwort
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
                            placeholder="Passwort eingeben"
                        />
                    </div>

                    {error && (
                        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isSubmitting ? "Wird eingeloggt..." : "Login"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Noch kein Konto?{" "}
                    <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                        Jetzt registrieren
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;