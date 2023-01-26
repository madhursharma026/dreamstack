import styles from '../../../styles/careers/Section1.module.css';

export default function Section1() {
    return (
        <div className={`${styles.Section1} px-md-4 px-3 py-md-5`}>
            <div className={`${styles.ContainerWidth} py-lg-5`}>
                <div className={`row py-5 ${styles.Section1Content}`}>
                    {/* <div className="col-lg-6 offset-lg-3"> */}
                    <h1 className={`${styles.sectionTitle} text-white text-center py-md-5 py-3`}><b>Remote work for a more flexible future</b></h1>
                    <div className="row">
                        <div className={`col-md-6 mt-md-0 mt-3  ${styles.openPositionBtnSection}`}>
                            <button type="button" class={`btn ${styles.openPositionBtn}`}>View open positions</button>
                        </div>
                        <div className={`col-md-6 mt-md-0 mt-3  ${styles.salesBtnSection}`}>
                            <button type="button" class={`btn ${styles.salesBtn}`}>Talk to sales</button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
