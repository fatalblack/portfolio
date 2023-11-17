import Badge from 'react-bootstrap/Badge';

const WebItem = (props) => {
    return(
    <div className="webs-item-container" style={{backgroundImage:`url(${props.thumbUrl})`}}>
        <div className="webs-item-data-container">
            <div className="webs-item-data">
                <div className="webs-item-title">{props.title}</div>
                <div className="webs-item-description">{props.description}</div>
                <div className="webs-item-techs-container">
                    <div className="webs-item-techs-list">
                        {
                            props.techs.map((tech) => {
                                return (<Badge key={tech} bg="light" className='webs-item-tech-badge'>{tech}</Badge>);
                            })
                        }
                    </div>
                </div>
                <div className="webs-item-navbar">
                    <a href={props.targetUrl} target="_blank" rel="noreferrer" className="webs-item-button-goto">Ver sitio</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WebItem