import styles from '../../../styles/Blockchain/WhyChoose.module.css';

export default function WhyChoose() {
    return (
        <>
            <div className={`${styles.bodyContainer} px-3 py-5`}>
                <div className={`py-5 ${styles.ContainerWidth}`}>
                    <div className="text-center">
                        <h1 className={`${styles.sectionTitle}`}><b>Why Choose Radixweb as a Blockchain Development Company for Your Business?</b></h1>
                        <br />
                        <h4 className={`${styles.sectionBody}`}>As a leading blockchain consulting and development company, we ensure to deliver guaranteed results by developing tailored blockchain applications, no matter how complex your project is!</h4>
                    </div>
                    <br />

                    <div className="row px-xxl-5">
                        <div className="col-md-6 col-xl-4">
                            <div class="card w-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div class="card-body">
                                    <h3 class="card-title"><b>Custom Blockchain</b></h3>
                                    <p class="card-text" style={{ fontSize: '20px' }}>Solve specific business challenges tailored to your needs with blockchain implementation</p>
                                </div>
                            </div>
                            <div class="card w-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div class="card-body">
                                    <h3 class="card-title"><b>Custom Blockchain</b></h3>
                                    <p class="card-text" style={{ fontSize: '20px' }}>Solve specific business challenges tailored to your needs with blockchain implementation</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-xl-4 ${styles.imgStyle}`}>
                            <img src="https://as2.ftcdn.net/v2/jpg/02/42/00/09/1000_F_242000971_1DScTN17vesocvcWvsdgxA7kdTAqunHm.jpg" alt="#ImgNotFound" width='100%' />
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div class="card w-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div class="card-body">
                                    <h3 class="card-title"><b>Custom Blockchain</b></h3>
                                    <p class="card-text" style={{ fontSize: '20px' }}>Solve specific business challenges tailored to your needs with blockchain implementation</p>
                                </div>
                            </div>
                            <div class="card w-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div class="card-body">
                                    <h3 class="card-title"><b>Custom Blockchain</b></h3>
                                    <p class="card-text" style={{ fontSize: '20px' }}>Solve specific business challenges tailored to your needs with blockchain implementation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5' style={{ background: '#31BBAE', color:'white' }}>
                <div className={`px-3 px-md-5 py-5 ${styles.ContainerWidth} row`}>
                    <div className="col-lg-10">
                        <h2>
                           Add an Unparallel Edge to Your Business with 
                           <br />
                           Customized Blockchain Solutions
                        </h2>
                    </div>
                    <div className="col-lg-2 mt-3 text-center">
                        <button type="button" class="btn btn-primary px-3 py-2"><b>Talk to us</b></button>
                    </div>
                </div>
            </div>
        </>
    )
}
