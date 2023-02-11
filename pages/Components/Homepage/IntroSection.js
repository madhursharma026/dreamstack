import styles from '../../../styles/Homepage/IntroSection.module.css';

export default function IntroSection() {
    return (
        <>
            <div className={`p-0 mt-5`}>
                <div className="bg-primary">
                    <div className={`${styles.ContainerWidth}`}>
                        <div className={`row`}>
                            <div className={`col-lg-6 order-lg-2`}>
                                <img src="https://a.storyblok.com/f/172398/2164x1460/bcae7390a6/hero-2x-e-commerce.png" alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} />
                                <div class={`card ${styles.hideAfterLGScrn}`} style={{ width: "380px", marginTop: "-30px", marginLeft: '200px' }}>
                                    <div class="card-body">
                                        Integrates with:
                                        <img src="https://hubstaff.com/images/logos/quickbooks-mark.svg" alt="#ImgNotFound" className='px-2' />
                                        <img src="https://hubstaff.com/images/logos/freshbooks-mark.svg" alt="#ImgNotFound" className='px-2' />
                                    </div>
                                </div>
                            </div>
                            <div className={`col-lg-6`}>
                                <div className={`py-lg-5 pb-5 ${styles.rightSide} px-md-4 px-3`}>
                                    <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}><b>The productivity platform for e-commerce teams</b></h1>
                                    <p className={`${styles.sectionBody} text-white`}>Increase efficiency and profit with e-commerce time tracking, proof of work, and more.</p>
                                    <button type="button" class={`btn ${styles.openPositionBtn} px-4 py-3`}><b>Try Hubstaff for free</b></button>
                                    <button type="button" class={`btn ${styles.salesBtn} px-4 py-3`}><b>Talk to sales</b></button>
                                    <div className={`${styles.makeDivAlignCenterAfterLGScrn}`}>
                                        <p className='mt-4 text-white'>No credit card required. <br className={`${styles.BRTagAfterMDScrn}`} /> Available for: <img src="https://marketing-assets-cms.hubstaff.com/public/images/logos/apple-mark-white.svg" alt="#ImgNotFound" /> &ensp; <img src="https://marketing-assets-cms.hubstaff.com/public/images/logos/android-mark-white.svg" alt="#ImgNotFound" /></p>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src="https://hubstaff.com/images/logos/capterra-white.svg" alt="#ImgNotFound" />
                                                <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                            </div>
                                            <div className="col-lg-4">
                                                <img src="https://hubstaff.com/images/logos/g2-white.svg" alt="#ImgNotFound" />
                                                <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                            </div>
                                        </div>
                                        <div class={`card ${styles.showAfterLGScrn}`}>
                                            <div class="card-body">
                                                Integrates with:
                                                <img src="https://hubstaff.com/images/logos/quickbooks-mark.svg" alt="#ImgNotFound" className='px-2' />
                                                <img src="https://hubstaff.com/images/logos/freshbooks-mark.svg" alt="#ImgNotFound" className='px-2' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

