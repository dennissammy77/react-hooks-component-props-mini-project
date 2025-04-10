import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
      {posts && posts?.map((post,idx)=>{
        return (
          <Article post={post} key={idx}/>
        )
      })}
    </main>
  )
}

export default ArticleList
