import './index.css'

const FeedPage = (props) => {
    const {feed} = props
    const {image,title,content} = feed
    return (
        <div className="feed-container">
            <header className='header'>
                <i className="fa-solid fa-ellipsis m-1"></i>
                <i className="bookmark fa-regular fa-bookmark m-1"></i>
                <span className='share link m-1'>
                   <i className="fa-solid fa-link"></i> 
                </span>
                
                <span className='share'>
                    <i className="fa-solid fa-share m-1"></i>
                    Share
                </span>
            </header>
            <img className='feed-page-image' src={image}/>
            <div className='feed-content'>
                <h1>{title}</h1>
                <p>{content}</p>

                <footer className='followup-bg-container'>
                    <div className='followup'>
                        <input placeholder='Ask follow-up' className='followupinput'/>
                        <div className='flex-row'>
                            <div className='probutton mr'>
                                <div className='inline-circle'></div>
                            </div>
                            <span className='mr'>Pro</span>  
                            <i className="icon fa-solid fa-network-wired"></i>
                        </div>
                    </div>
                </footer>
            </div>
            
            
        </div>
    )
}

export default FeedPage