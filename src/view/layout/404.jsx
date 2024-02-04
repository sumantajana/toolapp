import React from 'react'
import { Link } from 'react-router-dom';
import svg404 from '../../assets/images/404.svg';
import HomeLayout from '../layout/homeLayout';
function Page404(props) {
    return <HomeLayout {...props}>
        <div className="page-content d-flex align-items-center justify-content-center page-not-found-container">
            <div className="row w-100 mx-0 auth-page">
                <div className="col-md-8 col-xl-6 mx-auto d-flex flex-column align-items-center">
                    <img src={svg404} className="img-fluid mb-2" alt="404" />
                    <h1 className="font-weight-bold mb-22 mt-2 tx-80 text-muted">404</h1>
                    <h4 className="mb-2">Page Not Found</h4>
                    <h6 className="text-muted mb-3 text-center">Oopps!! The page you were looking for doesn't exist.</h6>
                    <Link to="/" className="btn btn-primary">Back to home</Link>
                </div>
            </div>
        </div>
    </HomeLayout>
}
export default Page404;