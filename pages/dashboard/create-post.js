import React from 'react'
import dynamic from 'next/dynamic'
import { Button, Input } from '@mui/material'
import { userService } from 'services'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})


  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]


function CreatePost() {
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const user = userService.userValue
  const PublishHandler = () => {

    
    setIsLoading(true)
    const data = {
      title,
      body,
      author: String(user.firstName + '-' + user.lastName).toLowerCase().replace(/ /g, '-'),
    }
    fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    }).then(res => {
      setIsLoading(false)
      if (res.status === 200) {
        console.log(res)
        console.log('success')
      }
    })
    console.log(data)
  }
  
  return (
    <div className='container my-3'>
        <h1>Create Post</h1>
        <hr />
        <div className="row">
            <div className="col-md-12">
              <Input placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} fullWidth={true} className="font-weight-bold text-capitalize my-4" /><br/>
            <QuillNoSSRWrapper  
              modules={modules} 
              formats={formats} 
              theme="snow" 
              placeholder='Start typing.....' 
              value={body} 
              onChange={e=>setBody(e)}
              onChangeSelection={e=>console.log(e)}
               />
          </div>
          </div> 
          <div className='row'>
            <div className='col-md-12'>
              <button className='btn btn-secondary bg-brand mt-4' onClick={()=>PublishHandler()}>
                PUBLISH
              </button> 
    </div>
    </div></div>
  )
}

export default CreatePost