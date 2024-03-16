import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 p-4 ml-4 mt-4 rounded-xl">
            <div>
                <h3 className="text-4xl text-center">Reading Time : {readingTime}</h3>
            </div>
            <h1 className="text-3xl">Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;