import React from 'react'

function BlogCard({title , description , writenBy , date , index}) {
  return (
    <div className='flex flex-col gap-2 border-black border-2 border-solid p-2'>
        <p>{title}</p>
        <div className='flex flex-col gap-1 justify-center p-2'>
            <div className='flex flex-col gap-1 justify-center p-2'>
                <label aria-label='' id={`desc-${index}`}>Description</label>
                <p aria-labelledby={`desc-${index}`}>{description}</p>
            </div>
            <div className='flex flex-col gap-1 justify-center p-2'>
                <label aria-label='' id={`writeby-${index}`}>WritenBy</label>
                <p aria-labelledby={`writeby-${index}`}>{writenBy}</p>
            </div>
            <div className='flex flex-col gap-1 justify-center p-2'>
                <label aria-label='' id={`date-${index}`}>Date</label>
                <p aria-labelledby={`date-${index}`}>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard