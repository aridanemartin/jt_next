import LinkButton from "@components/LinkButton/LinkButton";
import styles from "./MapGrid.module.css";

export default function MapGrid({ address, workWithUs }) {
  const { isWorkWithUsEnabled, workWithUsEmail } = workWithUs;

  return (
    <div className={styles.mapGridWrapper}>
      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.29226787979!2d-15.432566284928443!3d28.137589582615675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc409515351a3d6f%3A0x1589c0272867fa0d!2sC.%20Pdte.%20Alvear%2C%2052%2C%2035007%20Las%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1sen!2ses!4v1648913740595!5m2!1sen!2ses"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <h2>Dirección</h2>
          <address>
            {address.address1}
            <br />
            {address.address2}
            <br />
            {address.providence}
            <br />
            {address.zipCode}
            <br />
            {address.phone ? (
              <>
                {address.phone}
                <br />
              </>
            ) : null}
            {address.mail ? (
              <>
                {address.mail}
                <br />
              </>
            ) : null}
          </address>
        </div>
        <div className={styles.buttonSectionWrapper}>
          <h2>Reserva tu cita aquí</h2>
          <div className={styles.buttonWrapper}>
            <LinkButton
              className={styles.button}
              link="/equipo"
              text="Concertar Cita"
              fullWidth
            />
          </div>
          <div className={styles.buttonWrapper}>
            <LinkButton
              className={styles.button}
              link="https://calendly.com/juliantamayoendocrino/visitaurgente"
              text="Solicitar Cita Urgente"
              fullWidth
            />
          </div>
          <div className={styles.buttonWrapper}>
            <LinkButton
              className={styles.button}
              link="https://docs.google.com/forms/d/e/1FAIpQLSdGI9UqhqfUql4R6dqmf3ka542BOrUdCTH-t1IuV_0abreojw/viewform"
              text="Ponerme en lista de espera"
              fullWidth
            />
          </div>
          {isWorkWithUsEnabled && workWithUsEmail && (
            <div className={styles.buttonWrapper}>
              <LinkButton
                className={styles.button}
                link={`mailto:${workWithUsEmail}?subject=Julián Tamayo | Trabaja con Nosotros`}
                text="Trabaja con Nosotros"
                fullWidth
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
