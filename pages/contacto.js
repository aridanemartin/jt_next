import Header from "@components/Header/Header";
import Layout from "@components/Layout/Layout";
import MapGrid from "@components/MapGrid/MapGrid";

import banner from '../public/images/contacto1.webp';

export default function contacto() {
  return (
    <>
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
