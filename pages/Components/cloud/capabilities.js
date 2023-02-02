import styles from '../../../styles/cybersecurity/Services.module.css';
import Accordion from 'react-bootstrap/Accordion';

export default function Capabilities() {

    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth}`}>

                <Accordion style={{ maxWidth: '1200px', margin: 'auto' }}>
                    <p className={`${styles.sectionBody}`}>Our capabilities</p>
                    <p className={`${styles.sectionBody}`} style={{ borderLeft: '4px solid red', paddingLeft: '10px' }}>We power your success with our unmatched partnerships and cloud capabilities.</p>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b><h2>01. Cloud Strategy and Transformation</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" className='w-100' />
                                </div>
                                <div className="col-sm-8">
                                    <p className={`${styles.sectionBody} text-muted`}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, culpa voluptatum. Pariatur laudantium eaque id veritatis reiciendis necessitatibus, quis adipisci!
                                    </p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b><h2>02. TCS and AWS Cloud</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" className='w-100' />
                                </div>
                                <div className="col-sm-8">
                                    <p className={`${styles.sectionBody} text-muted`}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, culpa voluptatum. Pariatur laudantium eaque id veritatis reiciendis necessitatibus, quis adipisci!
                                    </p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b><h2>03. TCS and Google Cloud</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" className='w-100' />
                                </div>
                                <div className="col-sm-8">
                                    <p className={`${styles.sectionBody} text-muted`}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, culpa voluptatum. Pariatur laudantium eaque id veritatis reiciendis necessitatibus, quis adipisci!
                                    </p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><b><h2>04. TCS and Microsoft Cloud</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" className='w-100' />
                                </div>
                                <div className="col-sm-8">
                                    <p className={`${styles.sectionBody} text-muted`}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, culpa voluptatum. Pariatur laudantium eaque id veritatis reiciendis necessitatibus, quis adipisci!
                                    </p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><b><h2>05. Enterprise Cloud</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" className='w-100' />
                                </div>
                                <div className="col-sm-8">
                                    <p className={`${styles.sectionBody} text-muted`}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, culpa voluptatum. Pariatur laudantium eaque id veritatis reiciendis necessitatibus, quis adipisci!
                                    </p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}
