import Link from "next/link";
import Logo from "../media/logo.jpg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";

function Header() {

    const [visible, setVisible] = useState(true)
    const [position, setPosition] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.pageYOffset)
            let moving = window.pageYOffset
            setVisible(position > moving || position < 140);
            setPosition(moving)
            console.log(window.scrollTop)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <>
            <div className={`${styles.navbarBeforeMD}`}>
                <Navbar className={`fixed-top px-md-4 px-3 bg-white ${visible ? styles.animationStyle1 : styles.animationStyle2}`} expand="md">
                    <Navbar className={`${styles.ContainerWidth} w-100`}>
                        <Navbar.Brand>
                            <Link href='/'>
                                <img src={Logo.src} alt="#ImgNotFound" width="30px" height='30px' />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" className={`${styles.navbarToggle}`} />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionBeforeLG}`} navbarScroll>
                                <Link href="" className={`px-lg-3 px-2 ${styles.menuOptions}`}><b>What We Do</b></Link>
                                <Link href="" className={`px-lg-3 px-2 ${styles.menuOptions}`}><b>Who We Are</b></Link>
                                <Link href="/careers" className={`px-lg-3 px-2 ${styles.menuOptions}`}><b>Careers</b></Link>
                                <Link href="" className={`px-lg-3 px-2 ${styles.menuOptions}`}><b>Terms</b></Link>
                            </Nav>
                            <div className={`${styles.navOptionBeforeLG}`}>
                                <button type="button" className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`}><b>Download Dreamstack</b></button>
                            </div>
                            <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionAfterLG}`} navbarScroll>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button type="button" className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`}><b>Download Dreamstack</b></button>
                                </div>
                                <hr />
                                <Link href="" className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>What We Do</b></Link>
                                <hr />
                                <Link href="" className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>Who We Are</b></Link>
                                <hr />
                                <Link href="/careers" className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>Careers</b></Link>
                                <hr />
                                <Link href="" className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>Terms</b></Link>
                                <hr />
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Navbar>
            </div>
            <div className={`${styles.navbarAfterMD}`}>
                <Navbar className={`fixed-top px-xl-0 px-xl-5 bg-white px-md-4 px-3  ${visible ? styles.animationStyle1 : styles.animationStyle2}`} expand="md">
                    <Navbar.Brand>
                        <Link href='/'>
                            <img src={Logo.src} alt="#ImgNotFound" width="30px" height='30px' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className={`${styles.navbarToggle}`} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionBeforeLG}`} navbarScroll>
                            <Link href='' className={`px-3 ${styles.menuOptions}`}><b>What We Do</b></Link>
                            <Link href='' className={`px-3 ${styles.menuOptions}`}><b>Who We Are</b></Link>
                            <Link href='/careers' className={`px-3 ${styles.menuOptions}`}><b>Careers</b></Link>
                            <Link href='' className={`px-3 ${styles.menuOptions}`}><b>Terms</b></Link>
                        </Nav>
                        <div className={`${styles.navOptionBeforeLG}`}>
                            <button type="button" className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`}><b>Download Dreamstack</b></button>
                        </div>
                        <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionAfterLG}`} navbarScroll>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button type="button" className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`}><b>Download Dreamstack</b></button>
                            </div>
                            <hr />
                            <Link href="" className={`px-3 ${styles.menuOptionsAfterLG}`}><b>What We Do</b></Link>
                            <hr />
                            <Link href="" className={`px-3 ${styles.menuOptionsAfterLG}`}><b>Who We Are</b></Link>
                            <hr />
                            <Link href="/careers" className={`px-3 ${styles.menuOptionsAfterLG}`}><b>Careers</b></Link>
                            <hr />
                            <Link href="" className={`px-3 ${styles.menuOptionsAfterLG}`}><b>Terms</b></Link>
                            <hr />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default Header;
