import React from 'react'
import './style/style.css'
import img1 from './../../assets/image/gameBoy-min.png'
import img2 from './../../assets/image/pattren.png'
import img3 from './../../assets/image/pressStart.svg'
import img4 from './../../assets/image/fotter.svg'
import img5 from './../../assets/image/gamefor-mobile.png'
export default function Hero () {
    return (
       <div className="hero">
        <div className="hero1">
        <div className="content">
            <h2>Hey !! Mario still here, But don’t forget that</h2>
            <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
              Branding, Digital Marketing, Web/App Development, Ui/Ux
              Content creation, Graphic design, Social media and More........
              So you can take a tour in our website, OR just <span>Press Start :)</span> </p>
        </div>
        <div className="image-game">
            <a href="#">START</a>
            <img className='img1' src={img1} alt="image-game"/>
            <img className='img2' src={img2} alt="image-game"/>
            <img className='img3' src={img3} alt="image-game"/>
        </div>
        <div className="image-game2">
            <img className='img3' src={img5} alt="image-game"/>
        </div>
        </div>
        <div className="hero2">
           <div className="icons">
            <div className="icon"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="icon"><i class="fa-brands fa-behance"></i></div>
            <div className="icon"><i class="fa-brands fa-linkedin-in"></i></div>
            <div className="icon"><i class="fa-brands fa-instagram"></i></div>
            <div className="icon"><i class="fa-brands fa-twitter"></i></div>
           </div>
           <div className="scroll">
           <i class="fa-solid fa-computer-mouse"></i>
           <i class="fa-solid fa-chevron-down"></i>
           <p>Scroll To Discover</p>
           </div>
           <div className="copy">
            <p>© 2021 - 2022 focal X agency All Right Reserved</p>
           </div>
        </div>
       </div>

    )
}