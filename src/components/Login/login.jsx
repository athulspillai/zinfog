import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import logo1 from '../../assets/images/Group 366.png';
import logo2 from '../../assets/images/Vector 7.png';
import logo3 from '../../assets/images/Vector 6.png';
import logo4 from '../../assets/images/Vector 5.png';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        if (userName === 'athul' && password === '123') {
            setError('Login Successful with hardcoded credentials');
            setLoading(false);
            navigate('/dashboard'); 
            return;
        }

        try {
            const response = await axios.post(
                'http://3.110.171.91/api/b2b/login',
                new URLSearchParams({
                    client_id: 'ei0gvH1bk8wNVj0xqKgtGVzxa3yWXa',
                    client_secret: 'Yjq2KXplGi6Niarcp1gn6PP7OrMDlP',
                    user_name: userName,
                    password: password,
                    grant_type: 'client_credentials',
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            if (response.data.result.status === 'ok') {
                console.log('Login Successful:', response.data.result.data);
                navigate('/dashboard'); 
                setError(response.data.result.message || 'Login failed');
            }
        } catch (error) {
            setError('Wrong Credentials! Your email ID or password entered is wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='login-page d-flex justify-content-center align-items-center'>
            <div className="card">
                <div className="card-body">
                    <div className='card-logo1'>
                        <img src={logo2} alt='logo2' className='logo2' />
                    </div>
                    <div className='card-logo text-center'>
                        <img src={logo1} alt='logo1' className='logo1' />
                    </div>
                    <div className='card-logo2 text-left'>
                        <img src={logo3} alt='logo3' className='logo3' />
                    </div>
                    <div className='card-heading text-center'>
                        Report Download Portal
                    </div>
                    <div className='card-form'>
                        <h5 className="card-title text-center">Login</h5>
                        <form onSubmit={handleLogin}>
                            <div className="form-group reset-form-group">
                                <label htmlFor="userName">User Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter user name'
                                    id="userName"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder='Password'
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary card-button" disabled={loading}>
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                        <div className='reset-password text-center mt-3'>
                            <Link to={'/resetpassword'}>
                                Reset Password?
                            </Link>
                        </div>
                    </div>
                    {error && <div className="error-message text-center">{error}</div>}
                    <div className='card-logo3 text-center mt-3'>
                        <img src={logo4} alt='logo4' />
                        <div className='mobile-number'>
                            <i className="fa-solid fa-phone"></i>
                            (91+)9288008801
                        </div>
                    </div>
                    <div className='card-footers text-center mt-3'>
                        I hereby agree and accept the <a href="#terms" className="link-blue">Terms of service</a> and <a href="#privacy" className="link-blue">Privacy policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;



