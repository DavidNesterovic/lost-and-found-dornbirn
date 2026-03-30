import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser, isLoggedIn } from "../api/foundItemsApi";

type Props = {
    children: React.ReactNode;
};

const ProtectedAdminRoute = ({ children }: Props) => {
    const [loading, setLoading] = useState(true);
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const checkAdmin = async () => {
            if (!isLoggedIn()) {
                setAllowed(false);
                setLoading(false);
                return;
            }

            try {
                const currentUser = await getCurrentUser();
                setAllowed(currentUser.isAdmin);
            } catch {
                setAllowed(false);
            } finally {
                setLoading(false);
            }
        };

        checkAdmin();
    }, []);

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-10 text-gray-500">
                Checking permissions...
            </div>
        );
    }

    if (!allowed) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedAdminRoute;