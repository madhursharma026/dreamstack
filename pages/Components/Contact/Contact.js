import Link from 'next/link';
import styles from '../../../styles/Contact/contact.module.css';

export default function ContactModule() {
    return (
        <>
            <div className={`p-0 px-lg-4 px-3`}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className={`row`}>
                        <div className={`col-lg-6`} style={{ background: "#253053" }}>
                            <h1 className={`${styles.sectionTitle} text-white py-md-5 py-3 px-5 ${styles.leftSide}`}><b>We’d love to hear from you</b></h1>
                        </div>
                        <div className={`col-lg-6 pt-5 mt-lg-5`}>
                            <div style={{ maxWidth: "550px" }} className='px-3'>
                                <h1 className={`${styles.sectionTitle} pt-lg-5`}><b>Talk to us</b></h1>
                                <p className={`${styles.sectionBody} text-muted`}>
                                    If you have any questions about Hubstaff Time, Hubstaff Desk, Hubstaff Field, Hubstaff Tasks, or Hubstaff Talent, please contact us in English through the support chat or email us at <br />
                                    <Link href="/" className={`${styles.supportedLink}`}>support@hubstaff.com</Link>
                                </p>

                                <hr />
                                <h1 className={`${styles.subHeading}`}><b>Live chat</b></h1>
                                <p className={`${styles.sectionBody} text-muted`} style={{ marginTop: "-10px" }}>
                                    Don’t like phone calls? We get it
                                </p>
                                <button type="button" class="btn btn-outline-primary">Chat with us</button>

                                <h1 className={`${styles.subHeading} mt-3`}><b>Product demo</b></h1>
                                <p className={`${styles.sectionBody} text-muted`} style={{ marginTop: "-10px" }}>
                                    Our product specialist will give you a full run-down of Hubstaff
                                </p>
                                <button type="button" class="btn btn-outline-primary">Book a demo</button>
                            </div>
                            <div style={{ background: "#F5F7FA" }} className='mt-5 py-3 px-3'>
                                <div style={{ maxWidth: "550px" }}>
                                    <h1 className={`${styles.subHeading2} mt-3`}><b>Couldn't get ahold of us?</b></h1>
                                    <p className={`${styles.sectionBody} text-muted`}>Request a callback and we'll get back to you.</p>
                                    <div class="mb-3">
                                        <label for="FullName" class="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>Full Name</label>
                                        <input type="email" class="form-control" id="FullName" placeholder="What's your name?" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="EmailAddress" class="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>Email</label>
                                        <input type="email" class="form-control" id="EmailAddress" placeholder="Enter your email" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="PhoneNumber" class="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>Phone Number</label>
                                        <input type="email" class="form-control" id="PhoneNumber" placeholder="+1 (123) 456-7890" />
                                    </div>
                                    <button type="button" class={`btn ${styles.callMeBack} my-5`}>Call me back</button>
                                    <p className={`${styles.sectionBody} text-muted`}><span className='text-black'>Phone call</span> Available 3:00 - 21:00 EST Monday to Friday
                                        <br />
                                        UK <Link href="/" className={`${styles.supportedLink}`}>+44 20 4525 1373</Link> US <Link href="/" className={`${styles.supportedLink}`}>+1 317 482 7165</Link>
                                    </p>
                                    <p className={`${styles.sectionBody} text-muted`}><span className='text-black'>Email us</span> Too busy to chat? Email us & we’ll get back ASAP
                                        <br />
                                        <Link href="/" className={`${styles.supportedLink}`}>support@hubstaff.com</Link>
                                    </p>
                                    <p className={`${styles.sectionBody} text-muted`}><span className='text-black'>Mailing address</span>
                                        <br />
                                        11650 Olio Road, Suite #1000 - 193 Fishers, IN 46037
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
