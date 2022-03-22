import Image from 'next/image'
import Link from 'next/link'

import { getAllAuthors, getAllPosts } from '../../helpers/api/posts'

export default function Authors({ authors }) {
  return (
    <div className='container mt-4'>
    <div className='row'>
      <div className='col-md-12'>
        <h3>Authors</h3>
        </div>
    </div>
    <div className="d-flex mt-2 justify-content-between">
      {authors.map(author => (
        <div key={author.slug}>
          <h2>
            <Link href={author.permalink}>
              <a>{author.name}</a>
            </Link>
          </h2>

          <Image alt={author.name} src={author.profilePictureUrl} height="80" width="80" />

          <p>{author.posts.length} post(s)</p>

          <Link href={author.permalink}>
            <a>Go to profile →</a>
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      authors: getAllAuthors().map(author => ({
        ...author,
        posts: getAllPosts().filter(post => post.author === author.slug),
      })),
    }
  }
}
