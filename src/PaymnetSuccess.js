import Header from '../components/Header';

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to CinemaSwift</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your ultimate destination for booking movie tickets across multiple cities in India.
                        Select a city to browse theaters and movies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;