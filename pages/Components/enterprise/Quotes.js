import styles from '../../../styles/cybersecurity/Quotes.module.css';

export default function Quotes() {
    return (
        <div className={`px-4 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`} style={{ maxWidth: "1200px" }}>
                <img src="https://www.tcs.com/etc.clientlibs/tcs/clientlibs/clientlib-site/resources/images/quote.svg" alt="#ImgNotFound" width="100px" height="100px" />
                <h1 className={`${styles.sectionTitle}`} style={{ color: "#E8337B" }}>
                    The journey to becoming a resilient enterprise must begin with a shift in thinking—from a vertical industry to a horizontal, digital ecosystems frame.
                </h1>
                <hr />
                <div className="row pt-2">
                    <div className="col-lg-1 col-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="#ImgNotFound" className="w-100" style={{ borderRadius: "100%", height: "60px" }} />
                    </div>
                    <div className="col-lg-11 col-10">
                        <h6>RAJESH GOPINATHAN</h6>
                        <h6>CEO and Managing Director, Dreamstack</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
