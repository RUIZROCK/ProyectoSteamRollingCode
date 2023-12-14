import Juego from "./Juego.js";
import Usuario from "./Usuario.js";


const sergio=new Usuario(undefined,"Sergio","Ruiz","ADMIN","sergioruizrock@gmail.com","sergioRuiz","sergioRuiz","Ruiz, Sergio.jpg");
const giselle=new Usuario(undefined,"Giselle","Ruiz","ADMIN","","giselleRuiz","giselleRuiz","Ruiz, Giselle.jpg");
const jennifer=new Usuario(undefined,"Jennifer","Valor","ADMIN","","jenniferValor","jenniferValor", "Valor, jennifer.jpeg");
const lucas=new Usuario(undefined,"Lucas","Jaime","ADMIN","","lucasJaime","lucasJaime","Jaime, Lucas.jpeg");
const maxi=new Usuario(undefined,"Maximiliano","Gomez","ADMIN","","MaximilianoGomez","MaximilianoGomez","Gómez, Maximiliano.jpg");

const ListaUsuarios=[];

ListaUsuarios.push(giselle);
ListaUsuarios.push(jennifer);
ListaUsuarios.push(lucas);
ListaUsuarios.push(maxi);
ListaUsuarios.push(sergio);

const pes4Resenias = [
    "PES 4 encantó con su realismo futbolístico en la era de los videojuegos deportivos, ofreciendo partidos emocionantes y una jugabilidad precisa.",
    "Una joya del pasado, PES 4 es recordado por su autenticidad en el campo, convirtiéndolo en un clásico que dejó huella en los fanáticos del fútbol.",
    "Gráficos sorprendentes para su tiempo y una experiencia de juego inigualable, PES 4 sigue siendo el referente de los juegos de fútbol retro.",
    "PES 4 capturó la esencia del deporte rey con una fórmula simple pero efectiva, proporcionando horas de diversión a los amantes del fútbol virtual.",
    "Aunque ha pasado el tiempo, las reseñas positivas de PES 4 destacan su legado duradero y su contribución a la evolución de los juegos de deportes."
  ];
  
  const madagascarResenias = [
    "Madagascar encantó a jugadores de todas las edades con su aventura animada, ofreciendo diversión y risas junto a personajes memorables.",
    "Las críticas de Madagascar destacan su originalidad y su capacidad para capturar la esencia de la película, convirtiéndolo en una opción ideal para los fanáticos de la animación.",
    "Con desafíos emocionantes y una narrativa entretenida, Madagascar se ganó reseñas positivas por ofrecer una experiencia de juego que complementa perfectamente la película.",
    "Madagascar fue elogiado por su accesibilidad y su enfoque familiar, brindando a los jugadores una experiencia alegre y ligera que perdura en la memoria.",
    "Las reseñas de Madagascar resaltan su encanto duradero y su capacidad para llevar la magia de la película a la pantalla de juego con éxito."
  ];
  
  const fifa19Resenias = [
    "FIFA 19 ha sido elogiado por su impresionante realismo visual, con gráficos que capturan la esencia de los estadios y los rostros de los jugadores de manera asombrosa.",
    "Con mejoras en la jugabilidad y modos innovadores, las reseñas de FIFA 19 destacan su capacidad para elevar la experiencia futbolística a nuevas alturas en la era digital.",
    "FIFA 19 ha sido aplaudido por su atención al detalle en la recreación de movimientos de los jugadores y la emoción palpable que ofrece en cada partido.",
    "Las reseñas positivas de FIFA 19 resaltan su amplia variedad de contenido, desde modos de carrera hasta el popular modo Ultimate Team, ofreciendo opciones para todos los gustos.",
    "Con una banda sonora envolvente y una presentación impecable, FIFA 19 continúa siendo un referente en la serie, según las opiniones de los aficionados al fútbol virtual."
  ];
  
  const doomResenias = [
    "Doom es un festín para los amantes de la acción, con un diseño de niveles ingenioso, armas devastadoras y demonios para un caos infernal sin igual.",
    "Las reseñas de Doom resaltan su ritmo vertiginoso, manteniendo a los jugadores al borde del asiento con encuentros intensos y una gloriosa variedad de desafíos.",
    "Doom ha sido elogiado por revitalizar el género de los FPS, combinando brutalidad y velocidad en una experiencia que captura la esencia del clásico original.",
    "Con un modo multijugador sólido y un modo SnapMap creativo, las reseñas de Doom señalan su diversidad y longevidad en la escena de los juegos de disparos.",
    "Doom ha dejado una marca imborrable como un renacimiento exitoso, según las reseñas que destacan su valiente enfoque en la acción directa y sin compromisos."
  ];
  
  
  const csSourceResenias = [
    "Counter-Strike Source lleva la esencia táctica del original a una nueva era, con gráficos mejorados y una jugabilidad que mantiene la intensidad característica.",
    "Las reseñas de Counter-Strike Source subrayan su capacidad para modernizar un clásico, ofreciendo la misma experiencia adictiva con un aspecto visual más contemporáneo.",
    "Con la familiaridad de los mapas clásicos y la introducción de elementos visuales actualizados, Counter-Strike Source ha sido bien recibido por la comunidad de jugadores.",
    "Las reseñas positivas de Counter-Strike Source resaltan su equilibrio entre nostalgia y frescura, atrayendo tanto a veteranos como a nuevos jugadores al universo de Counter-Strike.",
    "Counter-Strike Source se ha ganado su lugar como un título atemporal, según las opiniones que reconocen su capacidad para mantener la esencia del juego original mientras evoluciona con el tiempo."
  ];
  
  const cod2Resenias = [
    "Call of Duty 2 es un viaje a la Segunda Guerra Mundial, recibiendo elogios por su enfoque auténtico, emocionantes batallas y gráficos avanzados para su época.",
    "Las reseñas de Call of Duty 2 destacan su inmersión en la historia, llevando a los jugadores a través de emocionantes campañas militares y batallas icónicas.",
    "Con una combinación de tácticas y acción frenética, Call of Duty 2 ha sido reconocido como un referente en los juegos de disparos bélicos, según las opiniones de los jugadores.",
    "Call of Duty 2 ha dejado una impresión duradera por su narrativa impactante y su diseño de niveles, siendo considerado como uno de los mejores de la serie.",
    "Las reseñas positivas de Call of Duty 2 resaltan su contribución al género de shooters históricos y su capacidad para ofrecer experiencias intensas e inolvidables."
  ];
  
  const ac3Resenias = [
    "Assassin's Creed III transporta a los jugadores a la Revolución Americana, recibiendo elogios por su mundo abierto expansivo, personajes intrigantes y trama cautivadora.",
    "Las reseñas de Assassin's Creed III destacan su protagonista carismático, Connor, y la exploración de eventos históricos, ofreciendo una experiencia inmersiva en la historia.",
    "Con mecánicas de juego mejoradas y un enfoque en el combate, Assassin's Creed III ha sido reconocido por revitalizar la serie y ofrecer un cambio refrescante.",
    "Assassin's Creed III ha dejado una impresión duradera por su escala épica y su contribución al género de aventuras históricas, según las opiniones de los jugadores.",
    "Las reseñas positivas de Assassin's Creed III resaltan su capacidad para fusionar la narrativa épica con la acción furtiva, creando una experiencia única en la serie."
  ];
  
  const gtaViceCityResenias = [
    "GTA Vice City transporta a los jugadores a la decadencia de los años 80 en Miami, recibiendo elogios por su atmósfera única, personajes carismáticos y su banda sonora icónica.",
    "Las reseñas de Vice City destacan su narrativa envolvente, siguiendo la historia de Tommy Vercetti en su ascenso al poder criminal en la ciudad soleada.",
    "Con misiones variadas y un mundo abierto lleno de secretos, Vice City ha sido reconocido como un clásico, capturando la esencia del crimen en una era nostálgica.",
    "GTA Vice City ha dejado una huella cultural, siendo recordado como uno de los títulos más queridos de la serie gracias a su estilo y carácter únicos.",
    "Las reseñas positivas de Vice City subrayan su impacto duradero y su capacidad para ofrecer una experiencia de juego inolvidable en un entorno vibrante."
  ];
  
  
  const streetFighterVResenias = [
    "Street Fighter V ha sido aplaudido por su mecánica de lucha precisa, presentación visual impresionante y una lista de personajes icónicos que atraen a jugadores de todas las habilidades.",
    "Las reseñas de Street Fighter V resaltan su enfoque en la competición, con torneos emocionantes y actualizaciones frecuentes que mantienen la escena competitiva viva y activa.",
    "Con el regreso de luchadores clásicos y nuevos personajes, Street Fighter V ha sido reconocido por su diversidad en el elenco, ofreciendo estilos de juego para todos los gustos.",
    "Street Fighter V ha dejado una marca como un título esencial en el género de juegos de lucha, según las opiniones que elogian su equilibrio y su atractivo global.",
    "Las reseñas positivas de Street Fighter V subrayan su lugar como sucesor digno en la venerada serie, continuando la tradición de combate feroz y estratégico."
  ];
  
  const residentEvil2Resenias = [
    "Resident Evil 2 ha sido aclamado por su remake magistral, ofreciendo gráficos realistas, una ambientación aterradora y una reinvención brillante de la clásica historia de horror.",
    "Las reseñas de Resident Evil 2 resaltan su enfoque en la supervivencia, con mecánicas de juego tensas, puzzles desafiantes y encuentros aterradores con zombis y monstruos.",
    "Con una narrativa convincente y personajes memorables, Resident Evil 2 ha sido elogiado por llevar el horror de supervivencia a nuevas alturas, conquistando tanto a nuevos como a antiguos fanáticos.",
    "Resident Evil 2 ha dejado una impresión duradera en el género de horror, siendo considerado como uno de los remakes más exitosos y fieles a la esencia original.",
    "Las reseñas positivas de Resident Evil 2 subrayan su capacidad para asustar y emocionar, posicionándolo como un pilar en la resurgencia del survival horror."
  ];
  
  const mortalKombatXResenias = [
    "Mortal Kombat X ha llevado la brutalidad a nuevos niveles, con gráficos impresionantes, movimientos especiales impactantes y una historia que conecta generaciones de luchadores.",
    "Las reseñas de Mortal Kombat X resaltan su enfoque en la personalización de personajes, con variaciones únicas que afectan el estilo de lucha y estrategias en combate.",
    "Con una extensa lista de luchadores y modos de juego variados, Mortal Kombat X ha sido elogiado por su capacidad para mantenerse fresco y emocionante para los veteranos y los recién llegados.",
    "Mortal Kombat X ha dejado una huella duradera como un título que lleva la franquicia hacia adelante, gracias a su innovación en mecánicas y su compromiso con la brutalidad.",
    "Las reseñas positivas de Mortal Kombat X subrayan su importancia en la serie, consolidándolo como uno de los juegos de lucha más emocionantes y exitosos de la era moderna."
  ];


