import styled from "./News.module.css";

export default function News() {
  const news = [
    {
      id: "1",
      date: "14-08-2025",
      title: "15066 Banks Street",
      agent_name: "kishna",
      src: "https://static.wixstatic.com/media/84770f_ab580106fc944e1cb9b2bdeca3a1296c~mv2_d_2917_1843_s_2.jpeg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis architecto placeat non numquam, nostrum est, cumque dolores consequuntur rem dolorum debitis provident commodi cum ratione unde pariatur iure delectus quia eveniet sit esse!",
    },
    {
      id: "2",
      date: "15-08-2025",
      title: "15066 Banks Street",
      agent_name: "kishna",
      src: "https://static.wixstatic.com/media/84770f_ab580106fc944e1cb9b2bdeca3a1296c~mv2_d_2917_1843_s_2.jpeg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis architecto placeat non numquam, nostrum est, cumque dolores consequuntur rem dolorum debitis provident commodi cum ratione unde pariatur iure delectus quia eveniet sit esse!",
    },
    {
      id: "3",
      date: "15-08-2025",
      title: "15066 Banks Street",
      agent_name: "kishna",
      src: "https://static.wixstatic.com/media/84770f_ab580106fc944e1cb9b2bdeca3a1296c~mv2_d_2917_1843_s_2.jpeg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis architecto placeat non numquam, nostrum est, cumque dolores consequuntur rem dolorum debitis provident commodi cum ratione unde pariatur iure delectus quia eveniet sit esse!",
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className={styled.container}>
        <img
          className={styled.img}
          src="https://static.wixstatic.com/media/82fcd3_0125f42844ab44f1842440a42cecd61b~mv2_d_3000_2157_s_2.jpg/v1/fill/w_1820,h_225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_0125f42844ab44f1842440a42cecd61b~mv2_d_3000_2157_s_2.jpg"
          alt="banner"
        />
        <div className={styled.centered}>
          <p className={styled.content}>OUR UPDATES</p>
          <p className={styled.properties}>News</p>
        </div>
      </div>

      {/* News Cards */}
      <div className={styled.mainDiv}>

        <div className={styled.section}>
          {news.map((item) => (
            <div className={styled.card} key={item.id}>
              <p className={styled.date}>{item.date}</p>
              <h3 className={styled.title}>{item.title}</h3>
              <p className={styled.agent}>By {item.agent_name}</p>
              <img src={item.src} alt={item.title} />
              <p className={styled.description}>{item.description}</p>
              <button className={styled.readMore}>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
