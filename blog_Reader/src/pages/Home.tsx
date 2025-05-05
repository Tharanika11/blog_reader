import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import './Home.css';

type State = {
  loading: boolean;
  error: string | null;
  posts: Post[];
};

type Action =
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: Post[] }
  | { type: 'FAILURE'; payload: string };

const initialState: State = {
  loading: false,
  error: null,
  posts: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: null };
    case 'SUCCESS':
      return { ...state, loading: false, posts: action.payload };
    case 'FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(1);
  const postsPerPage = 10;
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const visiblePosts = state.posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(state.posts.length / postsPerPage);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch({ type: 'LOADING' });

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({ type: 'SUCCESS', payload: response.data });
      } catch (error) {
        console.error('Error fetching posts:', error);
        dispatch({ type: 'FAILURE', payload: 'Failed to fetch posts' });
      }
    };

    fetchPosts();
  }, []);

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="home-container">
      <h2>Home Page</h2>

      {state.loading && <p>Loading...</p>}
      {state.error && <p className="error">{state.error}</p>}

      <ul className="post-list">
        {visiblePosts.map((post) => (
          <li key={post.id} className="post-card">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="navigation-bar">
  <div className="post-count">
    {startIndex + 1}–{Math.min(endIndex, state.posts.length)} of {state.posts.length}
  </div>
  <button
    onClick={handlePrev}
    disabled={page === 1}
    className="nav-button"
  >
    Previous
  </button>
  <button
    onClick={handleNext}
    disabled={page === totalPages}
    className="nav-button"
  >
    Next
  </button>
</div>

    </div>
  );
}
