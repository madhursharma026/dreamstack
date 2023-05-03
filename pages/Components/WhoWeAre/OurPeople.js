import styles from '../../../styles/WhoWeAre/OurPeople.module.css';
import Link from 'next/link';

export default function OurPeople() {
    return (
        <div className={`${styles.bodyContainer} px-md-4 px-3`}>
            <div className={`py-5 mt-5 ${styles.ContainerWidth}`}>
                <div className="row">
                    <div className="col-md-6">
                        {/* <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /> */}
                        <div className='px-3' style={{ borderLeft: "4px solid #E00C36" }}>
                            <h6 className='text-white'><b>Our people</b></h6>
                            <h1 className={`${styles.sectionBody} text-white`}><b>We believe our people make the difference. We nurture their development, providing opportunities for learning and mutual growth.</b></h1>
                        </div>
                        <Link href='/careers' className='text-white' style={{ fontSize: "20px" }}><b>Join Us</b></Link>
                    </div>
                    <div className="col-md-6 px-3">
                        {/* <div className='px-3' style={{ borderLeft: "4px solid #E00C36" }}>
                            <h6 className='text-white'><b>Our people</b></h6>
                            <h1 className={`${styles.sectionBody} text-white`}><b>We believe our people make the difference. We nurture their development, providing opportunities for learning and mutual growth.</b></h1>
                        </div>
                        <Link href='' className='text-white' style={{ fontSize: "20px" }}><b>Join Us</b></Link> */}
                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
        </div >
    )
}
