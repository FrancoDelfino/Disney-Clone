import axios from 'axios';

const getTrendingMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE5Mzg0MjY5NTUxNjNhY2U3NjUyZTc4OTVmNWM2YSIsIm5iZiI6MTc0MDA4NzU4My4zMzEsInN1YiI6IjY3YjdhMTFmNDQ0ZGQ3ZmNlZmJhMjgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BN1SHU7qevDI2hkTMpgeTx9sT1auGzVYarR2gi_rIK4'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.results; // Retorna solo los resultados
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Lanza el error para que el componente lo maneje
  }
};

export { getTrendingMovies };
 