import './style/service.css'
export default function Service (props) {
    return (
        <>
        <div className="service">
            <h1 >Our Service</h1>
        </div>
        <div className="cards">
        {
           props.data1.map((item) => {
                return (
                    <div key={item.id} className={item.class}>
                    <img className='img1' src= {item.img1} alt="image" />
                    <div className="title">
                    <h2 className={item.borderbottom}>{item.title1}</h2>
                </div>
                <p>{item.content1}</p>
                <p>{item.content2} </p>
                
                <div className="card-content">
                    <div className="content">
                    <h3>{item.title2}</h3>
                    <p className='s-p'>{item.content3}</p>
                     <h3>{item.title3}</h3>
                    </div>
                     <img src={item.img2} alt="image" />
                </div>
                </div>
                )

            })
        }
</div>
               
                
         </>
    )
}