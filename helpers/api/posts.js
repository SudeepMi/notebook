import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import remarkHtml from 'remark-html'
import TurndownService from 'turndown';

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
  const UserSlug = String(user.firstName+'-'+user.lastName).toLowerCase().replace(/ /g, '-')
  return {
    name: user.firstName+' '+user.lastName,
    permalink: `/authors/${slug}`,
    profilePictureUrl: fs.existsSync(path.join(process.cwd(), 'data/_users', `${UserSlug}.jpg`)) ? `/data/_users/${UserSlug}.jpg` : "https://images.unsplash.com/photo-1542309667-2a115d1f54c6",
    slug,
  }
}

export function getPostBySlug(slug) {
  const file = fs.readFileSync(path.join(process.cwd(), 'data/_posts', `${slug}.md`), 'utf8')
  const {
    content,
    data,
  } = matter(file)

  const img = remark().parse(content).children.find(node => node.type === 'paragraph' && node.children.find(node => node.type === 'image'))
  const imgUrl = img ? img.children[0].url : 'https://images.unsplash.com/photo-1542309667-2a115d1f54c6'
  // const imgUrl = img.type==='image' || img.children.find(node => node.type === 'image') ? img.children.find(node => node.type === 'image').url : 'https://images.unsplash.com/photo-1542309667-2a115d1f54c6'
  const body = remark().use(remarkHtml).processSync(content).toString('base64')

  return {
    ...data,
    body,
    slug,
    imgUrl,
  }
}
export function createPost(data) {
  const turndownService = new TurndownService()
  const markdown = turndownService.turndown(data.body)
    data.slug = String(data.title).toLowerCase().replace(/ /g, '-')
    if(fs.existsSync(path.join(process.cwd(), 'data/_posts', `${data.slug}.md`))) {
        data.slug = data.slug + '-' + Date.now()
      }
     
      const file = matter.stringify( markdown, {
        title: data.title,
        excerpt: data.body.slice(0, 100).replace(/<\/?[^>]+(>|$)/g, ""),
        createdAt: Date.now("YYYY-MM-DD"),
        author: data.author,
      })
      fs.appendFileSync(path.join(process.cwd(), 'data/_posts', `${data.slug}.md`), file)
      return true;
  // } catch (error) {
  //   console.log(error)
  //    return error;
  // }
 
}
