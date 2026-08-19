import thumbnail1 from  "../certificates/Thumbnail1.png"
import thumbnail2 from  "../certificates/Thumbnail2.png"
import thumbnail3 from  "../certificates/Thumbnail3.png"


export default function Certificates(){

    const items = [
        {id: 1, 
            title: 'Data Analytics', 
            description: 'Successfully completed certification, validating technical skills in Problem Solving, SQL, and Python through a standardized coding assessment.', 
            certificatelink: 'https://drive.google.com/file/d/1cYiL-xUDQh_YYJIt8pAIAjSxgwGG_40t/view',
            thumbnail: `${thumbnail1}`
        },
        {id: 2, 
            title: 'Aspire Leaders Program', 
            description: 'Completed a comprehensive course on leadership.', 
            certificatelink: 'https://drive.google.com/file/d/1vbrPtbr3OvGiws5MzjnRHzEwS0SHm_bo/view',
            thumbnail: `${thumbnail2}`
        },
        {id: 3, 
            title: 'McKinsey Forward Program',
            description: 'Completed a program.', 
            certificatelink: 'https://drive.google.com/file/d/1guCuOZK3dFEt9PDzWL9k-cf7-OC0eINu/view',
            thumbnail: `${thumbnail3}`
        },
        
    ];

    return(
        <>
        <div className="section-heading">
            <h1 id="certificates">Certificates</h1>
        </div>
        <div className="certificate-container center">
            {items.map((item) => {
                return (
                    <div key={item.id} className="certificate edges opacity-animation">
                        <img src={item.thumbnail}  className="certificate-image" alt="IMG" loading="lazy" ></img>
                        <div className="text-area-certificate">
                            <h3 className="certificate-title">{item.title}</h3>
                            <p className="certificate-description">{item.description}</p>
                            <button onClick={() => window.open(`${item.certificatelink}`, "_blank")}>View Certificate</button>
                        </div>
                    </div>
                )
            })}
            
        </div>

        </>
    )
}
