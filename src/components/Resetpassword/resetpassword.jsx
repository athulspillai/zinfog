import React from 'react';
import './resetpassword.css';
import logo1 from '../../assets/images/Group 366.png';
import logo2 from '../../assets/images/Vector 7.png';
import logo3 from '../../assets/images/Vector 6.png';
import logo6 from '../../assets/images/Mask group.png';
import logo4 from '../../assets/images/Vector 5.png';
import { Link } from 'react-router-dom';

function Reset() {
    return (
        <div className='reset-page'>
            <div className='reset-card'>
                <div className='reset-body'>
                    <div className='card-logo1 text-right'>
                        <img src={logo2} alt='logo2' className='reset-logo2' />
                    </div>
                    <div className='card-logo text-center'>
                        <img src={logo1} alt='logo1' className='logo1' />
                    </div>
                    <div className='card-logo2 text-left'>
                        <img src={logo3} alt='logo3' className='logo3' />
                    </div>
                    <div className='card-forms'>
                        <h5 className="card-title text-center">Reset Password</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="userName">Email Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Email Id'
                                    id="userName"
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary card-button">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='reset-password text-center mt-3'>
                        <Link to={'/'}>
                            <a>Back To Login</a>
                        </Link>
                    </div>
                    <div className='card-logo3 text-center mt-3'>
                        <img src={logo4} alt='logo4' />
                        <div className='mobile-number'>
                            <i className="fa-solid fa-phone"></i>
                            (91+)9288008801
                        </div>
                    </div>
                </div>
            </div>
            <div className='reset-images'>
                <img src={logo6} alt='logo6' />
            </div>
        </div>
    );
}

export default Reset;
