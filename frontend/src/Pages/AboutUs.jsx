import aboutUs from './styles/About.module.css';

export const AboutUs = () => {
    return (
        <>
        <h2 className={aboutUs.about}> ¿Qué es AMMA?, ¿Quién esta detrás? </h2>
        <div className={aboutUs.containerAbout}>
        <p className={aboutUs.aboutText}>Amma se gesto en el año 2020, como una idea de hacer algo, no sabiendo muy bien qué, solo 
            sabiendo que queria moverse, asi fué que me llamó la atención una bota, mi hermana la tenía puesta y me paso el contacto
            de la fábrica donde la hacían, el resto les dejo en su imaginación.  ¿Qué ofrece Amma que la hace una marca única?, ofrece atención personalizada,
            creemos que cada persona es única, amamos la esencia que nos hace unicos. </p>
            <p className={aboutUs.aboutText}>Al pasar el tiempo AMMA se empezó a expandir con el deseo 
            de crecer, no solo por la salud del emprendimiento, sino con el deseo de hacer sentir única y especial
            a quienes deciden elegir calzarse y vestirse con nuestros productos. Actualmente brindamos atención online, a través de nuestras diferentes redes sociales.
            Pronto abriremos nuestro local físico, donde espero podamos conocernos aun más.</p>
            <p className={aboutUs.aboutText}>¿Quién esta detrás de todo esto? Mi nombre es Amalia, estudié para ser profesora de Música, pero empecé a caminar hacia lugares donde nunca habia 
                estado, no necesariamente fisicos, amo crear, y tener la oportunidad de formar este espacio de encuentro, donde yo puedo brindarte algo que vos necesitas
                es algo que me apasiona. Que en Amma te puedas encontrar y pueda ayudarte a ser mas vos en este mundo.  
            </p>
            </div>
        </>
    )
}
