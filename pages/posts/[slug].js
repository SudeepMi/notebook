import Image from 'next/image'
import Link from 'next/link'

import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../helpers/api/posts'

export default function Post({ post }) {
  const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="container mt-5 post">
      <h1>{post.title}</h1>
      <div>
        <Image alt={post.author.name} src={post.author.profilePictureUrl} height="40" width="40" />
        <div className='my-4'>
          <strong>
            <Link href={post.author.permalink}>
              <a>{post.author.name}</a>
            </Link>
          </strong>
          <br/>
          <time dateTime={post.createdAt}>{prettyDate}</time>
        </div>
      </div>
        <div className="row">
          <div className="col-md-9 m-auto post-content-banner">
            <Image src={post.imgUrl} alt={post.title} layout='fill' className='img-responsive'  />
          </div>
        </div>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  )
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const author = getAuthorBySlug(post.author)
 
  return {
    props: {
      post: {
        ...post,
        author,
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map(post => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}
