import { getAllPosts } from 'helpers/api'
import Image from 'next/image'
import Link from 'next/link'
import { userService } from 'services'



export default function Dashboard({ authors }) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Dashboard</h3>
                    <hr />
                </div>
            </div>
            <div className="row p-4">
                <div className="col-md-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Posts</h5>
                            <p className="card-text">
                                <Link href="/posts">
                                    <a>Go to posts →</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Create New Post</h5>
                            <p className="card-text">
                                <Link href="/dashboard/create-post">
                                    <a>Create →</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Comments</h5>
                            <p className="card-text">
                                <Link href="/posts">
                                    <a>All Comments →</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Monetization</h5>
                            <p className="card-text">
                                <Link href="/posts">
                                    <a>View →</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function getStaticProps() {
    return {
      props: {
        post: getAllPosts().map(post => (
            post.author === userService.user.username
        )),
      }
    }
  }
  

