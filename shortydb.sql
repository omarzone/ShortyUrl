-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2022 a las 19:01:08
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `shorty`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `link`
--

CREATE TABLE `link` (
  `CLVLINK` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `NAME` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  `AVGTIME` double NOT NULL,
  `VIEWS` int(11) NOT NULL,
  `CLICKS` int(11) NOT NULL,
  `URL` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `link`
--

INSERT INTO `link` (`CLVLINK`, `NAME`, `AVGTIME`, `VIEWS`, `CLICKS`, `URL`, `id`) VALUES
('8bjfvt', 'Test', 0, 0, 0, 'https://www.geeksforgeeks.org/form-validation-using-jquery/', 30),
('D8VwAd', 'Test', 0, 0, 0, 'https://www.w3schools.com/jsref/jsref_parseint.asp', 25),
('EWmEBS', 'WhatsApp Web', 0, 0, 0, 'https://web.whatsapp.com/', 91),
('HH71qt', 'ShortyUrl Repo', 0, 0, 0, 'https://github.com/omarzone/ShortyUrl', 90),
('jmeVcS', 'Enlinea4', 0, 0, 0, 'https://intranet.matematicas.uady.mx/enlinea2_ago21/login/index.php', 87),
('LL3K0Z', 'Aldahir', 0.38461538461538464, 26, 0, 'https://cuevana3.ai/65089/plan-lekcji', 77),
('M0EGqm', 'Estrenos', 0, 0, 0, 'https://cuevana3.ai/estrenos', 76),
('rVeodG', 'Cuevana Movie', 1.1111111111111112, 9, 7, 'https://cuevana3.ai/65089/plan-lekcji', 92),
('UtvVMF', 'Cuevana', 0, 0, 0, 'https://cuevana3.ai/', 75),
('W8dAj5', 'Github Omarzone', 15, 1, 0, 'https://github.com/omarzone', 89);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stores`
--

CREATE TABLE `stores` (
  `CLVUSER` int(11) NOT NULL,
  `CLVLINK` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `stores`
--

INSERT INTO `stores` (`CLVUSER`, `CLVLINK`) VALUES
(1, 'D8VwAd'),
(1, '8bjfvt'),
(1, 'UtvVMF'),
(1, 'M0EGqm'),
(1, 'LL3K0Z'),
(5, 'rVeodG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `CLVUSER` int(11) NOT NULL,
  `EMAIL` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  `PASSWORD` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `NAME` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `PROFILEPIC` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`CLVUSER`, `EMAIL`, `PASSWORD`, `NAME`, `PROFILEPIC`) VALUES
(1, 'fredyabisaimanzanero@gmail.com', '123456', 'Fredy', 'https://avatars.dicebear.com/api/identicon/juanito.png?r=50&scale=75'),
(5, 'test@test.com', '123456', 'test', 'https://avatars.dicebear.com/api/identicon/test.png?r=50&scale=75');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `link`
--
ALTER TABLE `link`
  ADD PRIMARY KEY (`CLVLINK`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `stores`
--
ALTER TABLE `stores`
  ADD KEY `CLVUSER` (`CLVUSER`),
  ADD KEY `CLVLINK` (`CLVLINK`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`CLVUSER`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `link`
--
ALTER TABLE `link`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `CLVUSER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `stores`
--
ALTER TABLE `stores`
  ADD CONSTRAINT `stores_ibfk_1` FOREIGN KEY (`CLVLINK`) REFERENCES `link` (`CLVLINK`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stores_ibfk_2` FOREIGN KEY (`CLVUSER`) REFERENCES `user` (`CLVUSER`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
