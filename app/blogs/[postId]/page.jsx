import React from 'react';

// TODO: Fetch data from an API Insted of using static data
const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    description: "Learn the fundamentals of React and build your first interactive web application.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    category: "Web Development",
    author: "MD Israfil",
    date: "2026-11-10",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    slug: "understanding-typescript",
    description: "Explore TypeScript features and learn how to write safer and more maintainable code.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    category: "Programming",
    author: "MD Israfil",
    date: "2026-11-12",
    readTime: "7 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 3,
    title: "Why Next.js is Great for Web Development",
    slug: "why-nextjs-is-great",
    description: "Discover how Next.js makes building modern, fast, and SEO-friendly applications easier.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Web Development",
    author: "MD Israfil",
    date: "2026-11-14",
    readTime: "6 min read",
    tags: ["Next.js", "React", "SEO"],
  },
  {
    id: 4,
    title: "Mastering Responsive Web Design",
    slug: "mastering-responsive-web-design",
    description: "Learn how to create responsive websites that look beautiful on mobile, tablet, and desktop.",
    image: "https://images.unsplash.com/photo- responsive-design",
    category: "UI/UX Design",
    author: "MD Israfil",
    date: "2026-11-16",
    readTime: "8 min read",
    tags: ["CSS", "Responsive Design", "UI/UX"],
  },
  {
    id: 5,
    title: "Essential JavaScript Concepts Every Developer Should Know",
    slug: "essential-javascript-concepts",
    description: "Understand essential JavaScript concepts that every frontend developer needs to master.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    category: "Programming",
    author: "MD Israfil",
    date: "2026-11-18",
    readTime: "10 min read",
    tags: ["JavaScript", "ES6", "Web Development"],
  },
];
const PostDetailPage = async({ params }) => {

    const {postId} = await params;

    //TODO : load data from database
    const post = blogsData.find(post => post.id === parseInt(postId));

    console.log(typeof postId , post);

    return (  
        <div>
            <h2>Post Detail Page : {postId}</h2>
            {
                post && <div>
                    <h3>{post.title}</h3>
                    <p>{post.author}</p>
                    <p>{post.description}</p>
                </div>
            }
        </div>
    );
};

export default PostDetailPage;