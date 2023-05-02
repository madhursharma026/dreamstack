import styles from '../../../styles/cybersecurity/Services.module.css';
import Accordion from 'react-bootstrap/Accordion';
import { useRef } from 'react';
import { useEffect, useState } from "react";

export default function Services() {
    const myRef = useRef()

    useEffect(() => {
        localStorage.setItem('positionHeight', myRef.current.offsetTop);
    }, []);

    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} ref={myRef}>
            <div className={`${styles.ContainerWidth}`}>

                <Accordion style={{ maxWidth: '1200px', margin: 'auto' }}>
                    <p className={`${styles.sectionBody}`}>OUR SERVICES, CUSTOMIZED FOR YOU</p>
                    <p className={`${styles.sectionBody}`} style={{ borderLeft: '4px solid red', paddingLeft: '10px' }}>We protect your business with our comprehensive portfolio of consulting, implementation, managed security services, and solutions, so that you can focus on growth.</p>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Threat detection and response</b></Accordion.Header>
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
                        <Accordion.Header><b>Digital identity management</b></Accordion.Header>
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
                        <Accordion.Header><b>Secure cloud transformation</b></Accordion.Header>
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
                        <Accordion.Header><b>Cyber-physical security</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2">
                                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus praesentium mollitia blanditiis quia vero, ipsum eveniet eum pariatur, doloremque odio sunt et impedit. Vitae iusto minus facilis neque, reprehenderit ipsam, quos vero, laborum maiores id aliquam. Possimus dolore veritatis ducimus, sapiente quas dolorum aspernatur suscipit tempora ea dolorem, exercitationem voluptas corrupti totam, earum ab. Veniam ipsam eius corporis ad excepturi voluptatibus, velit harum deleniti deserunt accusamus delectus quidem neque laboriosam inventore recusandae quo, sed voluptate repellendus rem possimus ratione quis?</div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><b>Privacy and data protection</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2">
                                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus praesentium mollitia blanditiis quia vero, ipsum eveniet eum pariatur, doloremque odio sunt et impedit. Vitae iusto minus facilis neque, reprehenderit ipsam, quos vero, laborum maiores id aliquam. Possimus dolore veritatis ducimus, sapiente quas dolorum aspernatur suscipit tempora ea dolorem, exercitationem voluptas corrupti totam, earum ab. Veniam ipsam eius corporis ad excepturi voluptatibus, velit harum deleniti deserunt accusamus delectus quidem neque laboriosam inventore recusandae quo, sed voluptate repellendus rem possimus ratione quis?</div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><b>Incident response and rapid recovery</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2">
                                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus praesentium mollitia blanditiis quia vero, ipsum eveniet eum pariatur, doloremque odio sunt et impedit. Vitae iusto minus facilis neque, reprehenderit ipsam, quos vero, laborum maiores id aliquam. Possimus dolore veritatis ducimus, sapiente quas dolorum aspernatur suscipit tempora ea dolorem, exercitationem voluptas corrupti totam, earum ab. Veniam ipsam eius corporis ad excepturi voluptatibus, velit harum deleniti deserunt accusamus delectus quidem neque laboriosam inventore recusandae quo, sed voluptate repellendus rem possimus ratione quis?</div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header><b>Cybersecurity advisory and consulting</b></Accordion.Header>
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

                <p className={`${styles.sectionBody} pt-5`}>Dreamstack Cyber Defense Suite </p>
                <p className={`${styles.sectionBody}`}>
                    We offer security-as-a-service with our platform-first approach to integrate and modernize cybersecurity within enterprises, giving them agility and confidence to grow.
                </p>
            </div>
        </div>
    )
}
