import styles from '../../../styles/Homepage/CustomersSlider.module.css';

export default function CustomersSlider() {
    return (
        <div>
            {/* <div style={{ display: 'flex', height: '64px', overflow: 'hidden', width: '100%' }}>
                <img src="https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg" alt="#ImgNotFound" />
            </div> */}
            <div className='py-4' style={{ background: '#E3EFFF' }}>
                {/* <div className={`${styles.ContainerWidth}`}> */}
                <h1 className={`${styles.sectionTitle} text-center`}><b>Our Customers</b></h1>
                <div class={`${styles.imageSlider}`}>
                    <div class={`${styles.imageSliderTrack}`}>
                        <div class={`${styles.slide}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdzsMq6R2Onp5x63-Qhw1dynaCsA1HoIPWw&usqp=CAU" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://nexuslinkservices.com/wp-content/uploads/2020/11/enterprise-solution-nexuslink-services-2.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.mdpi.com/energies/energies-15-00218/article_deploy/html/images/energies-15-00218-g001.png" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity/jcr:content/Grid/subcategory_atl/layout-subcategory-atl/blade/bladeContents/spotlight.img.jpg/1674559558385.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdzsMq6R2Onp5x63-Qhw1dynaCsA1HoIPWw&usqp=CAU" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://nexuslinkservices.com/wp-content/uploads/2020/11/enterprise-solution-nexuslink-services-2.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.mdpi.com/energies/energies-15-00218/article_deploy/html/images/energies-15-00218-g001.png" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity/jcr:content/Grid/subcategory_atl/layout-subcategory-atl/blade/bladeContents/spotlight.img.jpg/1674559558385.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdzsMq6R2Onp5x63-Qhw1dynaCsA1HoIPWw&usqp=CAU" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://nexuslinkservices.com/wp-content/uploads/2020/11/enterprise-solution-nexuslink-services-2.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.mdpi.com/energies/energies-15-00218/article_deploy/html/images/energies-15-00218-g001.png" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity/jcr:content/Grid/subcategory_atl/layout-subcategory-atl/blade/bladeContents/spotlight.img.jpg/1674559558385.jpg" className='w-100 h-100' />
                        </div>
                    </div>
                    <div class={`${styles.antiImageSliderTrack}`}>
                        <div class={`${styles.slide}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdzsMq6R2Onp5x63-Qhw1dynaCsA1HoIPWw&usqp=CAU" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://nexuslinkservices.com/wp-content/uploads/2020/11/enterprise-solution-nexuslink-services-2.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.mdpi.com/energies/energies-15-00218/article_deploy/html/images/energies-15-00218-g001.png" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity/jcr:content/Grid/subcategory_atl/layout-subcategory-atl/blade/bladeContents/spotlight.img.jpg/1674559558385.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdzsMq6R2Onp5x63-Qhw1dynaCsA1HoIPWw&usqp=CAU" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://nexuslinkservices.com/wp-content/uploads/2020/11/enterprise-solution-nexuslink-services-2.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.mdpi.com/energies/energies-15-00218/article_deploy/html/images/energies-15-00218-g001.png" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity/jcr:content/Grid/subcategory_atl/layout-subcategory-atl/blade/bladeContents/spotlight.img.jpg/1674559558385.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdzsMq6R2Onp5x63-Qhw1dynaCsA1HoIPWw&usqp=CAU" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://nexuslinkservices.com/wp-content/uploads/2020/11/enterprise-solution-nexuslink-services-2.jpg" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.mdpi.com/energies/energies-15-00218/article_deploy/html/images/energies-15-00218-g001.png" className='w-100 h-100' />
                        </div>
                        <div class={`${styles.slide}`}>
                            <img src="https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity/jcr:content/Grid/subcategory_atl/layout-subcategory-atl/blade/bladeContents/spotlight.img.jpg/1674559558385.jpg" className='w-100 h-100' />
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            {/* <div style={{ display: 'flex', height: '64px', overflow: 'hidden', width: '100%' }}>
                <img src="https://www.digitalocean.com/_next/static/media/bottomWaveSliceBlue5.47e176fb.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/bottomWaveSliceBlue5.47e176fb.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/bottomWaveSliceBlue5.47e176fb.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/bottomWaveSliceBlue5.47e176fb.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/bottomWaveSliceBlue5.47e176fb.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/bottomWaveSliceBlue5.47e176fb.svg" alt="#ImgNotFound" />
                <img src="https://www.digitalocean.com/_next/static/media/bottomWaveSliceBlue5.47e176fb.svg" alt="#ImgNotFound" />
            </div> */}
        </div>
    )
}

