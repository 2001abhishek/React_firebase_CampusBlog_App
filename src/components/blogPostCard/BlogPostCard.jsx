import { Button } from '@material-tailwind/react'
import React, { useContext, useState } from 'react'
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router-dom';

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog  } = context;

  const navigate = useNavigate();

  const [getBlogs, setGetBlogs] = useState();

  //* Create markup function 
  function createMarkup(c) {
    return { __html: c };
  }

  

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">

          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}


           {getAllBlog.length>0
           ? <>{getAllBlog.map((item, index)=>{
            console.log(item)
            const{thumbnail,date, id } = item
            return(
              <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
                className={`h-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-3 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                    ? 'shadow-gray-700'
                    : 'shadow-xl'
                  } 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img 
                onClick={()=> navigate(`/bloginfo/${id}`)}
                className=" w-full" src={thumbnail} alt="blog" />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {date}
                  </h2>

                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {item.blogs.title}
                  </h1>

                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {item.blogs.cardesc}
                  </p>
                  <a onClick={()=> navigate(`/bloginfo/${id}`)} 
                   class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            )
           })}</>
           :<h1>Not Found</h1>}
          </div>

          {/* See More Button  */}
          <div className="flex justify-center my-5">
            <Button
              style={{
                background: mode === 'dark'
                  ? 'rgb(226, 232, 240)'
                  : 'rgb(30, 41, 59)',
                color: mode === 'dark'
                  ?
                  'rgb(30, 41, 59)'
                  : 'rgb(226, 232, 240)'
              }}>
              See More
            </Button>
          </div>
        </div>
      </section >
    </div >
  )
}

export default BlogPostCard