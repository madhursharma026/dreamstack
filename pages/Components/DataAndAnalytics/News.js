import styles from '../../../styles/cybersecurity/Insights.module.css';

export default function News() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>In The Trend</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cyber-vigilance-vulnerability-incident-response-card-1:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>Gartner Leader</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/AdobeStock_404751193:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>Everest Ranking</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cb:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>IDC Marketscape</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cloud-security-automation-card-1330x1270:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>HFS Research</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
