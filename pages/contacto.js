import Header from "@components/Header/Header";
import Layout from "@components/Layout/Layout";
import MapGrid from "@components/MapGrid/MapGrid";

import indexCover from "../public/images/portada4.jpg";
import banner from "../public/images/contacto1.webp";
import Meta from "@components/Meta/Meta";

export default function contacto(props) {
  const { address, workWithUs } = props;

  return (
    <>
      <Meta
        title="Contacto | Dr. Julián Tamayo"
        desc="Página de contacto del Doctor Julián Tamayo | Endocrino especialista en el cuidado de enfermedades crónicas con consulta en Las Palmas."
        canonical="https://www.juliantamayo.com/contacto"
        image={indexCover}
      />
      <Header title="contacto" image={banner} />
      <Layout>
        <MapGrid address={address} workWithUs={workWithUs} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(`*[ _type == "pagePersonalization"]{
        address,
        workWithUs
    }`);
  const url = `https://6yfev950.api.sanity.io/v2021-08-31/data/query/production?query=${query}`;

  const data = await fetch(url).then((res) => res.json());
  const { address, workWithUs } = data.result[0] || [];

  return {
    props: {
      address,
      workWithUs,
    },
  };
};
