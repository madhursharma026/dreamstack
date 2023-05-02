import styles from '../../../styles/Blockchain/ConsultingServices.module.css';

export default function Types() {
    return (
        <>
            <div className={`${styles.bodyContainer} px-3 py-5`}>
                <div className={`py-5 ${styles.ContainerWidth}`}>
                    <h1 className={`${styles.sectionTitle} text-center`}><b>Types of Blockchain Networks We Offer</b></h1>
                    <br />
                    <div className="row">
                        <div className="col-md-6 col-xl-3 mt-3">
                            <div class="card w-100 p-3 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div class="card-body">
                                    <h3 class="card-title"><b>Blockchain Audit</b></h3>
                                    <p class="card-text" style={{ fontSize: '20px' }}>Get the support of high-value transactions for your business with a blockchain security audit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mt-3">
                            <div class="card w-100 p-3 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div class="card-body">
                                    <h3 class="card-title"><b>Blockchain Strategy</b></h3>
                                    <p class="card-text" style={{ fontSize: '20px' }}>Analyze the potential of blockchain for your enterprise with real-world applications</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mt-3">
                            <div class="card w-100 p-3 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div class="card-body">
                                    <h3 class="card-title"><b>Blockchain Security</b></h3>
                                    <p class="card-text" style={{ fontSize: '20px' }}>Eliminate attacks and frauds using cybersecurity frameworks for a blockchain network</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mt-3">
                            <div class="card w-100 p-3 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div class="card-body">
                                    <h3 class="card-title"><b>Custom Blockchain</b></h3>
                                    <p class="card-text" style={{ fontSize: '20px' }}>Solve specific business challenges tailored to your needs with blockchain implementation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='py-5' style={{ background: '#31BBAE', color: 'white' }}>
                <div className={`px-3 px-md-5 py-5 ${styles.ContainerWidth} row`}>
                    <div className="col-lg-9">
                        <h2>
                            Take Your Business to the Next Level by Outsourcing
                            <br />
                            Your Software Requirements to Dreamstackweb
                        </h2>
                    </div>
                    <div className="col-lg-3 mt-3 text-center">
                        <button type="button" class="btn btn-primary px-4 py-3"><b>Hire Software Experts</b></button>
                    </div>
                </div>
            </div>
        </>
    )
}
