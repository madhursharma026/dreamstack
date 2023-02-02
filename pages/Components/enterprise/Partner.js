import styles from '../../../styles/cybersecurity/Services.module.css';
import Accordion from 'react-bootstrap/Accordion';

export default function Partner() {

    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth}`}>
                <Accordion style={{ maxWidth: '1200px', margin: 'auto' }}>
                    <p className={`${styles.sectionBody}`}>OUR PARTNERS</p>
                    <p className={`${styles.sectionBody} mb-5`} style={{ borderLeft: '4px solid red', paddingLeft: '10px' }}>Through our strategic collaborations with leaders in enterprise applications, we maximize the ecosystem advantage for you.</p>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b><h2>01. Oracle</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <p className={`${styles.sectionBody} text-muted`}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, culpa voluptatum. Pariatur laudantium eaque id veritatis reiciendis necessitatibus, quis adipisci!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b><h2>02. Salesforce</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <p className={`${styles.sectionBody} text-muted`}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, culpa voluptatum. Pariatur laudantium eaque id veritatis reiciendis necessitatibus, quis adipisci!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b><h2>03. SAP</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <p className={`${styles.sectionBody} text-muted`}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, culpa voluptatum. Pariatur laudantium eaque id veritatis reiciendis necessitatibus, quis adipisci!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><b><h2>04. Specialist partners</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <p className={`${styles.sectionBody} text-muted`}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, culpa voluptatum. Pariatur laudantium eaque id veritatis reiciendis necessitatibus, quis adipisci!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <p className={`${styles.sectionBody} my-3`}>Meeting the strategy needs of specific industries and functions.</p>
                    <hr />
                </Accordion>
            </div>
        </div>
    )
}
