import styles from '../../../styles/cybersecurity/Services.module.css';
import Accordion from 'react-bootstrap/Accordion';

export default function Solutions() {

    return (
        <div className={`${styles.ContainerWidth} py-3 px-3`}>
            <Accordion style={{ maxWidth: '1200px', margin: 'auto' }}>
                <p className={`${styles.sectionBody}`}>Our solutions</p>
                <p className={`${styles.sectionBody} mb-5`} style={{ borderLeft: '4px solid red', paddingLeft: '10px' }}>We help enterprises turn data into value. Here’s how.</p>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>TCS Decision Fabric <sup>TM</sup></h2></Accordion.Header>
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
                    <Accordion.Header><h2>TCS Datom <sup>TM</sup></h2></Accordion.Header>
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
                    <Accordion.Header><h2>TCS Daezmo <sup>TM</sup></h2></Accordion.Header>
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
                    <Accordion.Header><h2>TCS Dexam <sup>TM</sup></h2></Accordion.Header>
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
    )
}
