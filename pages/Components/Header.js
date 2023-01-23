import Link from "next/link";
import Logo from "../media/logo.jpg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../styles/Header.module.css";

function Header() {
    return (
        <Navbar className={`fixed-top px-xl-0 px-xl-5 bg-white`} expand="md">
            <div className="container-xl">
                <Navbar.Brand>
                    <Link href='/'>
                        <img src={Logo.src} alt="#ImgNotFound" width="30px" height='30px' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className={`${styles.navbarToggle}`} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionBeforeLG}`} navbarScroll>
                        <span className={`px-3 ${styles.menuOptions}`}><b>What We Do</b></span>
                        <span className={`px-3 ${styles.menuOptions}`}><b>Who We Are</b></span>
                        <span className={`px-3 ${styles.menuOptions}`}><b>Careers</b></span>
                        <span className={`px-3 ${styles.menuOptions}`}><b>Terms</b></span>
                    </Nav>
                    <div className={`${styles.navOptionBeforeLG}`}>
                        <button type="button" className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`}><b>Download Dreamstack</b></button>
                    </div>
                    <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionAfterLG}`} navbarScroll>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button type="button" className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`}><b>Download Dreamstack</b></button>
                        </div>
                        <hr />
                        <p className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>What We Do</b></p>
                        <hr className={`${styles.hrStyle}`} />
                        <p className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>Who We Are</b></p>
                        <hr className={`${styles.hrStyle}`} />
                        <p className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>Careers</b></p>
                        <hr className={`${styles.hrStyle}`} />
                        <p className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>Terms</b></p>
                        <hr className={`${styles.hrStyle}`} />
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Header;
