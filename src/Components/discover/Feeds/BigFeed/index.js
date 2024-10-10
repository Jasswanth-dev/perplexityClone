import './index.css'

const Bigfeed = (props) => {
    const {feed,onClick} = props
    const {title,image,content,postedBy,profileImage} = feed
    console.log(title, image, content)
    return (
        <div onClick={onClick} className="feed-card">
            <img alt={title} className='feed-image' src={image}/>
            <div className='details'>
                <h3>{title}</h3>
                <p>
                    {content}
                </p>
            </div>
            <div className='postedby-container'>
                <div className='postedby'>
                    <img alt='profileImage' src={profileImage} className='profile-img'/>
                    <span>{postedBy}</span>
                </div>
                <i className="bookmark fa-regular fa-bookmark m-1"></i>
            </div>
        </div>
    )
}

export default Bigfeed