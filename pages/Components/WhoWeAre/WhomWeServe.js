import styles from '../../../styles/WhoWeAre/Galance.module.css';
import Carousel from 'react-bootstrap/Carousel';

export default function WhomWeServe() {
    return (
        <div className={`px-md-4 px-3 pb-lg-0 pb-5`}>
            <div className={`my-5 px-3 ${styles.ContainerWidth}`}>
                <h3 className='px-1'><b>Whom We Serve</b></h3>
                <div className="row">
                    <div className="col-md-6 px-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h3 class="card-title"><b>Non-IT enterprises</b></h3>
                                <p class="card-text">
                                    Services to improve business performance, optimize customer service, and tap in digital transformation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3 px-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h3 class="card-title"><b>Software product companies</b></h3>
                                <p class="card-text">
                                    Services to help bring new products to the market and win customers fast.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
