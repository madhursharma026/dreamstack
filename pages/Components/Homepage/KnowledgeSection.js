import { useEffect, useState } from "react";
import leftArrow from "../../media/leftArrow.png";
import rightArrow from "../../media/rightArrow.png";
import styles from '../../../styles/KnowledgeSection.module.css';

export default function KnowledgeSection() {
    const [loading, setLoading] = useState(false)
    const [loadingComplete, setLoadingComplete] = useState(false)

    function callData() {
        setLoading(true)
        const interval = setInterval(() => {
            setLoading(false)
            setLoadingComplete(true)
        }, 3000)
    }
    return (
        <div className={`p-0 px-md-4 px-3 my-5`}>
            <div className={`${styles.ContainerWidth} mb-5`}>
                {!loading ?
                    <>
                        <div className={`row ${styles.sectionRow}`} style={{ display: `${loadingComplete ? 'none' : ''}` }}>
                            <div className={`col-md-6`}>
                                <h1 className={`${styles.subHeading}`}>BUILDING COLLECTIVE KNOWLEDGE</h1>
                                <h1 className={`${styles.sectionTitle}`}>Answer a few questions to discover a trove of insights customized for you.</h1>
                            </div>
                            <div className={`col-md-6 col-xxl-4 offset-xxl-1 text-center ${styles.imageColumn}`}>
                                <div id={`${styles.divpos}`} className='px-2' style={{ borderRadius: "10px" }}>
                                    <h1 id={`${styles.para4}`} style={{ textAlign: "center" }}>When you hear ‘future tech’ what do you think of?</h1>
                                    <div style={{ float: 'left' }}>
                                        <img id={`${styles.backButton}`} src={leftArrow.src} alt="back" width="84px" height="80px" onClick={() => callData()} />
                                        <span id={`${styles.buttontext}`}>Metaverse</span>
                                    </div>
                                    <div style={{ float: 'right' }}>
                                        <span id={`${styles.buttontext2}`}>AI</span>
                                        <img id={`${styles.frontButton}`} src={rightArrow.src} alt="front" width="78px" height="70px" onClick={() => callData()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${styles.sectionRow}`} style={{ display: `${!loadingComplete ? 'none' : ''}` }}>
                            <div className={`col-xl-7`}>
                                <h1 className={`${styles.sectionTitle2}`}>Most CEOs consider Artificial Intelligence the most impactful tech in their tool box today, Gartner's 2022 CEO survey reports.</h1>
                            </div>
                            <div className={`col-xl-5`}>
                                <h1 className={`${styles.subHeading} text-black`}>In an ideal state, Artificial Intelligence uses machines, computers mainly, to create a facsimile of human intelligence - but it's not bound by the constraints of an individual mind. 'Weak AI' - a misnomer - performs a specific use-case based function, while 'Strong AI' hopes to become self-aware.</h1>
                            </div>
                        </div>
                    </>
                    :
                    <div className="text-center" style={{ fontSize: '24px' }}>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: "30px", height: '30px' }}></span>
                        <br />
                        <h1>Ignite your transformation</h1>
                        <p>We're matching your answers with the latest Dreamstack insights and expertise</p>
                        {/* &ensp; Loading... */}
                    </div>
                }
            </div>
        </div>
    )
}
