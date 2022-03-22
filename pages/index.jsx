import { userService } from 'services';
import { Link } from 'components';
import { Trending } from 'components/Trending';
import Image from 'next/image';
import { getAllAuthors, getAllPosts } from 'helpers/api/posts'

export default Home;

function Home({ authors, posts }) {

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
                            <Image src='/landing.png' alt='curious' width={400} height="300" />
                        </div>
                </div>
            </div>
        </div>
        <Trending authors={authors} posts={posts} />
        </div>
    );
}


export function getStaticProps() {
    return {
      props: {
        authors: getAllAuthors().map(author => ({
          ...author,
          posts: getAllPosts().filter(post => post.author === author.slug),
        })),
        posts: getAllPosts(),
      }
    }
  }
  
