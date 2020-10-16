-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 17-10-2020 a las 01:31:54
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `my_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurants`
--

CREATE TABLE `restaurants` (
  `id_restaurant` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'restaurant name',
  `address` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address',
  `lat` decimal(11,8) DEFAULT NULL,
  `lng` decimal(11,8) DEFAULT NULL,
  `kind_food` set('Mexican','Mediterranean','Italian','Portuguese','Greek','French','Pizzeria','Trattoria','Tapas','Asian','Chinese','Korean','Vietnamese','Japanese','Vegan','Vegatarian','BBQ','Catalan','Tasca','Gallego','Euskara','Peruvian','Areperia','Tacos','Hot Dogs','Argentinian','Wok','Kebab','Persian','Creperie','Take Away','Noodles','Udon','Sushi') COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `restaurants`
--

INSERT INTO `restaurants` (`id_restaurant`, `name`, `address`, `lat`, `lng`, `kind_food`) VALUES
(1, 'Tequila Cantina Mexicana', 'Carrer de Bilbao, 13. 08005 Barcelona', '41.40086400', '2.20624000', 'Mexican'),
(2, 'Bar La Gamba', 'Plaça de Maragall, 13. 08027 Barcelona', '41.42063000', '2.18108500', 'Take Away'),
(3, 'Restaurant L\'Ona', 'Carretera Km. 638.5, N-II', '41.49176700', '2.36899800', 'Catalan'),
(4, 'Kiku Chan', 'Carrer de Numància, 133. 08029 Barcelona', '41.38723800', '2.13469200', 'Japanese'),
(5, 'Món Việt', 'Carrer de Sepúlveda, 94. 08015 Barcelona', '41.37915800', '2.15730200', 'Vietnamese'),
(6, 'La Taguara Areperia', 'Carrer del Rec, 10. 08003 Barcelona', '41.38608900', '2.18205200', 'Areperia'),
(7, 'El Argentino', 'C/ d\'Aragó, 224. 08011 Barcelona', '41.38835700', '2.16008700', 'Argentinian'),
(8, 'Restaurante Shiraz', 'Carrer de Calàbria, 144, local. 08015 Barcelona', '41.38173200', '2.15249400', 'Persian'),
(9, 'Boston Pizza Numancia', 'Carrer de Numància, 94. 08029 Barcelona', '41.38577000', '2.13713000', 'Pizzeria'),
(10, 'Tapas 24', 'Carrer de la Diputació, 269. 08007 Barcelona', '41.39105400', '2.16740400', 'Tapas'),
(11, 'Akashi Gallery', 'Carrer del Rosselló, 197. 08036 Barcelona', '41.39220800', '2.15590100', 'Japanese'),
(12, 'Las Mañanitas', 'Gran Via de les Corts Catalanes, 715. 08013 Barcelona', '41.39771500', '2.17911700', 'Mexican'),
(13, 'Redpizza', 'Passeig Comte de Vilardaga, 130. 08980 Sant Feliu de Llobregat, Barcelona', '41.38683300', '2.05470900', 'Pizzeria'),
(14, 'Ateneu', 'Carrer de l\'Ateneu, 3. 08960 Sant Just Desvern, Barcelona', '41.38181800', '2.07679800', 'Take Away'),
(15, 'UliUli - Poke Bowls & Healthy Food\r\n', 'Carrer de les Ciències, 17. 08908 L\'Hospitalet, Barcelona', '41.35831900', '2.13105800', 'Take Away');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id_restaurant`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id_restaurant` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
