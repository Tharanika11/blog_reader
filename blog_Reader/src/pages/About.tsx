export default function About() {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>About This App</h2>
        <div
          style={{
            backgroundColor: '#fff',
            padding: '2rem',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            maxWidth: '700px',
            margin: '2rem auto',
            fontSize: '1.1rem',
          }}
        >
          <p><strong>App Name:</strong> Blog Reader</p>
          <p><strong>Built With:</strong> React, TypeScript, Vite, Axios, React Router DOM</p>
          <p><strong>Features:</strong> 
            <ul>
              <li>Fetch and display posts from a public API</li>
              <li>Use of React Hooks for state management</li>
              <li>Error handling and UI feedback</li>
              <li>Simple routing and navigation</li>
            </ul>
          </p>
          <p><strong>Developer:</strong> Tharanika Perinparasa </p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Tharanika11/blog_reader.git" target="_blank" rel="noreferrer">Project Repository</a></p>
        </div>
      </div>
    );
  }
  