import axios from 'axios';

export async function getMovies(query, page = 1) {
  try {
    const res = await axios.get(`${process.env.REACT_APP_TMDB_API_URL}/search/movie`, {
      params: {
        query: query, 
        include_adult: false, 
        language: 'en-US', 
        page: page,
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
      }
    });

    return res.data;
  } catch (error) {
    console.error('API call failed:', error.message);
    return { results: [], total_pages: 0 };
  }
}
