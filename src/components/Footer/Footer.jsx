import './style/footer-style.css'
import footerimg from './../../assets/image/logo-footer.png'
export default function Footer () {
    return (
       <section className='MH-Footer'>
        <div className="MH-Footer1">
            <div className="div1">
                <img src={footerimg} alt="footer-img" />
                <h4>Head Office</h4>
                <p>Syria - Latakia - grh2+hjx35.5199518</p>
            </div>  
            <div className="div1">
                 <h4>Sales</h4>  
                 <p>contact@focal-x.com +963 953 666 056</p>  
                 <h4>Public Relations</h4>
                 <p>pr@focal-x.com +963 953 666 052</p>
            </div>
            <div className="div1">
                 <h4>Customer Support</h4>  
                 <p>info@focal-x.com +963 953 666 054</p>
                 <h5>Human Resources</h5> 
                 <p>hr@focal-x.com</p>
            </div> 
            <div className="div1">
                <h4>Useful Links</h4>
                <p>Clients & Partners
                  Check Certificat ID
                  Check for employee
                  Our Brand ID guidlines
                </p>
            </div> 
            <div className="icons">
                <h4>Keep In Touch</h4>
                <div className="icon">
                    <div className="icon1"><i class="fa-brands fa-facebook-f"></i></div>
                    <div className="icon1"><i class="fa-brands fa-behance"></i></div>
                    <div className="icon1"><i class="fa-brands fa-linkedin-in"></i></div>
                    <div className="icon1"><i class="fa-brands fa-instagram"></i></div>
                    <div className="icon1"><i class="fa-brands fa-twitter"></i></div>
                </div>
            </div>        
        </div> 
        <div className=" MH-footer2">
            <p>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
            <div className="border">

            </div>
        </div> 
       </section>
    )
}