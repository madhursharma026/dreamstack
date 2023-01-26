import Link from 'next/link'
import styles from '../../../styles/MorePowerToYou.module.css'

export default function MorePowerToYou() {
    return (
        <div style={{ background: "#F9F9FB" }}>
            <div className={`py-5 mt-5 ${styles.ContainerWidth}`}>
                <div className="row px-3 text-center">
                    <div className={`col-md-6`}>
                        <img className='w-100' src="https://images.ctfassets.net/w5er3c7zdgmd/3vukypoPTTpRYctNjWoUkc/03dfba34b9aab288f7c25d257a621cf0/billboard-more-power-high-res.5e9e07e1024c.png?w=800" alt="#ImgNotFound" style={{ maxWidth: '500px', maxHeight: "500px" }} />
                    </div>
                    <div className={`col-md-6 mt-lg-5 pt-md-5 ${styles.tryPocketContent}`}>
                        <h1 className={`${styles.sectionTitle} pt-5`}>More power to you.</h1>
                        <p className={`${styles.sectionBody}`}>Mozilla puts people before profit, creating products, technologies and programs that make the internet healthier for everyone.</p>
                        <Link href="/" className={`${styles.learnMoreLink}`}>Learn more about us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
