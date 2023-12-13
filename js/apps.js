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
  
  const pes6Resenias = [
    "PES 6 marcó una época con su jugabilidad pulida y su enfoque táctico, estableciendo estándares para los juegos de fútbol que le siguieron.",
    "Con detalles gráficos asombrosos y mecánicas mejoradas, PES 6 recibió elogios por llevar la emoción del fútbol a nuevas alturas en la era de los videojuegos.",
    "Los fanáticos elogian a PES 6 por su equilibrio entre simulación y diversión, creando partidos envolventes y competiciones virtuales llenas de emoción.",
    "PES 6 se mantiene en la memoria de los jugadores como un hito en la serie, gracias a su calidad técnica y su capacidad para cautivar a los fanáticos del fútbol.",
    "Las reseñas positivas de PES 6 resaltan su longevidad y su contribución duradera al género de los videojuegos de deportes."
  ];
  
  
  const pes13Resenias = [
    "PES 13 recibió elogios por su evolución en la jugabilidad y los gráficos, ofreciendo una experiencia futbolística moderna y emocionante.",
    "Los fanáticos destacan la autenticidad de PES 13, con movimientos suaves y una representación realista de los jugadores que lo convierten en un referente en su género.",
    "Con modos de juego innovadores y gráficos de alta calidad, PES 13 se ganó el corazón de los jugadores y sigue siendo un título bien recordado en la serie.",
    "PES 13 recibió críticas positivas por su enfoque en la jugabilidad táctica, brindando a los jugadores un control preciso sobre cada pase y disparo.",
    "Las reseñas de PES 13 subrayan su lugar como un hito en la serie, destacando su impacto duradero en la evolución de los juegos de fútbol."
  ];
  
  const madagascarResenias = [
    "Madagascar encantó a jugadores de todas las edades con su aventura animada, ofreciendo diversión y risas junto a personajes memorables.",
    "Las críticas de Madagascar destacan su originalidad y su capacidad para capturar la esencia de la película, convirtiéndolo en una opción ideal para los fanáticos de la animación.",
    "Con desafíos emocionantes y una narrativa entretenida, Madagascar se ganó reseñas positivas por ofrecer una experiencia de juego que complementa perfectamente la película.",
    "Madagascar fue elogiado por su accesibilidad y su enfoque familiar, brindando a los jugadores una experiencia alegre y ligera que perdura en la memoria.",
    "Las reseñas de Madagascar resaltan su encanto duradero y su capacidad para llevar la magia de la película a la pantalla de juego con éxito."
  ];
  
  const lolResenias = [
    "League of Legends ha redefinido el género MOBA, acumulando millones de seguidores por su estrategia intensa y la diversidad de campeones.",
    "Con actualizaciones frecuentes y un fuerte enfoque en la comunidad, las reseñas de League of Legends resaltan su capacidad para mantenerse fresco y relevante a lo largo del tiempo.",
    "League of Legends ha recibido elogios por su equilibrio entre accesibilidad y profundidad estratégica, atrayendo tanto a jugadores casuales como a competidores ávidos.",
    "La competitividad de League of Legends ha generado una comunidad global apasionada, con reseñas que destacan la emoción de las partidas clasificatorias y los eventos.",
    "Las reseñas positivas de League of Legends subrayan su impacto en el mundo de los deportes electrónicos y su contribución duradera al género MOBA."
  ];
  
  const gtaVResenias = [
    "GTA V redefine la experiencia de mundo abierto con su narrativa envolvente, personajes memorables y un vasto entorno que invita a la exploración.",
    "Con misiones variadas y opciones ilimitadas, las reseñas de GTA V elogian su libertad y la habilidad para sumergir a los jugadores en la vida criminal de Los Santos.",
    "GTA V ha sido aclamado por su atención al detalle, desde la recreación de la ciudad hasta los eventos aleatorios, creando un mundo virtual vivo y auténtico.",
    "La combinación de acción, conducción y humor negro ha convertido a GTA V en un clásico instantáneo, con reseñas que destacan su impacto duradero en la industria.",
    "Las reseñas positivas de GTA V señalan su calidad técnica, la riqueza de su historia y su capacidad para ofrecer momentos épicos e inolvidables."
  ];
  
  
  const fifa16Resenias = [
    "FIFA 16 ha recibido críticas positivas por su realismo futbolístico, destacando la precisión en los movimientos de los jugadores y la autenticidad de los partidos.",
    "Con modos de juego mejorados y una presentación envolvente, las reseñas de FIFA 16 subrayan su capacidad para ofrecer una experiencia completa para los fanáticos del fútbol.",
    "FIFA 16 ha sido elogiado por su enfoque en la táctica, brindando a los jugadores más control sobre el campo y estrategias más profundas durante los partidos.",
    "Las reseñas positivas de FIFA 16 resaltan su variedad de equipos y ligas, proporcionando una experiencia de juego que satisface tanto a los fanáticos casuales como a los apasionados.",
    "Con gráficos mejorados y una jugabilidad refinada, FIFA 16 se mantiene como un título destacado en la serie, según las opiniones de los jugadores."
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
  
  const csResenias = [
    "Counter-Strike sigue siendo un pilar en los juegos de disparos tácticos, con reseñas que resaltan su equilibrio, mapas icónicos y acción estratégica adictiva.",
    "Las reseñas de Counter-Strike elogian su enfoque en la habilidad pura, creando una experiencia competitiva que desafía a los jugadores a perfeccionar sus tácticas y puntería.",
    "Con una comunidad activa y actualizaciones constantes, Counter-Strike ha mantenido su relevancia, siendo considerado como uno de los mejores juegos multijugador de todos los tiempos.",
    "Counter-Strike ha sido aplaudido por su accesibilidad y al mismo tiempo profundidad estratégica, convirtiéndolo en una opción atractiva para jugadores de todos los niveles.",
    "Las reseñas positivas de Counter-Strike destacan su impacto cultural duradero y su influencia en la evolución de los juegos de disparos en línea."
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
  
  const codBlackOpsResenias = [
    "Black Ops cautivó con su intrigante trama de la Guerra Fría, recibiendo elogios por su narrativa envolvente, personajes complejos y giros inesperados.",
    "Las reseñas de Black Ops destacan su multijugador adictivo, introduciendo modos innovadores y mapas memorables que mantuvieron a la comunidad comprometida.",
    "Con una combinación de acción cinematográfica y mecánicas sólidas, Black Ops se ha ganado la reputación de ser uno de los títulos más impactantes de la serie.",
    "Las reseñas positivas de Black Ops resaltan su capacidad para fusionar la narrativa profunda con la acción intensa, ofreciendo una experiencia de juego completa.",
    "Black Ops ha dejado una huella duradera en la serie Call of Duty, según las opiniones que reconocen su contribución a la evolución de los juegos de disparos."
  ];
  
  
  const codMw3Resenias = [
    "Modern Warfare 3 cerró la trilogía con un estallido, siendo elogiado por su campaña cinematográfica, batallas épicas y un multijugador que mantuvo la emoción.",
    "Las reseñas de Modern Warfare 3 resaltan su intensidad, llevando a los jugadores a través de escenarios globales en una guerra moderna con eventos inolvidables.",
    "Con mejoras en el modo Spec Ops y un multijugador adictivo, Modern Warfare 3 ha sido considerado como un cierre épico para la trama iniciada en los juegos anteriores.",
    "Modern Warfare 3 ha sido elogiado por su equilibrio entre la narrativa apasionante y las emociones de combate, siendo recordado como uno de los mejores de la serie.",
    "Las reseñas positivas de Modern Warfare 3 subrayan su impacto duradero en la serie Call of Duty y su lugar como uno de los títulos más vendidos de la franquicia."
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
  
  const mortalKombatUltimateResenias = [
    "Mortal Kombat Ultimate ha sido aclamado por su brutalidad sin restricciones, con movimientos especiales impactantes, fatalities elaborados y una lista extensa de luchadores.",
    "Las reseñas de Mortal Kombat Ultimate resaltan su fidelidad a la esencia de la serie, ofreciendo combates sangrientos y un nivel de detalle gráfico que impresiona a los jugadores.",
    "Con modos de juego variados y la inclusión de personajes clásicos y nuevos, Mortal Kombat Ultimate ha sido reconocido por su contenido abundante que satisface a los fanáticos de la lucha.",
    "Mortal Kombat Ultimate ha dejado una impresión duradera como un juego que celebra la violencia estilizada, la narrativa intensa y la diversión competitiva en el género de lucha.",
    "Las reseñas positivas de Mortal Kombat Ultimate subrayan su impacto cultural y su capacidad para evolucionar con éxito mientras mantiene la esencia que lo hizo famoso."
  ];
  
  const mortalKombatXResenias = [
    "Mortal Kombat X ha llevado la brutalidad a nuevos niveles, con gráficos impresionantes, movimientos especiales impactantes y una historia que conecta generaciones de luchadores.",
    "Las reseñas de Mortal Kombat X resaltan su enfoque en la personalización de personajes, con variaciones únicas que afectan el estilo de lucha y estrategias en combate.",
    "Con una extensa lista de luchadores y modos de juego variados, Mortal Kombat X ha sido elogiado por su capacidad para mantenerse fresco y emocionante para los veteranos y los recién llegados.",
    "Mortal Kombat X ha dejado una huella duradera como un título que lleva la franquicia hacia adelante, gracias a su innovación en mecánicas y su compromiso con la brutalidad.",
    "Las reseñas positivas de Mortal Kombat X subrayan su importancia en la serie, consolidándolo como uno de los juegos de lucha más emocionantes y exitosos de la era moderna."
  ];


let pes4 = new Juego(undefined,"PES 4","Sistema modesto, Windows XP, Pentium III, 256 MB RAM.", "Konami", "Deporte", "$15", "Sumérgete en el campo con PES 4, donde la precisión del fútbol y los gráficos de la época crean una experiencia auténtica.","pes4.jpg",pes4Resenias);

let pes6 = new Juego(undefined,"PES 6", "Requisitos ligeros, Windows 2000/XP, 800 MHz, 256 MB RAM.", "Konami", "Deporte", "$10", "Revive la época dorada del fútbol con PES 6, destacando por su refinada jugabilidad y la icónica era de mediados de 2000.","pes6.jpeg",pes6Resenias);

let pes13 = new Juego(undefined,"PES 13", "Configuración media, Windows XP/Vista/7, Core 2 Duo, 2 GB RAM.", "Konami", "Deporte", "$20", "Experimenta la evolución del fútbol en PES 13, con movimientos suaves y una experiencia moderna inolvidable para los fanáticos.","pes13.jpeg",pes13Resenias);

let madagascar = new Juego(undefined,"Madagascar", "PC básica, Windows 98/ME/2000/XP, Pentium III, 256 MB RAM.", "Toys for Bob", "Aventura", "$5", "Embárcate en una aventura animada con Madagascar, donde la diversión y el humor único son garantía para jugadores de todas las edades.","madagascar.jpeg",madagascarResenias);

let lol = new Juego(undefined,"League of Legends", "Bajo requerimiento, Windows 7/8/10, 3 GHz, 2 GB RAM.", "Riot Games", "MOBA", "Gratis (juego en línea)", "Adéntrate en la estrategia y la emoción competitiva con League of Legends, un MOBA que ha definido el género y la competición global.","leageOfLegends.png",lolResenias);

let gtav = new Juego(undefined,"GTA V", "Alto rendimiento, Windows 7/8/10, Core i5, 8 GB RAM, 65 GB HDD.", "Rockstar North", "Aventura", "$30", "Vive la épica criminal en GTA V, con un mundo abierto impresionante y tramas entrelazadas que te sumergirán en Los Santos.","gta-5.jpg",gtaVResenias);

let fifa16 = new Juego(undefined,"FIFA 16", "Estándar, Windows 7/8/8.1/10, Core i3, 4 GB RAM, 15 GB HDD.", "EA Vancouver", "Deporte", "$15", "Siente la emoción del fútbol en FIFA 16, con precisión táctica y estrellas destacadas que llevan la experiencia a otro nivel.","fifa16.jpeg",fifa16Resenias);

let fifa19 = new Juego(undefined,"FIFA 19", "Moderado, Windows 7/8.1/10, Core i3-2100, 8 GB RAM, 50 GB HDD.", "EA Vancouver", "Deporte", "$25", "Disfruta del espectáculo futbolístico en FIFA 19, con realismo asombroso y jugabilidad refinada que captura la esencia del deporte.","fifa19.jpeg",fifa19Resenias);

let doom = new Juego(undefined,"Doom", "Potente, Windows 7/8.1/10 (64-bit), Intel Core i5, 8 GB RAM, 55 GB HDD.", "id Software", "Acción", "$25", "Sumérgete en el caos infernal de Doom, un FPS implacable que redefine la acción en primera persona con intensidad y brutalidad.","Doom.webp",doomResenias);

let cs = new Juego(undefined,"Counter-Strike", "Ligero, Windows 7/8/10, procesador 1.6 GHz, 512 MB RAM.", "Valve", "Disparos", "$10", "Enfréntate a tácticas letales en Counter-Strike, un clásico atemporal de disparos multijugador que ha marcado a generaciones de jugadores.","counterStrike2.jpg",csResenias);

let css = new Juego(undefined,"Counter-Strike Source", "Estándar, Windows 7, procesador 2.4 GHz, 1 GB RAM.", "Valve", "Disparos", "$15", "Revive la emoción táctica en Counter-Strike Source, con gráficos mejorados y la misma intensidad en sus batallas multijugador.","counterStrikeSource.jpg",csSourceResenias);

let cod2 = new Juego(undefined,"Call of Duty 2", "Moderado, Windows 2000/XP, Pentium IV, 512 MB RAM.", "Infinity Ward", "Acción", "$10", "Sumérgete en la intensidad de la Segunda Guerra Mundial con Call of Duty 2, experimentando batallas históricas con realismo impresionante.","callOfDuty2.jpg",cod2Resenias);

let codbo = new Juego(undefined,"Call of Duty Black Ops", "Alto rendimiento, Windows 7/Vista/XP, Core 2 Duo, 2 GB RAM.", "Treyarch", "Acción", "$20", "Explora la intriga de la Guerra Fría en Call of Duty Black Ops, con misiones emocionantes y acción explosiva que te mantendrán al borde del asiento.","callOfDutyBlackOps.jpg",codBlackOpsResenias);

let codmw3 = new Juego(undefined,"Call of Duty Modern Warfare 3", "Requisitos medios, Windows XP/Vista/7, Core 2 Duo, 2 GB RAM.", "Infinity Ward", "Acción", "$15", "Únete a la guerra global en Call of Duty Modern Warfare 3, con una campaña intensa y un multijugador adictivo que desafía tus habilidades.","callOfDutyMW3.jpg",codMw3Resenias);

let ac3 = new Juego(undefined,"Assassin's Creed III", "Configuración media, Windows 7, Core 2 Duo, 2 GB RAM, 17 GB HDD.", "Ubisoft Montreal", "Aventura", "$20", "Embárcate en una aventura revolucionaria con Assassin's Creed III, explorando un mundo abierto impresionante y participando en acción cautivadora.","AssasinsCreedIII.jpeg",ac3Resenias);

let gtavc = new Juego(undefined,"GTA Vice City", "Básico, Windows 98/ME/2000/XP, Pentium III, 128 MB RAM.", "Rockstar North", "Aventura", "$10", "Regresa a los vibrantes años 80 con GTA Vice City, un juego de aventura en mundo abierto lleno de crimen, nostalgia y una banda sonora inolvidable.","gta-vc.jpg",gtaViceCityResenias);

let sfv = new Juego(undefined,"Street Fighter V", "Requisitos moderados, Windows 7/8/10, Core i3, 6 GB RAM.", "Capcom", "Lucha", "$30", "Enfréntate a combates legendarios en Street Fighter V, con una feroz selección de luchadores y una competición intensa que desafía tus habilidades.","streetFighterV.webp",streetFighterVResenias);

let re2 = new Juego(undefined,"Resident Evil 2", "Configuración media, Windows 7/8.1/10, Core i5, 8 GB RAM, 26 GB HDD.", "Capcom", "Horror", "$25", "Vive el horror de supervivencia en Resident Evil 2, con Raccoon City renovado y una tensión constante en este remake impresionante.","residentEvil2.jpg",residentEvil2Resenias);

let mkult = new Juego(undefined,"Mortal Kombat Ultimate", "Moderado, Windows 7/8/10, Core i5, 8 GB RAM.", "NetherRealm Studios", "Lucha", "$30", "Disfruta de fatalities épicos y brutalidad inigualable en Mortal Kombat Ultimate, donde los luchadores icónicos se enfrentan en combates sangrientos.","mortalKombatUltimate.avif",mortalKombatUltimateResenias);

let mkx = new Juego(undefined,"Mortal Kombat X", "Alto rendimiento, Windows 7/8/10, Core i5, 8 GB RAM, 40 GB HDD.", "NetherRealm Studios", "Lucha", "$25", "Explora batallas sangrientas y gráficos sorprendentes en Mortal Kombat X, la evolución de la brutalidad en un juego de lucha inmersivo.","mortalKombatX.jpeg",mortalKombatXResenias);


          

  const ListaJuegos=[];

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

  const formularioAdministrarJuego = document.querySelector("#formularioAdministrarJuego");

  const nombre = document.getElementById("nombre"),
        requisitos = document.getElementById("requisitos"),
        desarrollador = document.getElementById("desarrollador"),
        categoria = document.getElementById("categoria"),
        precio = document.getElementById("precio"),
        detalles = document.getElementById("detalles"),
        img = document.getElementById("img")
  const 
  modalJuego = new bootstrap.Modal (document.getElementById("modalJuego")),
  btnCargar=document.getElementById("btnCargar"),
  btnEditar=document.getElementById("btnEditar"),
  btnVerMas=document.getElementById("btnVerMas"),
  btnBorrar=document.getElementById("btnBorrar")


const crearJuego = (e) => {
  e.preventDefault();
  const juegoNuevo = new Juego(
    undefined,
    nombre.value,
    requisitos.value,
    desarrollador.value,
    categoria.value,
    precio.value,
    detalles.value,
    img.value,
    []
  );

  ListaJuegos.push(juegoNuevo);
  guardarEnLocalStorage();
  crearFila(juegoNuevo, ListaJuegos.length);
};


const MostrarModalJuegoAdministracion=()=>{
    modalJuego.show();
}

  const guardarEnLocalStorage = () => {
    localStorage.setItem("lista", JSON.stringify(ListaJuegos));
  };

  guardarEnLocalStorage();


  const cargaInicial = () => {
    if (ListaJuegos.length > 0) {
      //dibujar las filas
      ListaJuegos.map((juego, posicion) =>
        crearFila(juego, posicion + 1)
      );
    } else {
      console.log("No hay Juegos");
    }
  };
  
  const crearFila = (juego, fila) => {
    const tablaJuego = document.querySelector("tbody");
    tablaJuego.innerHTML += `
    <tr>
      <th class="align-middle text-center" scope="row">${juego.codigo}</th>
      <td class="align-middle">
          <div class="d-flex flex-row justify-content-between w-100">
              <div class="col-2">
                  <img src="../img/${juego.img}" class="w-50 img-fluid rounded-start" alt="...">
                </div>
                <div class="col-10 ">
                    <h5 class="align">${juego.nombre}</h5>
                    <p class="text-truncate" style="max-width: 350px;">${juego.detalles}</p>
                </div>
          </div>
      </td>
      <td class="align-middle text-center">${juego.categoria}</td>
      <td class="align-middle text-center">
          <div class="">
              <button class="mx-1 my-1 btn btn-secondary" id="btnVerMas">Ver mas</button><button class="btn btn-primary my-1 mx-1" id="btnEditar">Editar</button><button class="btn btn-danger my-1 mx-1" id="btnBorrar">Borrar</button>
          </div>
      </td>
    </tr>
    `;
  };

formularioAdministrarJuego.addEventListener("submit",crearJuego);
btnCargar.addEventListener("click",MostrarModalJuegoAdministracion)

  cargaInicial();