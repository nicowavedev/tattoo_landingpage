import React from "react";

const styles = {
  aboutContainer: {
    padding: "20px",
    textAlign: "center",
    color: "red",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  content: {
    fontSize: "30px",
    lineHeight: "1.5",
    fontFamily: "Amatic SC, cursive",
  },
};

function About() {
  return (
    <div style={styles.aboutContainer}>
      <h2 style={styles.heading}>Biografía del Artista</h2>
      <p style={styles.content}>
        Ejemplo 1: Biografía Personal "¡Hola! Soy [Nombre del Artista], un
        apasionado del arte del tatuaje. Mi viaje en el mundo del tatuaje
        comenzó hace [X años] cuando descubrí mi amor por la expresión artística
        en la piel. A lo largo de los años, he perfeccionado mi habilidad y
        estilo para crear tatuajes únicos y significativos para mis clientes. Mi
        objetivo es [objetivo del artista, como brindar experiencias memorables
        o contar historias a través del arte]. ¡Espero tener la oportunidad de
        trabajar contigo y transformar tus ideas en tinta en la piel!" Ejemplo
        2: Filosofía y Estilo "En [Nombre del Estudio], creemos que el arte del
        tatuaje es una forma poderosa de autoexpresión y empoderamiento
        personal. Nos especializamos en [estilo de tatuaje, como realismo,
        geométrico, acuarela, etc.], y nos enorgullecemos de crear obras de arte
        que cuenten historias y reflejen la individualidad de cada cliente. Cada
        tatuaje es una colaboración única entre el artista y el cliente, y
        estamos comprometidos a brindar una experiencia positiva y profesional
        en cada paso del proceso." Ejemplo 3: Experiencia y Reconocimientos "Con
        [X años] de experiencia en la industria del tatuaje, he tenido el honor
        de trabajar con una amplia variedad de clientes, desde entusiastas
        primerizos hasta coleccionistas experimentados. Mi trabajo ha sido
        presentado en [menciones en revistas, exposiciones o competencias].
        Estoy dedicado a mantenerme actualizado con las últimas tendencias y
        técnicas en el mundo del tatuaje para ofrecer a mis clientes resultados
        excepcionales y duraderos." Ejemplo 4: Proceso Creativo "En mi estudio,
        el proceso de creación de un tatuaje es una experiencia colaborativa y
        emocionante. Comenzamos con una consulta donde escucho tus ideas,
        historias y deseos para el diseño. Luego, trabajamos juntos para crear
        un diseño personalizado que capte tu visión. Utilizo técnicas de diseño
        y técnicas de tatuaje de vanguardia para garantizar que el resultado
        final sea exactamente lo que imaginaste. Cada tatuaje es una obra
        maestra única, y estoy comprometido a brindar un servicio excepcional y
        un tatuaje que amarás para siempre." Estos son solo ejemplos para
        inspirarte a crear tu propia sección "About" basada en la personalidad y
        el enfoque del artista del tatuaje. Asegúrate de que el contenido
        refleje quién es el artista, su estilo, sus valores y su enfoque
        creativo. ¡Buena suerte!
      </p>
      {/* Aquí podrías agregar más contenido sobre el artista */}
    </div>
  );
}

export default About;
