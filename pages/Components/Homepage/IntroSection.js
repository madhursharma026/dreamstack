import Link from 'next/link';
import Logo from "../../media/logo.jpg";
import section1Img from "../../media/section1Img.png";
import styles from '../../../styles/IntroSection.module.css';

export default function IntroSection() {
    return (
        <div className={`p-0 ${styles.IntroSection} px-md-4 px-3`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className={`row ${styles.sectionRow} ${styles.paddingTopBottom}`}>
                    <div className={`col-md-6 order-md-2 text-center ${styles.imageColumn}`}>
                        <img src={section1Img.src} alt="#ImgNotFound" className={`${styles.section1Img}`} />
                    </div>
                    <div className={`col-md-6 pb-md-0 pb-5 pt-md-0 pt-5`}>
                        <img src={Logo.src} alt="#ImgNotFound" width='80px' height='80px' />
                        <h1 className={`${styles.sectionTitle} text-white py-md-5 py-3`}><b>Dive Into Anything</b></h1>
                        <p className={`${styles.sectionBody} text-white`}>Dreamstack is home to thousands of communities, endless conversation, and
                            authentic human connection. Whether you're into breaking news, sports, Entrepreneur, or a never-ending
                            stream of the internet's cutest animals, there's a stack on for you.</p>
                        <Link href="/" className={`${styles.installBtn}`}>Install Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

