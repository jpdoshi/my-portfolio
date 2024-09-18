import React from 'react'

const BlogCard = ({ img, gradient, title, url }) => {
  return (
    <div className="box">
      <a href={url} className='link' target='_blank'>
        <div className="blog-card">
          <div className="img-section" style={{ background: `linear-gradient(to bottom, ${gradient[0]}, ${gradient[1]})` }}>
            <img height={120} width={120} src={`/images/${img}`} alt={(title).toLowerCase()} loading='lazy' />
          </div>
          <h3 className="title">{title}</h3>
        </div>
      </a>
    </div>
  )
}

export default BlogCard