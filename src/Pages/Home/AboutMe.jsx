export default function AboutMe(){
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--image">
                <img src="./img/about-me.png" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Acerca de mi
                    </p>
                    <h1 className="skills--section--heading">
                        ¿Quien soy?
                    </h1>
                    <p className="hero--section--description">Tengo 26 años. Nací en San Juan, Argentina (Actualmente vivo ahí). Soy Ingeniero Electrónico egresado en Junio de 2022 de la Facultad de Ingeniería de la Universidad Nacional de San Juan. Además, soy Técnico electrónico egresado de la Escuela Industrial Domingo Faustino Sarmiento.</p>
                    <br />
                    <p className="hero--section--description">Desde mi niñez siempre tuve amor por la tecnología, una característica impulsada por mi padre, tambien apasionado de la tecnología, que con tan solo 4 años me enseñó lo que era un capacitor electrolítico (raro para un niño de la edad, pero era asombroso para mi). A la temprana edad de 8 años construí mi primer sitio web, guiado por una revista informática y con las herramientas de la época, alojando dicho sitio en Geocities.</p>
                    <br />
                    <p className="hero--section--description">Siempre me gusto leer y capacitarme en el mundo de la tecnología, ciencia y electrónica. Durante la secundaria estudié Electrónica, y descubrí que eso quería para mi futuro. Durante esa etapa hice miles de prácticas, aprendí a diseñar PCBs y simular circuitos en entornos SPICE, trabajar con PLCs, e incluso a programar en Arduino</p>
                    <br />
                    <p className="hero--section--description">Ya en la universidad, pude profundizar aún más los conocimientos adquiridos en el secundario. Me especialicé en Sistemas de Control y Telecomunicaciones. Además durante mi formación universitaria además pude aprender sobre electrónica digital, sistemas embebidos, FPGA, microcontroladores, etc.</p>

                </div>
            </div>
        </section>
    )
}