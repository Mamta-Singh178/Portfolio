import projectLink1 from '../images/project1.jpg'
import projectLink2 from '../images/project2.jpg'
import projectLink3 from '../images/project3.jpg'


export default function Projects(){

    const projects = [
        {id: 1,
            title: 'Retail Customer Behavior Analysis',
            image: `${projectLink1}`,
            description: `Analysed 3,900 customer transactions records across 18 demographic and behavioural features
to uncover key purchasing patterns and subscription drivers. Cleaned data and segmented
buyers by purchase frequency, shipping choices, and seasonal spending to target high revenue
demographics. Delivered strategic business insights through interactive KPI dashboard on
spending behaviour across age demographics, subscriptions and margin focused discount
strategies. `,
            techStack: 'SQL, Python, Power BI',
            liveLink: 'https://github.com/Mamta-Singh178/Retail-Customer-Behavior-Analysis',
            viewCode: 'https://github.com/Mamta-Singh178/Retail-Customer-Behavior-Analysis'
        },
        
        {id: 2,
            title: 'Churn Analysis & Customer Intelligence',
            image: `${projectLink2}`,
            description: `Engineered an end to end churn analytics pipeline for an OTT subscription dataset (20+ KPIs),
identified 28.6% overall churn rate and surfacing that monthly contract subscribers churned at
55.6%, which is 6.7 times the 8.3% annual contract rate directly attributing $73.94/month in MRR
leakage and $2,047 in CLTV erosion to six at risk customers, enabling a targeted contract
migration retention strategy.`,
            techStack: 'SQL, Python',
            liveLink: 'https://github.com/Mamta-Singh178/Churn-Analysis-and-Customer-Intelligence',
            viewCode: 'https://github.com/Mamta-Singh178/Churn-Analysis-and-Customer-Intelligence'
        },
        
        {id: 3,
            title: 'Zepto E Commerce Data Analysis',
            image: `${projectLink3}`,
            description: `Optimized Ecommerce inventory performance & revenue strategy by analysing over 3,700 SKUs. Identified high value promotion patterns & calculated unit pricing across 9 core categories, revealing top products featured discounts exceeding 50%. Quantified total category revenues & flagged out of stock, high priced inventory, recovering potential revenue loss through targeted restocking insights.`,
            techStack: 'SQL',
            liveLink: 'https://github.com/Mamta-Singh178/Zepto-E-Commerce-Data-Analysis',
            viewCode: 'https://github.com/Mamta-Singh178/Zepto-E-Commerce-Data-Analysis'
        },

    ];

    return(
        <>
        <div className="section-heading">
            <h1 id="projects">Projects</h1>
        </div>
        <div className="project-container center">

            {projects.map((project) => {
                return(
                    <div key={project.id} className={`project edges ${project.id % 2 === 0 ? "left-animation" : "right-animation"}`}>
                        <img src={project.image}  className="project-image" alt="IMG" loading="lazy"></img>
                        <div className="text-area">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="tech-stack"><b>Tech-stack:</b>{project.techStack}</p>
                            <div className="project-buttons">
                            <button onClick={() => window.open(`${project.liveLink}`, "_blank")}>View PPT</button>
                            <button onClick={() => window.open(`${project.viewCode}`, "_blank")}>View Code</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
        </>
    )
}
