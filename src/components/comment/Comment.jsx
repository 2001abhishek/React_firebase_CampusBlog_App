import React, { useState, useEffect, useContext } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import myContext from '../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import { fireDB } from '../../firebase/FirebaseConfig';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function Comment({ commentText, setcommentText, allComment, setFullName }) {
  const context = useContext(myContext);
  const { user, mode } = context;
  const navigate = useNavigate(); // Initialize useNavigate
  const params = useParams();

  const handlePostComment = async () => {
    if (!user) {
      // Redirect to login if user is not authenticated
      navigate('/adminlogin');
      return;
    }
  
    // Add comment logic
    const commentData = {
      commentText,
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    };
  
    try {
      // Save comment with user's display name
      await addDoc(collection(fireDB, "blogPost/" + `${params.id}/` + "comment"), {
        fullName: user.displayName,
        ...commentData
      });
      // Show success toast
      toast.success('Comment Added Successfully');
      // Clear commentText
      setcommentText('');
      setFullName(''); // Reset full name input
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg lg:text-2xl font-bold"
            style={{ color: mode === 'dark' ? 'white' : 'black' }}>
            Make Comment
          </h2>
        </div>
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 ">
            {user ? (
              <div
                className="px-0 w-full text-sm "
                style={{ color: mode === 'dark' ? 'white' : 'black' }}
              >
                Hii {user.displayName}, feel free to share your thoughts!
              </div>
            ) : (
              <p style={{ color: mode === 'dark' ? 'white' : 'black' }}>
              You need to login to comment!</p>
            )}
          </div>

          <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows={6}
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none"
              placeholder="Write a comment..."
              required
              value={commentText}
              onChange={(e) => setcommentText(e.target.value)}
              
            />
          </div>

          <div className="">
            <Button onClick={handlePostComment}>
              Post comment
            </Button>
          </div>
        </form>

        {/* Display Existing Comments */}
        {allComment.map((comment, index) => (
          <article key={index} className="p-2 mb-6 text-base rounded-lg border border-gray-300"> {/* Added border style */}
            <footer className="flex justify-between items-center mb-">
              <div className="flex items-center my-2 bg-white px-2 py-1 rounded-lg">
                <p className="inline-flex items-center mr-3 text-lg">{comment.fullName}</p>
                <p className="text-sm">{comment.date}</p>
              </div>
            </footer>
            <p className="text-gray-500 text-md">{comment.commentText}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Comment;
