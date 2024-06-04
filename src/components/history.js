import history_img from "../images/MAJULI.jpg"
import lachit_borphukan from "../images/Lachit_Borphukan.jpg"
import Title from "./title";
const History = ()=>{
    return (
        <section class="section" id="history">
        <Title title="KNOW" subTitle="Assam"/>
      

      <div class="section-center history-center">
        <div class="history-img">
          <img
            src={lachit_borphukan}
            class="history-photo"
            alt="awesome beach"
          />
        </div>
        <article class="history-info">
          <h3>history of Assam</h3>
          <p>
          The history of Assam is the history of a confluence of people from the east, west, south and the north; 
          the confluence of the Austroasiatic, Tibeto-Burman (Sino-Tibetan), Tai and Indo-Aryan cultures. Although 
          invaded over the centuries, it was never a vassal or a colony to an external power until the third Burmese invasion
           in 1821, and, subsequently, the British ingress into Assam in 1824 during the First Anglo-Burmese War.

          </p>
         
          <p>Assam today stands as a testament to its resilient and vibrant history, a jewel of Northeast India that 
            continues to enchant the world with its scenic landscapes, rich biodiversity, and the warm hospitality of its people.</p>
          <a href="https://en.wikipedia.org/wiki/History_of_Assam" target='_blank' class="btn">read more</a>
        </article>
      </div>
    </section>
    )
};

export default  History;