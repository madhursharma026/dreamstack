import Link from 'next/link';
import styles from '../../../styles/DataAndAnalytics/Section1.module.css';

export default function IntroSection() {
    return (
        // <div className={`p-0 mt-5 ${styles.IntroSection}`}>
        //     <div className={`${styles.ContainerWidth}`}>
        //         <div className={`row ${styles.sectionRow}`}>
        //             <div className={`col-lg-6 order-lg-2 pb-lg-0 pb-3`}>
        //                 <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/insights-consulting-web?wid=1900&hei=749&dpr=off" alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} style={{border:'0'}} />
        //             </div>
        //             <div className={`col-lg-6 pb-lg-0 pb-5 pt-lg-0 py-lg-5`}>
        //                 <div className={`py-lg-5 ${styles.rightSide} px-md-4 px-3 mb-5`}>
        //                     <h5 className={`text-white ${styles.sectionBody} pt-2`}><b>SERVICES / DATA AND ANALYTICS</b></h5>
        //                     <hr style={{ height: '2px', background: 'white' }} />
        //                     <h1 className={`${styles.sectionTitle} text-white`}>Boost your business performance with data and analytics</h1>
        //                     <Link href="/" className={`${styles.letsTalk}`}><b>Let's Talk</b></Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className={`px-md-5 px-3 py-lg-0 py-5 mt-5 ${styles.IntroSection}`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className={`${styles.imgStyle} col-lg-6 order-lg-2 pb-lg-0 pb-3`}>
                        <img src="https://www.mozilla.org/media/img/firefox/privacy/promise/privacy-hero-900.38adf6a22a99.png" alt="#ImgNotFound" className={`w-100`} />
                    </div>
                    <div className={`col-lg-6 py-5 mt-xxl-5`}>
                        <h1 className={`${styles.sectionTitle} text-white pt-lg-5`}>
                            Firefox products are designed to protect your privacy
                        </h1>
                        <h5 className={`text-white ${styles.sectionBody} pt-2`}>You should be able to decide who sees your personal info. Not just among your friends, but with every advertiser and company on the internet — including us.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

