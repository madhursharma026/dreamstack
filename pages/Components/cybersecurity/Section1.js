import styles from '../../../styles/cybersecurity/Section1.module.css';
import Link from 'next/link';

export default function Section1() {

    return (
        // <div style={{background:"url('https://s7ap1.scene7.com/is/image/TCSCOMprod/cyber-security-Web-3840x1512?wid=2000&hei=788&dpr=off')", backgroundRepeat:"no-repeat", backgroundSize:"100% 100vh", backgroundAttachment:"fixed"}}></div>
        <div className={`${styles.Section1} px-md-4 px-3 py-5 mt-lg-0 mt-5`}>
            <div className={`${styles.ContainerWidth} py-lg-5`}>
                <h5 className={`text-white ${styles.sectionBody} pt-2`}><b>SERVICES / CYBERSECURITY</b></h5>
                <hr style={{ height: '2px', background: 'white' }} />
                <div class={`${styles.bottomLeft}`}>
                    <h1 className={`${styles.sectionTitle} text-white`}>Lead with cyber confidence</h1>
                    <Link href="/" className={`${styles.letsTalk}`}><b>Let's Talk</b></Link>
                </div>
            </div>
        </div>
        // </div>
    )
}