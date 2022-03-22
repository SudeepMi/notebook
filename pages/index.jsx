import { userService } from 'services';
import { Link } from 'components';
import { Trending } from 'components/Trending';

export default Home;

function Home() {
    return (
        <div>
        <div className="p-4 jumbotron d-flex min-h-50 bg-brand">
            <div className="align-items-center container d-flex justify-content-center">
                <div className="row d-flex w-100 justify-content-between p-5">
                        <div className='left mt-5'>
                        <h1 className='landing_welcome_text'>Stay Curious</h1>
                        <button className='btn btn-large bg-dark btn-block text-white mt-5'>START READING</button>
                        </div>
                        <div className='right'>
                            <img src='/landing.png' alt='curious' width={400} />
                        </div>
                </div>
            </div>
        </div>
        <Trending />
        </div>
    );
}
