import styles from '../../../styles/Blockchain/ConsultingServices.module.css';

export default function Section4() {
    return (
        <div className={`pt-5`}>
            <div className={`px-3 py-5 ${styles.ContainerWidth} text-center`}>
                <h1 className={`${styles.sectionTitle}`}><b>Blockchain for Enterprises to Scale Up</b></h1>
                <br />
                <div className="row">
                    <div className="col-md-6 col-lg-3 mt-3">
                        <div class="card w-100 h-100" style={{ border: '0' }}>
                            <div class="card-body">
                                <img src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png" alt="#ImgNotFound" style={{ width: '100px' }} />
                                <h3 class="card-title mt-3"><b>Client Retention and Increased Profitability</b></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-3">
                        <div class="card w-100 h-100" style={{ border: '0' }}>
                            <div class="card-body">
                                <img src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png" alt="#ImgNotFound" style={{ width: '100px' }} />
                                <h3 class="card-title mt-3"><b>Secure Blockchain Software Systems</b></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-3">
                        <div class="card w-100 h-100" style={{ border: '0' }}>
                            <div class="card-body">
                                <img src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png" alt="#ImgNotFound" style={{ width: '100px' }} />
                                <h3 class="card-title mt-3"><b>Revamped Apps and Digital Tools</b></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-3">
                        <div class="card w-100 h-100" style={{ border: '0' }}>
                            <div class="card-body">
                                <img src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png" alt="#ImgNotFound" style={{ width: '100px' }} />
                                <h3 class="card-title mt-3"><b>Intuitive Service and Maintenance</b></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5' style={{ background: '#F5F5F5' }}>
                <div className={`px-3 py-5 ${styles.ContainerWidth} row`}>
                    <div className="col-lg-10">
                        <h2>
                            Accelerate Your Business Transformation by Building
                            <br />
                            Smarter Products with Blockchain App Development
                        </h2>
                    </div>
                    <div className="col-lg-2 mt-3 text-center">
                        <button type="button" class="btn btn-primary px-3 py-2"><b>Get Started</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
