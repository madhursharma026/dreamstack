import Link from 'next/link';
import Logo from "../../media/logo.jpg";
import styles from '../../../styles/Homepage/IntroSection.module.css';

export default function IntroSection() {
    return (
        <div className={`p-0 mt-5 ${styles.IntroSection}`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className={`row ${styles.sectionRow} px-md-4 px-3`}>
                    <div className={`col-lg-6 order-lg-2 pb-lg-0 pb-3`}>
                        <img src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/01/hero-21-1920x1080.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} />
                    </div>
                    <div className={`col-lg-6 pb-lg-0 pb-5 pt-lg-0`}>
                        <div className={`py-lg-5 ${styles.rightSide}`}>
                            <img src={Logo.src} alt="#ImgNotFound" width='80px' height='80px' />
                            <h1 className={`${styles.sectionTitle} text-white py-lg-5 py-3`}><b>Dive Into Anything</b></h1>
                            <p className={`${styles.sectionBody} text-white`}>Dreamstack is home to thousands of communities, endless conversation, and
                                authentic human connection. Whether you're into breaking news, sports, Entrepreneur, or a never-ending
                                stream of the internet's cutest animals, there's a stack on for you.</p>
                            <Link href="/" className={`${styles.installBtn} mb-lg-5`}>Install Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

