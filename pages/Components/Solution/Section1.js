import styles from '../../../styles/Solution/Section1.module.css';

export default function Section1() {
    return (
        <>
            <div className={`p-0 mt-lg-5`}>
                <div className="bg-primary">
                    <div className={`${styles.ContainerWidth}`}>
                        <div className={`row px-md-4 px-3`}>
                            <div className={`col-lg-6 order-lg-2`}>
                                <video controls className='w-100 h-100 pt-2 mt-md-0 mt-5'>
                                    <source src="https://player.vimeo.com/external/474243696.sd.mp4?s=d801adbe729c8150e14b50500593636f32045cfe&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                                    <source src="https://player.vimeo.com/external/474243696.sd.mp4?s=d801adbe729c8150e14b50500593636f32045cfe&profile_id=164&oauth2_token_id=57447761" type="video/ogg" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className={`col-lg-6 pb-md-0 pb-5`}>
                                <div className={`pt-5 pb-md-5 pb-3  ${styles.rightSide}`}>
                                    <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}><b>End the timesheet battle with simpler agency time trackingg</b></h1>
                                    <div className="row mt-5">
                                        <div className="col-6">
                                            <button type="button" class={`btn ${styles.openPositionBtn}`}>View open positions</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" class={`btn ${styles.salesBtn}`}>Talk to sales</button>
                                        </div>
                                    </div>
                                    <p className='mt-4 text-white'>No credit card required. &emsp; Available for: <img src="https://marketing-assets-cms.hubstaff.com/public/images/logos/apple-mark-white.svg" alt="#ImgNotFound" /> &ensp; <img src="https://marketing-assets-cms.hubstaff.com/public/images/logos/android-mark-white.svg" alt="#ImgNotFound" /></p>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="https://hubstaff.com/images/logos/capterra-white.svg" alt="#ImgNotFound" />
                                            <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                        </div>
                                        <div className="col-4">
                                            <img src="https://hubstaff.com/images/logos/g2-white.svg" alt="#ImgNotFound" />
                                            <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`py-5 my-5 ${styles.ContainerWidth}`}>
                    <div className="row">
                        <div className="col-4 text-center">
                            <span style={{ fontSize: "36px" }}>📄</span>
                            <p className={`${styles.sectionBody}`}><b>Automated timesheets for agencies</b></p>
                        </div>
                        <div className="col-4 text-center">
                            <span style={{ fontSize: "36px" }}>📄</span>
                            <p className={`${styles.sectionBody}`}><b>Track costs and project profitability with budgets</b></p>
                        </div>
                        <div className="col-4 text-center">
                            <span style={{ fontSize: "36px" }}>📄</span>
                            <p className={`${styles.sectionBody}`}><b>Streamlined payroll and invoicing</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

