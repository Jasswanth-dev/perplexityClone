import './index.css'

const Smallfeed = (props) => {
    const {feed,onClick} = props
    const {title,image,content,profileImage,postedBy} = feed
    return (
        <div onClick={onClick} className="smallfeed-card">
            <img alt='...' className='image' src={image}/>
            <div className='details'>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className='postedby-container'>
                <div className='postedby'>
                    <img alt='profile' src={profileImage} className='profile-img'/>
                    <span>{postedBy}</span>
                </div>
                <i className="bookmark fa-regular fa-bookmark m-1"></i>
            </div>
        </div>
        )
}

export default Smallfeed;