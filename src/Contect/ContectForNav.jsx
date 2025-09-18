import styled from "./ContectNav.module.css"
export default function ContectForNav() {
    return (
        <div>
            <div className={styled.container}>
                <img className={styled.img} src="https://static.wixstatic.com/media/82fcd3_b1eb371bc78c4a7b85c1c47b9b7e5eca~mv2_d_2993_1457_s_2.jpg/v1/fill/w_2022,h_250,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_b1eb371bc78c4a7b85c1c47b9b7e5eca~mv2_d_2993_1457_s_2.jpg" alt="" />
                <div className={styled.centered}>
                    <p className={styled.content}>BE IN TOUCH</p>
                    <p className={styled.properties}>Contact</p>
                </div>
            </div>
            <div className={styled.mainContainer}>

                {/* Three Sections */}
                <div className={styled.threeDiv}>
                    {/* Call Us */}
                    <div>
                        <p>Our Office</p>
                    </div>

                    {/* Find Us */}
                    <div>
                        <p></p>
                        <p>500 Terry Francine Street</p>
                        <p>San Francisco, CA 94158</p>
                    </div>

                    {/* Email Us */}
                    <div>
                        <p></p>
                        <p> Tel: 123-456-7890</p>
                        <p>Fax: 123-456-7890</p>
                    </div>

                    <div>
                        <p></p>
                        <p> info@mysite.com</p>
                    </div>
                </div>
            </div>
                <div className={styled.header}>
                    <p className={styled.subHeading}>GET IN TOUCH</p>
                    <p className={styled.heading}>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    {/* <p className={styled.heading}>you to tell a story and let your users know a little more about you.</p> */}
                </div>
        </div>
    )
}