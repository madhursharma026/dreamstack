import Link from 'next/link';
import styles from '../../../styles/cybersecurity/Section1.module.css';

export default function IntroSection() {
    return (
        <div className={`p-0 mt-5 ${styles.IntroSection}`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className={`row ${styles.sectionRow}`}>
                    <div className={`col-lg-6 order-lg-2 pb-lg-0 pb-3`}>
                        <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cyber-security-Web-3840x1512?wid=2000&hei=788&dpr=off" alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} style={{border:'0'}} />
                    </div>
                    <div className={`col-lg-6 pb-lg-0 pb-5 pt-lg-0 py-lg-5 my-lg-5`}>
                        <div className={`py-lg-5 ${styles.rightSide} px-md-4 px-3 mb-5 py-lg-5`}>
                            <h5 className={`text-white ${styles.sectionBody} pt-2`}><b>SERVICES / CYBERSECURITY</b></h5>
                            <hr style={{ height: '2px', background: 'white' }} />
                            <h1 className={`${styles.sectionTitle} text-white`}>Lead with cyber confidence</h1>
                            <Link href="/" className={`${styles.letsTalk}`}><b>Let's Talk</b></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

