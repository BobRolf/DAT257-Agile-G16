import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card shadow-sm" style={{ width: '22rem' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email" placeholder="enter e-mail" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="enter password" />
            </div>
            <div className="d-grid">
            <Link to="/home" className="btn btn-primary">
          log in
        </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

