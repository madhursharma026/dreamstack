import styles from '../../../styles/WhoWeAre/AboutUsCard.module.css';
import Link from 'next/link';

export default function AboutUsCard() {
    return (
        <div className="px-md-4 px-3">
            <div className={`mt-5 ${styles.ContainerWidth}`}>
                <div className={`row ${styles.AboutUsContent}`}>
                    <h5 className={`${styles.headingColor}`} style={{ zIndex: "1" }}>ABOUT US</h5>
                    <div className={`col ${styles.colNo1}`}>
                        <div class={`card ${styles.cardStyle}`}>
                            <div class="card-body">
                                <h6 style={{ fontSize: '14px' }}><b>OUR EMPLOYEES</b></h6>
                                <h1 class="card-title text-primary" style={{ fontSize: '4rem' }}>613K</h1>
                                <p class="card-text">workforce globally distributed highly localized</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo2}`}>
                        <div class={`card ${styles.cardStyle}`}>
                            <div class="card-body">
                                <h6 style={{ fontSize: '14px' }}><b>NATIONALITIES</b></h6>
                                <h1 class="card-title text-primary" style={{ fontSize: '4rem' }}>153</h1>
                                <p class="card-text">nationalities represented from across the globe</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo3}`}>
                        <div class={`card ${styles.cardStyle}`}>
                            <div class="card-body">
                                <h6 style={{ fontSize: '14px' }}><b>DIVERSITY</b></h6>
                                <h1 class="card-title text-primary" style={{ fontSize: '4rem' }}>35.7%</h1>
                                <p class="card-text">women in workforce with an 84%+ increase in executive roles over 5 years</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo4}`}>
                        <div class={`card ${styles.cardStyle}`}>
                            <div class="card-body">
                                <h6 style={{ fontSize: '14px' }}><b>DEVELOPMENT</b></h6>
                                <h1 class="card-title text-primary" style={{ fontSize: '4rem' }}>171K</h1>
                                <p class="card-text">employees deep-skilled. 121 hrs of average learning hours per employee per year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
