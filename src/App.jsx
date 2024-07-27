// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function App() {
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(true);
        }, 10000); // 10 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const closeWelcome = () => {
        setShowWelcome(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Home Page Content</h1>
            {showWelcome && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96 text-center">
                        <h2 className="text-2xl font-bold mb-4">
                            Welcome to our Monitoring tool Web App
                        </h2>
                        <button
                            onClick={closeWelcome}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {/* Main content centered */}
        </div>
    );
}

export default App;