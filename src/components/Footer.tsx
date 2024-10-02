import Link from "next/link";

export default function Footer(){
    return(
        <div className="footer">
            <ul className="footer-buttons">
                <li> <Link href="/">Contact details</Link></li>
                <li> <Link href="/address">Address</Link></li>
                <li> <Link href="/email">Email</Link></li>
                

           </ul>
           
        </div>
    )
}
