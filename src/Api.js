// Base server URL
export const ApiServer = 'http://192.168.205.36:8081';

// Generic fetch helper
const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${ApiServer}${endpoint}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null;
    }
};

// Individual API functions
export const MovieData = () => fetchData('/api/movies');
export const CityData = () => fetchData('/api/cities');
export const CastData = () => fetchData('/api/moviecasts')
export const TheaterData = () => fetchData('/api/theaters');
// export const BookingData = () => fetchData('/api/bookings');
// export const UserData = () => fetchData('/api/users');
export const ShowTimeData = () => fetchData('/api/showtimes')

