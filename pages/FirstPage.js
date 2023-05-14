import Head from "next/head";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Form from 'react-bootstrap/Form';
import Link from "next/link";
import styles from '../styles/Turing/OnBoardingPages.module.css';

export default function FirstPage() {
    const router = useRouter();
    const [emailAddress, setEmailAddress] = useState('')


    function moveOnSecondboardingPages(e) {
        e.preventDefault()
        // router.push('FirstPage');
        router.push({
            pathname: 'SecondPage',
        });
    }

    return (
        <div>
            <Head>
                <title>FirstPage - Dreamstack</title>
                <meta name="description" content="Turning - Dreamstack" />
            </Head>
            <Header />
            <div className="row">
                <div className={`col-md-6 mt-5`}>
                    <div className={`${styles.ContainerWidth}`}>
                        <br /><br /><br /><br /><br />
                        <div className="mx-3">
                            <h1>Your custom tech services</h1>
                            <p className={`${styles.sectionBody}`}>To start building your solutions strategy, we need some contact details.</p>
                            <form onSubmit={(e) => moveOnSecondboardingPages(e)}>
                                <Form.Group controlId="emailAddress" style={{ width: '100%' }}>
                                    <Form.Label><b>Work Email Address:</b></Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        value={router.query.sendingEmailAddress}
                                        placeholder='email@emample.com'
                                        className={`p-2`}
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group controlId="phoneNumber" style={{ width: '100%', marginTop: '20px' }}>
                                    <Form.Label><b>Phone Number:</b></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        className={`p-2`}
                                    />
                                </Form.Group>
                                <div className="row mt-5">
                                    <div className="col-6">
                                        <Link class="btn btn-outline-secondary w-100 p-2" href="/Turing" role="button">Back</Link>
                                    </div>
                                    <div className="col-6">
                                        <button type="submit" class="btn btn-primary w-100 p-2">Continue</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={`col-md-6 mt-5`} style={{ background: '#212121', color: 'white', height: '100vh' }}>
                    <div className={`${styles.ContainerWidth}`}>
                        <br /><br /><br /><br /><br />
                        <h1>How does Services work?</h1>
                        <p className={`${styles.sectionBody}`}>We’re happy to answer questions and build your custom business solution.</p>
                        <ul className="mb-5">
                            <li className={`${styles.sectionBody}`}>We build a comprehensive solution strategy</li>
                            <li className={`${styles.sectionBody}`}>We plan, staff, deliver, and manage technology projects and programs across several technical domains</li>
                            <li className={`${styles.sectionBody}`}>We get the right people for the job with the quality, speed, and cost effectiveness of our Talent Cloud</li>
                        </ul>
                        <div className="row mt-5 pt-5">
                            <div className="col-xxl-2 col-4 mt-3">
                                <img src="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/02/pepsi-logo_5e53a34c893dc.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-2 col-4 mt-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-3 col-4 mt-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Johnson_and_Johnson_Logo.svg/2560px-Johnson_and_Johnson_Logo.svg.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-2 col-5 mt-3">
                                <img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-1.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-1 col-3 mt-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo-Iron-Mark-Black.svg/1200px-Volvo-Iron-Mark-Black.svg.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-2 col-4 mt-3">
                                <img src="https://logos-world.net/wp-content/uploads/2021/02/Disney-Logo.png" alt="#ImgNotFound" width='100%' />
                            </div>
                        </div>
                        <h5 className={`${styles.sectionBody} pt-3 text-center mb-5`}>
                            Trusted by 900+ companies, including
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

