import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="" className="SinglePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet   
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Auther:<b>Shoaib</b></span>
          <span className="singlePostDate">1 hours ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ex. Modi minus, earum alias, 
          eaque libero numquam amet sed maxime ratione quam laborum. Inventore unde voluptas, ullam quis iste quod.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ex. Modi minus, earum alias, 
          eaque libero numquam amet sed maxime ratione quam laborum. Inventore unde voluptas, ullam quis iste quod.
          eaque libero numquam amet sed maxime ratione quam laborum. Inventore unde voluptas, ullam quis iste quod.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ex. Modi minus, earum alias, 
          eaque libero numquam amet sed maxime ratione quam laborum. Inventore unde voluptas, ullam quis iste quod.
          eaque libero numquam amet sed maxime ratione quam laborum. Inventore unde voluptas, ullam quis iste quod.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ex. Modi minus, earum alias, 
          eaque libero numquam amet sed maxime ratione quam laborum. Inventore unde voluptas, ullam quis iste quod.
        </p>
      </div>
    </div>
  )
}
