import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';
import Comment from '../../components/comment/Comment';


function BlogInfo() {

  const context = useContext(myContext);
  const { mode, setloading, loading } = context;

  const params = useParams()
  // console.log(params.id)

  const [getBlogs, setGetBlogs] = useState();

  const getAllBlogs = async () => {
    setloading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "blogPost", params.id))
      if (productTemp.exists()) {
        setGetBlogs(productTemp.data());
      } else {
        console.log("Document does not exist")
      }
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  useEffect(() => {
    getAllBlogs();
    window.scrollTo(0, 0)
  }, []);



  //* Create markup function 
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <Layout>
      <section className="rounded-lg h-full overflow-hidden max-w-4xl mx-auto px-4 ">
        <div className=" py-4 lg:py-8">
        {loading ?
            <Loader />
            :
            <div >
                {/* Thumbnail  */}
                <img alt="content" className="mb-3 rounded-lg h-full w-full"
                  src={getBlogs?.thumbnail}
                />
                {/* title And date  */}
                <div className="flex justify-between items-center mb-3">
                  <h1 style={{ color: mode === 'dark' ? 'white' : 'black' }}
                    className=' text-xl md:text-2xl lg:text-2xl font-semibold'>
                    {getBlogs?.blogs?.title}
                  </h1>
                  <p style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                    {getBlogs?.date}
                  </p>
                </div>
                <div
                  className={`border-b mb-5 ${mode === 'dark' ?
                        'border-gray-600' : 'border-gray-400'}`}
                />
                {/* blog Content  */}
                <div className="content">
                  <div
                    className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                        ${mode === 'dark' ? '[&>h1]:text-[#ff4d4d]' : '[&>h1]:text-black'}
                        ${mode === 'dark' ? '[&>h2]:text-white' : '[&>h2]:text-black'}
                        ${mode === 'dark' ? '[&>h3]:text-white' : '[&>h3]:text-black'}
                        ${mode === 'dark' ? '[&>h4]:text-white' : '[&>h4]:text-black'}
                        ${mode === 'dark' ? '[&>h5]:text-white' : '[&>h5]:text-black'}
                        ${mode === 'dark' ? '[&>h6]:text-white' : '[&>h6]:text-black'}
                        ${mode === 'dark' ? '[&>p]:text-[#7efff5]' : '[&>p]:text-black'}
                        ${mode === 'dark' ? '[&>ul]:text-white' : '[&>ul]:text-black'}
                        ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}
                        ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}
                        `}
                    dangerouslySetInnerHTML={createMarkup(getBlogs?.blogs?.content)}>
                  </div>
              </div>
            </div>
          }
        </div>
        <Comment/>
      </section>
    </Layout>
  )
}

export default BlogInfo
