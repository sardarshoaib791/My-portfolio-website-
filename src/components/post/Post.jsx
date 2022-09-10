import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Quran</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Currently on working stage this website. 
            </span>
            <hr />
            <span className="postDate">1 hours ago</span>
        </div>
        <p className="postDec">TEST Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Accusantium provident repudiandae magnam similique omnis sit maxime ipsam, nam, officiis 
         necessitatibus sapiente asperiores vel blanditiis quis? Cum culpa sapiente dicta possimus.
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Accusantium provident repudiandae magnam similique omnis sit maxime ipsam, nam, officiis 
         necessitatibus sapiente asperiores vel blanditiis quis? Cum culpa sapiente dicta possimus.
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Accusantium provident repudiandae magnam similique omnis sit maxime ipsam, nam, officiis 
         necessitatibus sapiente asperiores vel blanditiis quis? Cum culpa sapiente dicta possimus.
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Accusantium provident repudiandae magnam similique omnis sit maxime ipsam, nam, officiis 
         necessitatibus sapiente asperiores vel blanditiis quis? Cum culpa sapiente dicta possimus.
         
         </p>
    </div>
  )
}
