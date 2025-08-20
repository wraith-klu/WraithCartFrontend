import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f5f7fa'
        }}>
            <h1>404 - Page Not Found</h1>
            <button
                onClick={() => navigate('/')}
                style={{
                    padding: '10px 20px',
                    marginTop: '20px',
                    background: '#8B4513',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Go Home
            </button>
        </div>
    );
}

export default ErrorPage;
