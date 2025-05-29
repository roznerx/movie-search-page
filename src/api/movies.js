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

export async function getFavoriteMovies() {
  try {
    const res = await axios.get(`${process.env.REACT_APP_TMDB_API_URL}/account/${process.env.REACT_APP_TMDB_ACCOUNT_ID}/favorite/movies`, {
      params: {
        language: 'es-US', 
        page: 1,
        sort_by: 'created_at.asc',
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
      }
    });

    return res.data;
  } catch (error) {
    console.error('API call failed:', error.message);
  }
}
