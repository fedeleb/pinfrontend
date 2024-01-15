import data from "../../data/index.json"
import cvPDF from "../../data/cv-bernart.pdf"; // Ruta al archivo PDF


export default function MyPortfolio(){
    return(
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">
                        Experiencia
                    </p>
                    <h2 className="section--heading">
                        Experiencia Laboral
                    </h2>
                </div>
                <div>
                    <a href={cvPDF} download className="btn btn-github">
                    <svg xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd" 
                    viewBox="0 0 33 33" id="download" fill="none"><path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"
                    fill="currentColor"></path></svg>
                    Descargar CV
                    </a>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index)=>(
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--image">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">
                                    {item.title}
                                </h3>
                                <p className="text-md">
                                    {item.description}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                )
                )}
            </div>
        </section>
    )
}