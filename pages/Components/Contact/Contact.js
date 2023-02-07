import Link from 'next/link';
import emailjs from "emailjs-com";
import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import styles from '../../../styles/Contact/contact.module.css';

export default function ContactModule() {

    const [fullName, setFullName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [open, setOpen] = useState(false);
    const [AlertMessage, setAlertMessage] = useState("")
    const [AlertMessageBg, setAlertMessageBg] = useState("")

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm(
            "service_y3z8i9o",
            "template_iyhuyja",
            e.target,
            "IKf1WKmDxxkLI6eTQ"
        ).then(res => {
            setFullName("")
            setEmailAddress("")
            setPhoneNumber("")
            console.log(res)
            setAlertMessageBg("success")
            setAlertMessage("Email Sent Successfully!!!")
            handleClick()
        }).catch(err => {
            console.log(err)
            setAlertMessageBg("danger")
            setAlertMessage(err)
            handleClick()
        })
    }

    return (
        <>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} className={`text-white bg-${AlertMessageBg}`}>
                    {AlertMessage}
                </Alert>
            </Snackbar>
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
                            </div>
                            <div style={{ background: "#F5F7FA" }} className='mt-5 py-3 px-3'>
                                <div style={{ maxWidth: "550px" }}>
                                    <h1 className={`${styles.subHeading2} mt-3`}><b>Couldn't get ahold of us?</b></h1>
                                    <p className={`${styles.sectionBody} text-muted`}>Request a callback and we'll get back to you.</p>
                                    <form onSubmit={(e) => sendEmail(e)}>
                                        <div class="mb-3">
                                            <label for="fullName" class="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>Full Name</label>
                                            <input type="text" class="form-control" id="fullName" name='fullName' placeholder="What's your name?" required onChange={(e) => setFullName(e.target.value)} value={fullName} />
                                        </div>
                                        <div class="mb-3">
                                            <label for="emailAddress" class="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>Email</label>
                                            <input type="email" class="form-control" id="emailAddress" name='emailAddress' placeholder="Enter your email" required onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
                                        </div>
                                        <div class="mb-3">
                                            <label for="phoneNumber" class="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>Phone Number</label>
                                            <input type="text" class="form-control" id="phoneNumber" name='phoneNumber' placeholder="+1 (123) 456-7890" required onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                        </div>
                                        {/* <button type="submit" class={`btn ${styles.callMeBack} my-5`}>Call me back</button> */}
                                        <button type="submit" class={`btn btn-primary ${styles.callMeBack} my-5`}>Call me back</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