let pes4 = new Juego(undefined,"PES 4","Sistema modesto, Windows XP, Pentium III, 256 MB RAM.", "Konami", "Deporte", "$15", "Sumérgete en el campo con PES 4, donde la precisión del fútbol y los gráficos de la época crean una experiencia auténtica.","pes4.jpg",pes4Resenias);

let madagascar = new Juego(undefined,"Madagascar", "PC básica, Windows 98/ME/2000/XP, Pentium III, 256 MB RAM.", "Toys for Bob", "Aventura", "$5", "Embárcate en una aventura animada con Madagascar, donde la diversión y el humor único son garantía para jugadores de todas las edades.","madagascar.jpeg",madagascarResenias);

let fifa19 = new Juego(undefined,"FIFA 19", "Moderado, Windows 7/8.1/10, Core i3-2100, 8 GB RAM, 50 GB HDD.", "EA Vancouver", "Deporte", "$25", "Disfruta del espectáculo futbolístico en FIFA 19, con realismo asombroso y jugabilidad refinada que captura la esencia del deporte.","fifa19.jpeg",fifa19Resenias);

let doom = new Juego(undefined,"Doom", "Potente, Windows 7/8.1/10 (64-bit), Intel Core i5, 8 GB RAM, 55 GB HDD.", "id Software", "Acción", "$25", "Sumérgete en el caos infernal de Doom, un FPS implacable que redefine la acción en primera persona con intensidad y brutalidad.","Doom.webp",doomResenias);

