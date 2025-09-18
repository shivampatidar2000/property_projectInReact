import styled from "./Team.module.css";

export default function Team() {
    const team = [
        {
            id: "1",
            name: "Shivam Patidar",
            email: "perry@gmail.com",
            phoneNumber: "99875789",
            link: "https://google.com",
            src: "http://static.wixstatic.com/media/9061fb1337b84e07916475589dab4bad.jpg/v1/fill/w_226,h_229,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpg",
            uuid: "Realtor # 123.456.78",
        },
        {
            id: "2",
            name: "Shivam Patidar",
            email: "perry@gmail.com",
            phoneNumber: "99875789",
            link: "https://google.com",
            src: "http://static.wixstatic.com/media/9061fb1337b84e07916475589dab4bad.jpg/v1/fill/w_226,h_229,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpg",
            uuid: "Realtor # 123.456.78",
        },
        {
            id: "3",
            name: "Shivam Patidar",
            email: "perry@gmail.com",
            phoneNumber: "99875789",
            link: "https://google.com",
            src: "http://static.wixstatic.com/media/9061fb1337b84e07916475589dab4bad.jpg/v1/fill/w_226,h_229,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpg",
            uuid: "Realtor # 123.456.78",
        }
    ];

    return (
        <div>
            {/* HEADER IMAGE + TEXT */}
            <div className={styled.container}>
                <img className={styled.img} src="https://static.wixstatic.com/media/82fcd3_a96152638b8b4c9185b4260a5a82063a~mv2.jpg/v1/fill/w_1820,h_225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_a96152638b8b4c9185b4260a5a82063a~mv2.jpg" alt="" />
                <div className={styled.centered}>
                    <p className={styled.content}>OUR TEAM</p>
                    <p className={styled.properties}>Agents</p>
                </div>
            </div>

            {/* GRID SECTION */}
            <div className={styled.saleContainer}>
                <div className={styled.grid}>
                    {team.map((value) => (
                        <div key={value.id} className={styled.card}>
                            <div className={styled.gridName}>
                            <h3 className={styled.name}>{value.name}</h3>
                            <p className={styled.uuid}>{value.uuid}</p>

                            </div>
                            <div className={styled.imageWrapper}>
                                <img src={value.src} alt={value.email} />
                            </div>
                            <div className={styled.cardContent}>
                                
                                <h3 className={styled.address1}>
                                    Email <br /><span className={styled.address}>{value.email}</span>
                                </h3>
                                <h3 className={styled.address1}>
                                    Phone <br /><span className={styled.address}>{value.phoneNumber}</span>
                                </h3>
                                <a href={value.link} target="_blank" rel="noopener noreferrer" className={styled.socialLink}>LinkedIn</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
