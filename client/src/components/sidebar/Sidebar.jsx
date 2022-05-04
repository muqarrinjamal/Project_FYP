import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel quo sint nihil minus,
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
{cats.map(c=>(

        <li className="sidebarListItem">{c.name}</li>
))}
       
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        
      <i className="sidebarIcon fa-brands fa-facebook-square"></i>
      <i className="sidebarIcon fa-brands fa-twitter-square"></i>
      <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
      <i className="sidebarIcon fa-brands fa-instagram-square"></i>
      </div>
      </div>
    </div>
  )
}