let css = new Juego(undefined,"Counter-Strike Source", "Estándar, Windows 7, procesador 2.4 GHz, 1 GB RAM.", "Valve", "Disparos", "$15", "Revive la emoción táctica en Counter-Strike Source, con gráficos mejorados y la misma intensidad en sus batallas multijugador.","counterStrikeSource.jpg",csSourceResenias);

let cod2 = new Juego(undefined,"Call of Duty 2", "Moderado, Windows 2000/XP, Pentium IV, 512 MB RAM.", "Infinity Ward", "Acción", "$10", "Sumérgete en la intensidad de la Segunda Guerra Mundial con Call of Duty 2, experimentando batallas históricas con realismo impresionante.","callOfDuty2.jpg",cod2Resenias);

let ac3 = new Juego(undefined,"Assassin's Creed III", "Configuración media, Windows 7, Core 2 Duo, 2 GB RAM, 17 GB HDD.", "Ubisoft Montreal", "Aventura", "$20", "Embárcate en una aventura revolucionaria con Assassin's Creed III, explorando un mundo abierto impresionante y participando en acción cautivadora.","AssasinsCreedIII.jpeg",ac3Resenias);

let gtavc = new Juego(undefined,"GTA Vice City", "Básico, Windows 98/ME/2000/XP, Pentium III, 128 MB RAM.", "Rockstar North", "Aventura", "$10", "Regresa a los vibrantes años 80 con GTA Vice City, un juego de aventura en mundo abierto lleno de crimen, nostalgia y una banda sonora inolvidable.","gta-vc.jpg",gtaViceCityResenias);

