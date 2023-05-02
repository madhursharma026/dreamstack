import styles from '../../../styles/cybersecurity/Services.module.css';
import Accordion from 'react-bootstrap/Accordion';

export default function Solutions() {

    return (
        <div className={`${styles.ContainerWidth} px-3 mb-3`}>
            <Accordion style={{ maxWidth: '1200px', margin: 'auto' }}>
                <p className={`${styles.sectionBody}`}>Our solutions</p>
                <p className={`${styles.sectionBody} mb-5`} style={{ borderLeft: '4px solid red', paddingLeft: '10px' }}>With more than 200 offerings and proprietary innovations, we create intelligent, unique enterprise applications for your business.</p>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>01. Dreamstack Decision Fabric <sup>TM</sup></h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2">
                                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus praesentium mollitia blanditiis quia vero, ipsum eveniet eum pariatur, doloremque odio sunt et impedit. Vitae iusto minus facilis neque, reprehenderit ipsam, quos vero, laborum maiores id aliquam. Possimus dolore veritatis ducimus, sapiente quas dolorum aspernatur suscipit tempora ea dolorem, exercitationem voluptas corrupti totam, earum ab. Veniam ipsam eius corporis ad excepturi voluptatibus, velit harum deleniti deserunt accusamus delectus quidem neque laboriosam inventore recusandae quo, sed voluptate repellendus rem possimus ratione quis?</div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2>02. Dreamstack Datom <sup>TM</sup></h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2">
                                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus praesentium mollitia blanditiis quia vero, ipsum eveniet eum pariatur, doloremque odio sunt et impedit. Vitae iusto minus facilis neque, reprehenderit ipsam, quos vero, laborum maiores id aliquam. Possimus dolore veritatis ducimus, sapiente quas dolorum aspernatur suscipit tempora ea dolorem, exercitationem voluptas corrupti totam, earum ab. Veniam ipsam eius corporis ad excepturi voluptatibus, velit harum deleniti deserunt accusamus delectus quidem neque laboriosam inventore recusandae quo, sed voluptate repellendus rem possimus ratione quis?</div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h2>03. Dreamstack Daezmo <sup>TM</sup></h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2">
                                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus praesentium mollitia blanditiis quia vero, ipsum eveniet eum pariatur, doloremque odio sunt et impedit. Vitae iusto minus facilis neque, reprehenderit ipsam, quos vero, laborum maiores id aliquam. Possimus dolore veritatis ducimus, sapiente quas dolorum aspernatur suscipit tempora ea dolorem, exercitationem voluptas corrupti totam, earum ab. Veniam ipsam eius corporis ad excepturi voluptatibus, velit harum deleniti deserunt accusamus delectus quidem neque laboriosam inventore recusandae quo, sed voluptate repellendus rem possimus ratione quis?</div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h2>04. Dreamstack Dexam <sup>TM</sup></h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2">
                                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus praesentium mollitia blanditiis quia vero, ipsum eveniet eum pariatur, doloremque odio sunt et impedit. Vitae iusto minus facilis neque, reprehenderit ipsam, quos vero, laborum maiores id aliquam. Possimus dolore veritatis ducimus, sapiente quas dolorum aspernatur suscipit tempora ea dolorem, exercitationem voluptas corrupti totam, earum ab. Veniam ipsam eius corporis ad excepturi voluptatibus, velit harum deleniti deserunt accusamus delectus quidem neque laboriosam inventore recusandae quo, sed voluptate repellendus rem possimus ratione quis?</div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
