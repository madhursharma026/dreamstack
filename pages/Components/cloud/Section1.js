import Link from 'next/link';
import styles from '../../../styles/DataAndAnalytics/Section1.module.css';

export default function Section1() {
    return (
        <div className={`p-0 mt-5 ${styles.IntroSection}`} style={{ background: "#2A416B" }}>
            <div className={`${styles.ContainerWidth}`}>
                <div className={`row ${styles.sectionRow}`}>
                    <div className={`col-lg-6 order-lg-2 pb-lg-0 pb-3`}>
                        <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/modernized-underwriting-platform-insurance-solution-cloud?wid=1900&hei=727&dpr=off" alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} style={{ border: '0' }} />
                    </div>
                    <div className={`col-lg-6 pb-lg-0 pb-5 pt-lg-0 py-lg-5`}>
                        <div className={`py-lg-5 ${styles.rightSide} px-md-4 px-3 mb-5`}>
                            <h5 className={`text-white ${styles.sectionBody} pt-2`}><b>SERVICES / CLOUD</b></h5>
                            <hr style={{ height: '2px', background: 'white' }} />
                            <h1 className={`${styles.sectionTitle} text-white`}>Your cloud, your journey</h1>
                            <Link href="/" className={`${styles.letsTalk}`}><b>Let's Talk</b></Link>
                            <div className={`${styles.BRTagBeforeMDScrn}`}>
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

