import styles from '../../../styles/careers/Positions.module.css';
import Accordion from 'react-bootstrap/Accordion';

export default function Positions() {
    return (
        <div className={`px-md-4 px-3 py-md-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <h1 className={`${styles.sectionTitle} text-center py-md-5 py-3`}><b>Open positions at Hubstaff</b></h1>

                <Accordion style={{ maxWidth: '1000px', margin: 'auto' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Data Engineering Architect</b></Accordion.Header>
                        <Accordion.Body>
                            <h6><span className="text-muted">Posted: </span>Thursday, January 12, 2023</h6>
                            <h6><span className="text-muted">Location: </span>Remote</h6>
                            <p className={`${styles.sectionBody} text-muted`}>
                                We are looking for a Data Engineering Architect or similar experience within our marketing team to help our teams make better data-driven decisions. You work with our marketing department, engineers, and product specialists across the company to help us compile, analyze and visualize relevant data about our product and relevant market trends.
                                This is a brand-new position. You will have a unique opportunity to help scale the data team, build the process, as well as to be hands-on. Don’t miss it!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b>Customer Support (UTC-10 to UTC -7): America time zone</b></Accordion.Header>
                        <Accordion.Body>
                            <h6><span className="text-muted">Posted: </span>Thursday, January 12, 2023</h6>
                            <h6><span className="text-muted">Location: </span>Remote</h6>
                            <p className={`${styles.sectionBody} text-muted`}>
                                We are looking for a Data Engineering Architect or similar experience within our marketing team to help our teams make better data-driven decisions. You work with our marketing department, engineers, and product specialists across the company to help us compile, analyze and visualize relevant data about our product and relevant market trends.
                                This is a brand-new position. You will have a unique opportunity to help scale the data team, build the process, as well as to be hands-on. Don’t miss it!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b>Content Strategy Manager</b></Accordion.Header>
                        <Accordion.Body>
                            <h6><span className="text-muted">Posted: </span>Thursday, January 12, 2023</h6>
                            <h6><span className="text-muted">Location: </span>Remote</h6>
                            <p className={`${styles.sectionBody} text-muted`}>
                                We are looking for a Data Engineering Architect or similar experience within our marketing team to help our teams make better data-driven decisions. You work with our marketing department, engineers, and product specialists across the company to help us compile, analyze and visualize relevant data about our product and relevant market trends.
                                This is a brand-new position. You will have a unique opportunity to help scale the data team, build the process, as well as to be hands-on. Don’t miss it!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b>Senior Ruby on Rails Engineer</b></Accordion.Header>
                        <Accordion.Body>
                            <h6><span className="text-muted">Posted: </span>Thursday, January 12, 2023</h6>
                            <h6><span className="text-muted">Location: </span>Remote</h6>
                            <p className={`${styles.sectionBody} text-muted`}>
                                We are looking for a Data Engineering Architect or similar experience within our marketing team to help our teams make better data-driven decisions. You work with our marketing department, engineers, and product specialists across the company to help us compile, analyze and visualize relevant data about our product and relevant market trends.
                                This is a brand-new position. You will have a unique opportunity to help scale the data team, build the process, as well as to be hands-on. Don’t miss it!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div class="alert alert-secondary mt-3 text-center" role="alert" style={{ maxWidth: '1000px', margin: 'auto' }}>
                    Hubstaff does not contact candidates through Facebook or other social media platforms. If you receive a job offer from someone via these channels, please report and disregard it.
                </div>
            </div>
        </div>
    )
}
