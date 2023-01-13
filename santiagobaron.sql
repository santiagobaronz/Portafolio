-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-01-2023 a las 00:03:29
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `santiagobaron`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `email_address`) VALUES
(1, 'santiago_baron', '$2a$10$zMdbroxN89qR9hm/6ZpVluVS/8cDD1kLHAEr1KuZVcXq83jnEvhMO', 'santiagobazul@hotmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` int(11) NOT NULL,
  `titulo_articulo` varchar(255) NOT NULL,
  `resumen_articulo` text NOT NULL,
  `texto_articulo` text NOT NULL,
  `fecha_texto` varchar(255) NOT NULL,
  `fecha_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `titulo_articulo`, `resumen_articulo`, `texto_articulo`, `fecha_texto`, `fecha_date`) VALUES
(1, 'Cómo estoy creando mi portafolio de programador web Full-stack', 'Un portafolio web es esencial para mostrar tus habilidades y proyectos a potenciales empleadores y destacarte en el mercado laboral. Muestra tus logros y experiencia y permite a las empresas entender lo que puedes ofrecer. Tener un portafolio sólido y atractivo es fundamental para conseguir el trabajo de tus sueños.', '<p>Como programador web Full-stack, es fundamental contar con un portafolio que muestre mis habilidades y proyectos realizados. En este artículo, quiero compartir cómo estoy creando mi portafolio y algunos consejos para aquellos que estén en el mismo proceso.\n\n            Lo primero que hice fue seleccionar algunos de mis proyectos más destacados y crear una página web para mostrarlos. Para ello, construí la página web desde cero y personalicé la estética para que se ajustara a mi marca personal. Además, añadí una sección sobre mis habilidades y experiencia laboral, así como una sección de contacto para que las empresas puedan ponerse en contacto conmigo.\n            \n            Otro aspecto importante al crear un portafolio es asegurarse de que esté optimizado para dispositivos móviles y que sea fácil de navegar. Muchas empresas y recruiters revisarán el portafolio a través de sus teléfonos móviles, por lo que es fundamental que se vea bien en cualquier dispositivo.\n            \n            Además de la página web, también estoy utilizando plataformas en línea como LinkedIn y GitHub para mostrar mis proyectos y habilidades. Estas plataformas son muy útiles para llegar a un público más amplio y también me permiten interactuar con otros profesionales de la industria.\n            \n            En resumen, crear un portafolio de programador web Full-stack es un proceso importante para mostrar mis habilidades y proyectos a potenciales empleadores. Al elegir cuidadosamente mis proyectos más destacados, construir mi página web desde cero y utilizar plataformas en línea, estoy asegurándome de tener un portafolio sólido y atractivo que me ayudará a destacar en el mercado laboral.</p>', 'Diciembre 28, 2022', '2022-12-28'),
(2, 'Cómo crear un dashboard administrativo con Node.js', 'Para crear un dashboard administrativo, Node.js es una opción versátil y con una gran comunidad de desarrolladores. Debes elegir un marco de aplicación, configurar la base de datos, diseñar la interfaz de usuario, implementar la lógica del backend y frontend, probar y depurar la aplicación, y finalmente desplegarla.', '<p>Un dashboard administrativo es una herramienta muy útil para cualquier empresa o organización. Permite a los administradores y gerentes acceder a informes y métricas importantes de manera rápida y sencilla, lo que les permite tomar decisiones informadas y mejorar la eficiencia del negocio.\r\n\r\nSi estás buscando crear un dashboard administrativo para tu empresa o organización, Node.js es una excelente opción de tecnología. Este lenguaje de programación de código abierto es muy versátil y puede ser utilizado tanto en el lado del servidor como del cliente. Además, tiene una gran comunidad de desarrolladores y una amplia gama de módulos y bibliotecas disponibles para facilitar la creación de aplicaciones.\r\n\r\nA continuación, te presentamos una guía paso a paso para crear un dashboard administrativo con Node.js:\r\n\r\nElegir un marco de aplicación. Hay varias opciones disponibles, como Express.js y Koa.js. Asegúrate de elegir uno que se adapte a tus necesidades y preferencias.\r\n\r\nConfigurar la base de datos. Puedes utilizar una base de datos relacional como MySQL o PostgreSQL, o una base de datos no relacional como MongoDB. Asegúrate de tener un plan de escalabilidad en mente para el futuro.\r\n\r\nDiseñar la interfaz de usuario. Utiliza una herramienta de diseño como Adobe XD o Figma para crear un prototipo de la interfaz de usuario de tu dashboard. Asegúrate de que sea atractiva y fácil de navegar.\r\n\r\nImplementar la lógica del backend. Utiliza Node.js y un ORM (Object-Relational Mapper) como Sequelize para escribir el código necesario para obtener y procesar los datos de la base de datos.\r\n\r\nImplementar la lógica del frontend. Utiliza un framework de JavaScript como React o Angular para escribir el código necesario para mostrar los datos en la interfaz de usuario.\r\n\r\nPrueba y depura tu aplicación. Asegúrate de que todo funcione correctamente y corrige cualquier error que encuentres.\r\n\r\nDespliega tu aplicación. Utiliza un servicio de hosting como Heroku o AWS para publicar tu aplicación y hacerla accesible a tus usuarios.\r\n\r\nEn resumen, crear un dashboard administrativo con Node.js es un proceso que requiere de planificación y habilidad</p>', 'Diciembre 28, 2022', '2022-12-28'),
(3, 'Cómo estoy construyendo una página para mostrar mis deployments con la API de GitHub', 'Para mostrar tus proyectos y deployments, utiliza la API de GitHub y un framework de JavaScript para construir una página. Genera un token de acceso y utiliza Axios o cURL para realizar consultas a la API. Utiliza Bootstrap o Materialize para darle estilo a tu página. Mostrar tus proyectos de esta forma te ayudará a destacar en el mercado laboral.', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href=\"#\">Aqui hay un link</a> Qui ipsam at corrupti maiores, corporis nobis dolorum, expedita nostrum voluptatem distinctio, eligendi sint. Voluptatibus pariatur nam quibusdam consequatur odit. Consequuntur, nulla.</p>\n                                <img src=\"/public/assets/one.jpg\" alt=\"\" srcset=\"\">\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum itaque minima eaque consectetur omnis voluptates! A mollitia error tempore at nihil ad officiis dolorum voluptates qui quia, fugiat recusandae iste!</p>\n                                <a href=\"#\">Aqui hay un link</a>\n\n<pre>\n    <code>\n    function cool(x) {\n    return x + 1;\n    }\n    </code>\n</pre>', 'Diciembre 28, 2022', '2022-12-28'),
(9, 'Estructura correcta de un dashboard: cómo maximizar la efectividad y la facilidad de uso', 'Un dashboard es una herramienta útil para visualizar y analizar datos y tomar decisiones informadas. La estructura del dashboard es fundamental para garantizar su efectividad y facilidad de uso. Algunas claves para estructurar correctamente un dashboard incluyen: identificar los objetivos del dashboard, seleccionar las métricas adecuadas, utilizar gráficos y tablas adecuados, organizar la información de manera lógica y optimizar el espacio.', '<p><img src=\"https://store-wp.mui.com/wp-content/uploads/2022/10/preview-scaled.jpg\" alt=\"Minimal Free &ndash; Client &amp; Admin Dashboard - MUI Store\" width=\"1280\" height=\"720\"></p>\n<p>&nbsp;</p>\n<p>Un dashboard es una herramienta valiosa para visualizar y analizar datos y tomar decisiones informadas. Sin embargo, es importante tener en cuenta que la estructura del dashboard es fundamental para garantizar su efectividad y facilidad de uso.</p>\n<p>A continuaci&oacute;n, te presentamos algunas claves para estructurar correctamente un dashboard:</p>\n<ol style=\"list-style-type: decimal;\">\n<li>\n<p>Identifica los objetivos del dashboard: antes de empezar a dise&ntilde;ar el dashboard, es esencial tener en cuenta para qu&eacute; se va a utilizar y cu&aacute;les son los objetivos que se quieren alcanzar con &eacute;l. Esto te ayudar&aacute; a determinar qu&eacute; informaci&oacute;n es relevante mostrar y c&oacute;mo presentarla de la manera m&aacute;s clara y concisa posible.</p>\n</li>\n<li>\n<p>Selecciona las m&eacute;tricas adecuadas: el dashboard debe mostrar s&oacute;lo las m&eacute;tricas realmente importantes para el objetivo del dashboard. No incluyas m&eacute;tricas innecesarias o poco relevantes, ya que s&oacute;lo distraer&aacute;n al usuario y dificultar&aacute;n la interpretaci&oacute;n de los datos.</p>\n</li>\n</ol>', 'Enero 6 de 2023', 'prueba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `educacion`
--

CREATE TABLE `educacion` (
  `id` int(255) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `nombreInstitucion` varchar(255) NOT NULL,
  `logoInstitucion` varchar(255) NOT NULL,
  `fechaInicio` varchar(255) NOT NULL,
  `fechaFinal` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `educacion`
--

INSERT INTO `educacion` (`id`, `titulo`, `nombreInstitucion`, `logoInstitucion`, `fechaInicio`, `fechaFinal`) VALUES
(1, 'Técnico en programación', 'Servicio nacional de aprendizaje', 'https://i.imgur.com/AOylUh2.png', '2018', '2020'),
(2, 'Diplomado de programación', 'Pontificia Universidad Javeriana', 'https://i.imgur.com/85vaCG3.png', '2020', '2021'),
(3, 'Ingeniería en sistemas', 'Universidad Distrital FJC', 'https://i.imgur.com/pbhEi9T.png', '2021', 'Presente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `nombre_proyecto` varchar(255) NOT NULL,
  `img_proyecto` varchar(255) NOT NULL,
  `icono_proyecto` varchar(255) NOT NULL,
  `descripcion_proyecto` varchar(255) NOT NULL,
  `link_proyecto` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `nombre_proyecto`, `img_proyecto`, `icono_proyecto`, `descripcion_proyecto`, `link_proyecto`, `categoria`) VALUES
(1, 'Oasis Webcore', 'https://repository-images.githubusercontent.com/497203092/d8de5120-6f30-4d9c-846c-4e1149c4017e', '/public/assets/latin.png', 'Pagina para la venta y mantenimiento de páginas web profesionales.', 'https://santiagobaronz.github.io/oasis-webcore', 'destacado'),
(2, 'MarsAPI', 'https://repository-images.githubusercontent.com/493496084/3fd4b2e2-36d8-4dc6-93d9-50d6fbbdc0c8', 'https://raw.githubusercontent.com/santiagobaronz/mars-api/master/assets/icon.png', 'Proyecto que integra la API de la NASA para buscar imágenes de Marte con los rovers.', 'https://santiagobaronz.github.io/mars-api/', 'destacado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

CREATE TABLE `trabajos` (
  `id` int(255) NOT NULL,
  `nombreTrabajo` varchar(255) NOT NULL,
  `logoTrabajo` varchar(255) NOT NULL,
  `cargoTrabajo` varchar(255) NOT NULL,
  `fechaInicio` varchar(255) NOT NULL,
  `fechaFinal` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trabajos`
--

INSERT INTO `trabajos` (`id`, `nombreTrabajo`, `logoTrabajo`, `cargoTrabajo`, `fechaInicio`, `fechaFinal`) VALUES
(1, 'Latinamerican Aeronautics', 'https://i.imgur.com/x1MLZQX.png', 'Webmaster', '2021', 'Presente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `educacion`
--
ALTER TABLE `educacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `educacion`
--
ALTER TABLE `educacion`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
