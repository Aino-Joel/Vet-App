import React from 'react';
import { Link } from 'react-router-dom';


function Post() {
  return (
    <div className='post p-4 max-w-4xl mx-auto'>
      <img className='postimg w-full h-64 object-cover rounded-lg' src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='Post' />
      <div className='postInfo mt-4'>
        <div className='postCats flex gap-2'>
          <span className='postCat text-sm text-blue-500 cursor-pointer'>Music</span>
          <span className='postCat text-sm text-blue-500 cursor-pointer'>Life</span>
        </div>
        <span className='postTitle text-2xl font-semibold mt-2 block'><Link to='/singlepost'>lorem me heyyy</Link>
   </span>
        <hr className='my-2'/>
        <span className='postDate text-gray-500 text-sm'>1 hr ago</span>
      </div>
      <p className='postDesc text-gray-700 text-base mt-4 leading-relaxed'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur magnam natus doloribus quas, provident similique. Molestiae impedit maiores nihil velit. Aspernatur reiciendis rerum quod libero sapiente dicta velit deleniti.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque voluptates sint earum consequuntur? Beatae doloremque alias necessitatibus quas dolores perferendis, id est cum saepe, fugit expedita quibusdam provident, impedit asperiores!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, praesentium odio non, harum vero et ratione, cupiditate obcaecati voluptates blanditiis iste explicabo ab minus. Non doloribus illum nesciunt repellendus? Officia!
      </p>
    </div>
  );
}

export default Post;
