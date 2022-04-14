import Header from "@components/Header/Header";
import Layout from "@components/Layout/Layout";
import MapGrid from "@components/MapGrid/MapGrid";

import indexCover from '../public/images/portada4.jpg';
import banner from '../public/images/contacto1.webp';
import Meta from "@components/Meta/Meta";

export default function contacto() {
  return (
    <>
        <Meta 
              title="Contacto | Dr. Julián Tamayo"
              desc="Página de contacto del Doctor Julián Tamayo"
              canonical="www.juliantamayo.com/contacto"
              image={indexCover}
        />
        <Header
        title="contacto"
        image={banner}
        />           
        <Layout>
        <MapGrid/>

        </Layout>
    
    
    </>
  )
}
