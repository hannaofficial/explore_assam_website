import Title from "./title";
import { explore } from "../data";
import location_png from "../images/google-maps.png"



const Explore = ()=>{
    return(
        <section class="section" id="explore">
      <Title title="Explore" subTitle="Places"/>

      <div class="section-center featured-center">

        {explore.map((place)=>{
          const {id, title, text, href, img,location} = place;
          return(
        <article class="explore-card" key={id} id={`explore_${id}`}>
          <div class="explore-img-container">
            <img src={img} class="explore-img" alt={`explore_${title}`}/>
            <a class='explore-map' href={location} target="_blank" rel="noreferrer" > <img src={location_png}  id='map_png' alt='map'/></a>
          </div>
          <div class="explore-info">
            <div class="explore-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div class="explore-footer">
              <p>
                 <a href={href} target="_blank" rel="noreferrer">read more...</a>
              </p>
            </div>
          </div>
        </article>
          )
        })}
        
      </div>
    </section>
    )
};

export default Explore;