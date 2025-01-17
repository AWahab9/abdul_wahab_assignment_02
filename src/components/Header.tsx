import Link from "next/link";


export default function Header(){
    return(
        <div className="header" >
            <ul className="header-buttons">
               <li> <Link href="/">Home</Link></li>
                <li> <Link href="/portfolio">Portfolio</Link></li>
                <li> <Link href="/about-us">About us</Link></li>
                <li> <Link href="/contact-us">Contact us</Link></li>
                <li> <Link href="/career">Career</Link></li>
                
           </ul>
    
        </div>
    );
}