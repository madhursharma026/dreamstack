import styles from '../../../styles/LoveTheWeb.module.css'

export default function LoveTheWeb() {
    return (
        <div className={`pt-3 my-3 ${styles.ContainerWidth}`}>
            <div className="row px-3">
                <div className={`col-md-6 ${styles.imgSection}`}>
                    <img src="https://www.mozilla.org/media/img/home/2018/newsletter-graphic.3debb24fbacc.png" alt="#ImgNotFound" />
                </div>
                <div className={`col-md-6 ${styles.formSection}`}>
                    <h1 className={`${styles.sectionTitle}`}>Love the Web</h1>
                    <p className={`${styles.sectionBody}`}>Get the Mozilla newsletters and help us keep the web open and free.</p>
                    <div class="my-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" placeholder='yourname@emample.com' class="form-control" id="exampleInputEmail1" className={`${styles.formInput}`} />
                    </div>
                    <button type="button" class={`btn w-100 ${styles.formSubmitBtn}`}><b>Sign Up Now</b></button>
                </div>
            </div>
        </div>
    )
}
