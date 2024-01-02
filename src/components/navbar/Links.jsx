import Link from "next/link"
const Links = () =>{
    const links =[
        {
            title:"About Us",
            path:"/about"
        },
        {
            title:"Services",
            path:"/services"
        },
        {
            title:"Login",
            path:"/login"
        },
        {
            title:"Registration",
            path:"/registration"
        },
        {
            title:"Contact Us",
            path:"/contact"
        },
    ]
    return(
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>

    )
}
export default Links;