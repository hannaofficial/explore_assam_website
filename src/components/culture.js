import Title from "./title";
import { cultures } from "../data";
const Culture = ()=>{
    return (

    <section class="section cultural" id="culture">

    <Title title="Explore" subTitle="culture"/>

    <div class="section-center cultural-center">
        {cultures.map((culture)=>{
          const {id,href,title, text, img} = culture
          return(
          <article class="culture" key={id} id='article_${id}'>
          <img class="culture-img" src={img}/>
          <div class="culture-info">
            <h4 class="culture-title">{title}</h4>
            <p class="culture-text">
            {text}
            </p>
            <a href={href} target='_blank' class="btn">know more</a>
          </div>
        </article>)
        })}
    
    </div>
  </section>
  )
};
export default Culture;