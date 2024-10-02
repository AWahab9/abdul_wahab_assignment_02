import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProfilePic from "../public/profilepic.jpg";



export default function Home() {
  return (
    

    <div>
      <Header/>
      <div className="Introduction text-2xl ml-[100px] md:ml-[50px] mt-[100px] font-serif text-black">
      Hi,
        <br/>
        My Name is <span className="skyblueColor" >ABDUL WAHAB KHAN</span>
    <br/>I am a <span className="DarkblueClor">GIAIC </span>student.
    <br/>I want to become a <span className="BlueColor">Professional Next Js Developer</span>

      </div>
      <div>
          <Image
          src={ProfilePic}
          alt="myPic"
          width={200}
          height={200}   
       className="w-[20]-[20px]  float-right  mr-[200px] mt-[-200px] ml-[100px] md:ml-[100px] rounded-full mb-2 bg-brown-200"
       />
      <Footer/> 
        </div>
      
    
    </div>
 
  );
}
