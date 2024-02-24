import {Link } from 'react-router-dom'
function Navbar() {
    const links =[
        {title: "Home" , path :'/'},
        {title: "About" , path :'/about'},
        {title: "Contact" , path :'/contact'},
        {title: "Products" , path :'/products'},
    ]
    return(
        <div className = "navbar" >
       {
        links?.map((link)=>{
         return (
        <Link to={link.path} key={link.title}> {link.title} </Link>
        )
        })
       }
       
           
        </div>
    )
}

export { Navbar }