export default function Skills(){

    const skills = [

        {id: 1,
            title: 'SQL',
            classes : 'fa-solid fa-database skill',
        },
              
        {id: 2,
            title: 'Python',
            classes : 'fa-brands fa-python skill',
        },

        {id: 3,
            title: 'Power BI',
            classes : 'fa-solid fa-chart-simple skill',
        },

        {id: 4,
            title: 'Microsoft Excel',
            classes : 'fa-solid fa-table-list skill',
        },
               
        {id: 5,
            title: 'Google Workspace',
            classes : 'fa-brands fa-google skill',
        },        
        
        {id: 6,
            title: 'Problem Solving',
            classes : 'fa-solid fa-lightbulb skill',
        },
        
        {id: 7,
            title: 'GenAI',
            classes : 'fa-solid fa-robot skill',
        },   
        
        {id: 8,
            title: 'Communication',
            classes : 'fa-solid fa-phone skill',
        },
        
        {id: 9,
            title: 'Documentation',
            classes : 'fa-solid fa-file-pen skill',
        },
        
        {id: 10,
            title: 'Presentations',
            classes : 'fa-brands fa-slideshare skill',
        },
        
        
    ];

    return(
        <>
        <div className="section-heading">
            <h1 id="skills">Skills</h1>
        </div>
        <div className="skills-container center">
            {skills.map((skill) => {
                return (    
                <div key={skill.id} className="tablet bottom-animation">
                    <i className={skill.classes}></i>
                    <p className="skill-text">{skill.title}</p>
                </div>
                )
            })}

        </div>
        
        </>
    )
}
