import './style/hosting.css'
export default function Hosting () {
    const info = [
        {  id:1,
            title :"Basic",
            title2:"for very small businesses and freelancers.",
            info1:"Disk Space:",
            info2:"500 M.B",
            info3:"Bandwidth:",
            info4:"500 G.B",
            info5:"SubDomains:",
            info6:"Unlimited",
            info7:"Parked Domains:",
            info8:"E-mail Accounts",
            info9:"Cpanel (control panel):",
            info10:"Yes",
            info11:"Money Back Guarantee:",
            info12:"14 Days",
            btn:"You will have 1 Gift",
            head :"card-head1",
            btncolor:"btn-color1"
        },
        {   id:2,
            title :"Pro",
            title2:"for Individuals that need sharing vlogs.",
            info1:"Disk Space:",
            info2:"3000 M.B",
            info3:"Bandwidth:",
            info4:"3 TERA",
            info5:"SubDomains:",
            info6:"Unlimited",
            info7:"Parked Domains:",
            info8:"E-mail Accounts",
            info9:"Cpanel (control panel):",
            info10:"Yes",
            info11:"Money Back Guarantee:",
            info12:"14 Days",
            btn:"1 Gift per/mo for year",
            head :"card-head2",
            btncolor:"btn-color2"
        },
        {   id:3,
            title :"Business",
            title2:"for Team that need sharing and reporting.",
            info1:"Disk Space:",
            info2:"5000 M.B",
            info3:"Bandwidth:",
            info4:"5 TERA",
            info5:"SubDomains:",
            info6:"Unlimited",
            info7:"Parked Domains:",
            info8:"E-mail Accounts",
            info9:"Cpanel (control panel):",
            info10:"Yes",
            info11:"Money Back Guarantee:",
            info12:"14 Days",
            btn:"3 Gifts per/mo for year",
            head :"card-head3",
            btncolor:"btn-color3"
        },
        {    id:4,
            title :"Enterprise",
            title2:"for large companies that need admins & security",
            info1:"Disk Space:",
            info2:"10000 M.B",
            info3:"Bandwidth:",
            info4:"10 TERA",
            info5:"SubDomains:",
            info6:"Unlimited",
            info7:"Parked Domains:",
            info8:"E-mail Accounts",
            info9:"Cpanel (control panel):",
            info10:"Yes",
            info11:"Money Back Guarantee:",
            info12:"14 Days",
            btn:"Just Call Us",
            head:"card-head4",
            btncolor:"btn-color4"
        },
    ]
    return (
        <section className="MH-Hosting">
            <div className="title"><h2>Hosting Pricing</h2></div>
            <div className="MH-Cards">
                        {
                            info.map((item)=> {
                              return  <div key={item.id} className='card-box'>
                                <div className={item.head}></div>
                                <div className="content">
                                    <div className="content-head">
                                    <h4>{item.title}</h4>
                                    <p>{item.title2}</p>
                                    </div>
                                       <p>{item.info1}<span>{item.info2}</span></p>
                                       <p>{item.info3}<span>{item.info4}</span></p>
                                       <p>{item.info5}<span>{item.info6}</span></p>
                                       <p>{item.info7}<span>{item.info6}</span></p>
                                       <p>{item.info8}<span>{item.info6}</span></p>
                                       <p>{item.info9}<span>{item.info10}</span></p>
                                       <p>{item.info11}<span>{item.info12}</span></p>
                                       <div className={item.btncolor}>{item.btn}</div>
                                </div>
                              </div>
                            })
                        }
            </div>
            <div className="Hosting-info">
            <p>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.
                      Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>
            </div>
        </section>
    )
}