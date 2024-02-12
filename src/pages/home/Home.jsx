import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection';
import BlogPostCard from '../../components/blogPostCard/BlogPostCard';
import Loader from '../../components/loader/loader';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const blogPostCardRef = useRef(null); // Create a ref for BlogPostCard

  // Simulate loading time (you can replace this with actual data fetching)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when content is ready
    }, 2000); // Example: 2 seconds delay
  }, []);

  useEffect(() => {
    if (!isLoading && blogPostCardRef.current) {
      // Scroll to BlogPostCard after 2 seconds
      setTimeout(() => {
        blogPostCardRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 2000);
    }
  }, [isLoading]);

  return (
    <Layout>
      <HeroSection />
      {isLoading ? (
        <Loader /> // Show loader while content is loading
      ) : (
        <div ref={blogPostCardRef}>
          <BlogPostCard /> {/* Display BlogPostCard when content is ready */}
        </div>
      )}
    </Layout>
  );
}

export default Home;
