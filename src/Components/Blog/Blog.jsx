import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog , handleToBookmark , handleReadingTime}) => {
    const {title,cover_img, readingtime , author , author_img , posteddate , hashtags} = blog;
    return (
        <div className='mb-20 space-y-5'>
            <img className='w-full mb-8' src={cover_img} alt={`${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                    <img className='rounded-full' src={author_img} height={100} width={100} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <h3>{posteddate}</h3>
                    </div>
                </div>
                <div>
                    <span>{readingtime} min read</span>
                    <button onClick={() =>
                    handleToBookmark(blog)} className='ml-4 text-red-600 text-2xl'><CiBookmark /></button>
                </div>
            </div>
           <h2 className='text-2xl'>{title}</h2>
           <p>
            {
                hashtags.map((hash,idx) => <span key={idx}>
                    <a href="">{hash}</a>
                </span>)
            }
            </p> 
            <button onClick={() => handleReadingTime(readingtime)}
             className='text-blue-600 underline'>Mark As Read</button>
        </div>
    );
};
Blog.PropTypes = 
{
   blog: PropTypes.object.isRequired 
}
export default Blog;