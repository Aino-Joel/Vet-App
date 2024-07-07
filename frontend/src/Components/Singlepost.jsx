import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import the edit and delete icons

function Singlepost() {
  return (
    <div className='singlePost p-4 max-w-4xl mx-auto'>
      <div className='singlePostWrapper relative'>
        <h1 className='singlePostTitle text-3xl font-bold mb-4'>
          Lorem ipsum dolor sit amet
          
        </h1>
        <img className='singlePostimg w-full h-64 object-cover rounded-lg' src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='Post' />
        <div className='singlePostInfo mt-4'>
          <span className='singlePostAuthor text-sm text-gray-700'>
            Author: <b>Rehemah</b>
          </span>
          <span className='singlePostDate text-sm text-gray-500 ml-4'>1 hr ago</span>
        </div>
        <p className='singlePostDesc text-gray-700 text-base mt-4 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum porro magnam, dicta maxime eos! Accusantium itaque illo veniam amet consectetur inventore nihil sed magni consequuntur eos, doloremque saepe laborum?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum adipisci obcaecati neque tempora nihil numquam reiciendis, voluptas omnis odio facere assumenda architecto quibusdam, quae iusto! Culpa vitae quia vero iusto?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad dolorem praesentium quidem, assumenda officia tempora mollitia nihil adipisci sequi eos atque quasi at nulla! Laboriosam perspiciatis et tempore autem.
        </p>
        <div className='singlePostEdit top-0 right-0 flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <FontAwesomeIcon icon={faEdit} className='w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700' />
              <span className='text-gray-500 cursor-pointer hover:text-gray-700'>Edit</span>
            </div>
            <div className='flex items-center gap-1'>
              <FontAwesomeIcon icon={faTrash} className='w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700' />
              <span className='text-gray-500 cursor-pointer hover:text-gray-700'>Delete</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Singlepost;
