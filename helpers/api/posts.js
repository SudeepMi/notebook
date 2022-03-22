import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import remarkHtml from 'remark-html'

export function getAllAuthors() {
  const authorsDirectory = path.join(process.cwd(), 'data/_users')
  const filenames = fs.readdirSync(authorsDirectory)
  const file = fs.readFileSync(path.join(process.cwd(), 'data/_users', filenames[0]), 'utf8')
  const data = JSON.parse(file)
  return data.map(user => {
    
    // get slug from filename
    const slug = String(user.firstName+'-'+user.lastName).toLowerCase().replace(/ /g, '-')

    // return combined frontmatter and slug; build permalink
    return {
      name: user.firstName+' '+user.lastName,
      id: user.id,
      permalink: `/authors/${slug}`,
      profilePictureUrl: "https://images.unsplash.com/photo-1542309667-2a115d1f54c6",
      slug,
    }
  })
}

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'data/_posts')
  const filenames = fs.readdirSync(postsDirectory)

  return filenames.map(filename => {
    const file = fs.readFileSync(path.join(process.cwd(), 'data/_posts', filename), 'utf8')

    // get frontmatter
    const { data } = matter(file)

    // get slug from filename
    const slug = filename.replace(/\.md$/, '')

    // return combined frontmatter and slug; build permalink
    return {
      ...data,
      permalink: `/posts/${slug}`,
      slug,
    }
  })
}

export function getAuthorBySlug(slug) {
  const file = fs.readFileSync(path.join(process.cwd(), 'data/_users', `users.json`), 'utf8')

  const data = JSON.parse(file)
  const user = data.find(user => {
    return String(user.firstName+'-'+user.lastName).toLowerCase().replace(/ /g, '-') === slug
  })
  return {
    name: user.firstName+' '+user.lastName,
    permalink: `/authors/${slug}`,
    profilePictureUrl: `/${slug}.jpg`,
    slug,
  }
}

export function getPostBySlug(slug) {
  const file = fs.readFileSync(path.join(process.cwd(), 'data/_posts', `${slug}.md`), 'utf8')

  const {
    content,
    data,
  } = matter(file)

  const body = remark().use(remarkHtml).processSync(content).toString()

  return {
    ...data,
    body,
    slug,
  }
}
