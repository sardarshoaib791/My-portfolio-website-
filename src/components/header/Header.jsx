import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & js</span>
            <span className="headerTitleLg">Blog</span>

        </div>
        <img className="headerImg" src=" https://picsum.photos/seed/picsum/200/300" alt="" />
    </div>
  )
}