let sfv = new Juego(undefined,"Street Fighter V", "Requisitos moderados, Windows 7/8/10, Core i3, 6 GB RAM.", "Capcom", "Lucha", "$30", "Enfréntate a combates legendarios en Street Fighter V, con una feroz selección de luchadores y una competición intensa que desafía tus habilidades.","streetFighterV.webp",streetFighterVResenias);

let re2 = new Juego(undefined,"Resident Evil 2", "Configuración media, Windows 7/8.1/10, Core i5, 8 GB RAM, 26 GB HDD.", "Capcom", "Horror", "$25", "Vive el horror de supervivencia en Resident Evil 2, con Raccoon City renovado y una tensión constante en este remake impresionante.","residentEvil2.jpg",residentEvil2Resenias);

let mkx = new Juego(undefined,"Mortal Kombat X", "Alto rendimiento, Windows 7/8/10, Core i5, 8 GB RAM, 40 GB HDD.", "NetherRealm Studios", "Lucha", "$25", "Explora batallas sangrientas y gráficos sorprendentes en Mortal Kombat X, la evolución de la brutalidad en un juego de lucha inmersivo.","mortalKombatX.jpeg",mortalKombatXResenias);


          

  export const ListaJuegos=[];

  ListaJuegos.push(pes4);
  ListaJuegos.push(doom);
  ListaJuegos.push(gtavc);
  ListaJuegos.push(re2);
  ListaJuegos.push(mkx);
  ListaJuegos.push(ac3);
  ListaJuegos.push(cod2);
  ListaJuegos.push(css);
  ListaJuegos.push(madagascar);
  ListaJuegos.push(fifa19);
  ListaJuegos.push(sfv);







