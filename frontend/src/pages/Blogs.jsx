import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Best Practices for Goat Farming',
    description: 'Learn the essential techniques and practices for successful goat farming, including breeding, feeding, and disease management.',
    image: 'https://jaguzafarm.com/support/wp-content/uploads/2023/06/Goats-farm-678x450.jpg',
    author: 'John Doe'
  },
  {
    id: 2,
    title: 'Guide to Cattle Breeds',
    description: 'Explore different cattle breeds suitable for various climates and purposes, along with their characteristics and management tips.',
    image: 'https://wakiso.go.ug/wp-content/uploads/2020/10/cattle-keeping.jpg',
    author: 'Jane Smith'
  },
  {
    id: 3,
    title: 'Poultry Farm Management Tips',
    description: 'Essential tips for managing a poultry farm, covering housing, nutrition, disease prevention, and maximizing egg production.',
    image: 'https://www.monitor.co.ug/resource/blob/4296724/e308a0c7f86d34f7fca250fbc56e5249/farming02pix-data.jpg',
    author: 'Alice Johnson'
  },
  {
    id: 4,
    title: 'Dairy Farming',
    description: 'Learn about dairy farming and a few techniques to get you started',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQ9x15GL38XL5iCHyJ0rJJ-HgGf1uP7j43Q&s',
    author: 'Bob Brown'
  },
  {
    id: 5,
    title: 'Feeding Strategies for Livestock',
    description: 'Effective feeding strategies for goats, cattle, and poultry to optimize growth, milk production, and overall health.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTd01MBn4JBZMwOE0Izs2EI_6GSSdeQ6RRQ&s',
    author: 'Emma Lee'
  },
  {
    id: 6,
    title: 'Biosecurity Measures on the Farm',
    description: 'Implement biosecurity measures to protect your livestock from diseases and maintain a healthy environment on your farm.',
    image: 'https://www.researchgate.net/publication/265408463/figure/fig1/AS:464096811327493@1487660710939/A-model-of-Poultry-Farm-Biosecurity-Showing-Nine-Areas-where-Biosecurity-May-be-Assessed.png',
    author: 'Michael Johnson'
  },
  {
    id: 7,
    title: 'Breeding Techniques for Poultry',
    description: 'Learn about effective breeding techniques poultry to improve genetics and productivity.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrC-hgt4KB96UQlL9Re88dtYlJGWzj9i0UQ&s',
    author: 'Sophia Brown'
  },
  {
    id: 8,
    title: 'Market Trends in Livestock Farming',
    description: 'Stay updated on market trends affecting goat, cattle, and poultry farming, including pricing, demand, and marketing strategies.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUUnqCZhU4OzE9QgHzFBtDhOdYDLAM-6dEw&s',
    author: 'David Miller'
  },
  {
    id: 9,
    title: 'Climate Adaptation Strategies for Livestock',
    description: 'Strategies to adapt goat, cattle, and poultry farming practices to different climates and environmental conditions.',
    image: 'https://ars.els-cdn.com/content/image/1-s2.0-S0308521X23001221-ga1.jpg',
    author: 'Olivia Wilson'
  }
];

const BlogCard = ({ id, title, description, image, author }) => (
  <div className="w-full md:w-1/3 p-4">
    <div className="h-full bg-white rounded-lg shadow-md p-6">
      <img className="w-full h-48 object-cover rounded-t-lg mb-4" src={image} alt={title} />
      <Link to='/blogpost' className="text-2xl font-bold mb-2 text-blue-500 hover:underline">
        <h2 className="text-black">{title}</h2>
      </Link>
      <p className="text-gray-700 mb-4">{description}</p>
      <span className="text-gray-600 text-sm">By {author}</span>
    </div>
  </div>
);

const Blogs = () => (
  <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-4xl font-bold text-center mb-12">Livestock Farming Blog</h1>
    <div className="flex flex-wrap -mx-4">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          author={blog.author}
        />
      ))}
    </div>
  </div>
);

export default Blogs;
