import {useState} from 'react';

export default function ReadMore(){

    const [isExpanded, setIsExpanded] = useState(false);

    const text = `Aspiring Data Analyst, with strong foundation in SQL and making sense of data to solve real world
business problems. A quick learner & natural problem solver who enjoys tackling tricky tasks,
collaborating effectively with teams. A strong communicator eager to learn through hands on projects &
learn from mentors. Passionate about uncovering patterns, mapping the data lifecycle, and translating
complex data into clear and actionable recommendations to measure business impact.`;

    const maxLength = 120;

    function toggleReadMore() {
        setIsExpanded(!isExpanded);
    }

    const displayText = isExpanded ? text : (text.substring(0, maxLength));

    return(
        <>
        <div className="section-heading">
            <h1 id="about">About me</h1>
        </div>
        <div className="readmore-container center">
            <p className="readmore-description">
                {displayText}

                {text.length > maxLength && (
                <span onClick={toggleReadMore} className="readmore-button">
                    {isExpanded ? ' read less' : ' ...read more'}
                </span>
            )}

            </p>
            
        </div>
        </>
    )
}
