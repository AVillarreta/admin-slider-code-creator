-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 11-08-2023 a las 16:42:12
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `k2con_dashboard_dutch_caribbean`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_premios`
--

CREATE TABLE `p_premios` (
  `id_pre` int(11) NOT NULL,
  `url_img_pre` varchar(255) DEFAULT NULL,
  `titulo_pre` varchar(255) DEFAULT NULL,
  `puntos_pre` int(11) DEFAULT NULL,
  `catidad_pre` int(11) DEFAULT NULL,
  `tipo_usuario` int(11) DEFAULT NULL,
  `status_pre` tinyint(4) DEFAULT NULL,
  `instrucciones` text,
  `tipo_premio` int(11) NOT NULL DEFAULT '0',
  `fecha_de` date DEFAULT NULL,
  `fecha_a` date DEFAULT NULL,
  `proyecto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `p_premios`
--

INSERT INTO `p_premios` ( `url_img_pre`, `titulo_pre`, `puntos_pre`, `catidad_pre`, `tipo_usuario`, `status_pre`, `instrucciones`, `tipo_premio`, `fecha_de`, `fecha_a`, `proyecto`) VALUES
('tablet prize.png', 'Raffle', NULL, 9999999, NULL, 1, NULL, 0, NULL, NULL, 0),
('aruba/_Cinegloria.png', 'Giftcard ', NULL, NULL, NULL, 1, 'Congratulations! You won a Giftcard. Our team will contact you next week to deliver your prize', 0, NULL, NULL, 1),
('aruba/_Starbucks.png', 'Giftcard ', NULL, NULL, NULL, 1, 'Congratulations! You won a Giftcard. Our team will contact you next week to deliver your prize', 0, NULL, NULL, 1),
('aruba/_Superfood.png', 'Giftcard ', NULL, NULL, NULL, 1, 'Congratulations! You won a Giftcard. Our team will contact you next week to deliver your prize', 0, NULL, NULL, 1),
('aruba/_45gifcard.png', '&#402;45 Giftcard ', NULL, 97, NULL, 1, 'Congratulations! You won a Giftcard. Our team will contact you next week to deliver your prize', 0, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_retos`
--

CREATE TABLE `p_retos` (
  `id_ret` int(11) NOT NULL,
  `titulo_ret` varchar(255) DEFAULT NULL,
  `tipo_ret` varchar(100) NOT NULL,
  `id_tem` int(11) DEFAULT NULL,
  `fecha_apertura` datetime DEFAULT NULL,
  `fecha_cierre` datetime DEFAULT NULL,
  `hora_apertura` time DEFAULT NULL,
  `hora_cierre` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `p_retos`
--

INSERT INTO `p_retos` (`id_ret`, `titulo_ret`, `tipo_ret`, `id_tem`, `fecha_apertura`, `fecha_cierre`, `hora_apertura`, `hora_cierre`) VALUES
(1, 'Reto #1', 'Seleccione una opción', 1, '2023-04-01 00:00:00', '2023-09-06 00:00:00', '00:00:00', '23:00:00'),
(2, 'Reto #2', 'Seleccione una opción', 2, '2023-04-24 00:00:00', '2023-08-01 00:00:00', '00:00:00', '23:00:00'),
(3, 'Reto #3', 'Seleccione una opción', 3, '2023-04-28 00:00:00', '2023-09-06 00:00:00', '00:00:00', '23:00:00'),
(4, 'Reto #1', 'Seleccione una opción', 4, '2023-04-28 00:00:00', '2023-09-06 00:00:00', '00:00:00', '23:00:00'),
(5, 'Reto #2', 'Seleccione una opción', 5, '2023-04-28 00:00:00', '2023-09-06 00:00:00', '00:00:00', '23:00:00'),
(6, 'Reto #3', 'Completa las frases', 6, '2023-04-28 00:00:00', '2023-09-06 00:00:00', '00:00:00', '23:00:00'),
(7, 'Reto #4', 'Seleccione una opción', 7, '2023-04-28 00:00:00', '2023-09-06 00:00:00', '00:00:00', '23:00:00'),
(8, 'Reto #5', 'Completa las frases', 8, '2023-04-28 00:00:00', '2023-09-06 00:00:00', '00:00:00', '23:00:00'),
(9, 'Reto #6', 'Seleccione una opción', 9, '2023-05-05 00:00:00', '2023-07-31 00:00:00', '00:00:00', '23:00:00'),
(10, 'Reto #7', 'Seleccione una opción', 10, '2023-05-05 00:00:00', '2023-07-31 00:00:00', '00:00:00', '23:00:00'),
(11, 'Reto #1', 'Seleccione una opción', 11, '2023-06-05 00:00:00', '2023-07-31 00:00:00', '00:00:00', '23:00:00'),
(12, 'Reto #2', 'Seleccione una opción', 12, '2023-06-05 00:00:00', '2023-07-31 00:00:00', '00:00:00', '23:00:00'),
(13, 'Reto #3', 'Seleccione una opción', 13, '2023-06-05 00:00:00', '2023-07-31 00:00:00', '00:00:00', '23:00:00'),
(14, 'Reto #4', 'Seleccione una opción', 14, '2023-06-05 00:00:00', '2023-07-31 00:00:00', '00:00:00', '23:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_retos_preguntas`
--

CREATE TABLE `p_retos_preguntas` (
  `id_rep` int(11) NOT NULL,
  `id_ret` int(11) DEFAULT NULL,
  `enunciodo_ret` varchar(255) DEFAULT NULL,
  `oden_ret` float(11,0) DEFAULT NULL,
  `puntos_ret` int(11) DEFAULT NULL,
  `status_ret` tinyint(4) NOT NULL,
  `tipo_rep` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `p_retos_preguntas`
--

INSERT INTO `p_retos_preguntas` (`id_rep`, `id_ret`, `enunciodo_ret`, `oden_ret`, `puntos_ret`, `status_ret`, `tipo_rep`) VALUES
(1, 1, 'Con la Tarjeta de Débito Mastercard® Bancamiga tus clientes pueden movilizar fondos en:', 1, 10, 0, 1),
(2, 1, 'La Tarjeta de Débito Mastercard® Bancamiga es una tarjeta única con tecnología:', 2, 10, 0, 1),
(3, 1, '¿Cuál de estos es un beneficio de la Tarjeta de Débito Mastercard® I Bancamiga?', 3, 10, 0, 1),
(4, 1, '¿Por qué la Tarjeta de Débito Mastercard® Bancamiga es una tarjeta única?', 4, 10, 0, 1),
(5, 2, 'Si tu cliente ya tiene cuenta en Bancamiga puede solicitar su Tarjeta de Débito Mastercard®:', 1, 10, 0, 1),
(6, 2, 'Si es un cliente nuevo debe:', 2, 10, 0, 1),
(7, 2, 'La Tarjeta de Débito Mastercard® Bancamiga tiene un costo:', 3, 10, 0, 1),
(8, 3, '1) ¿Cuál de estos es un beneficio de la Tarjeta de Débito Mastercard® Bancamiga?', 1, 10, 0, 1),
(9, 3, '2) ¿Cuál de estos es un beneficio de la Tarjeta de Débito Mastercard® Bancamiga?', 2, 10, 0, 1),
(10, 3, '3) ¿Cuál de estos es un beneficio de la Tarjeta de Débito Mastercard® Bancamiga?', 3, 10, 0, 1),
(11, 4, 'La tarjeta de Débito Mastercard® Bancamiga va a pasar a ser la única tarjeta que utilicen los clientes: ', 1, 10, 0, 1),
(12, 4, 'A los nuevos clientes que están abriendo su cuenta por primera vez en Bancamiga debes ', 2, 10, 0, 1),
(13, 4, 'A los clientes que ya tienen cuenta en Bancamiga debes explicarles que:', 3, 10, 0, 1),
(14, 5, 'Si la tarjeta de Débito Mastercard® de tu cliente APUNTA a su cuenta corriente Bancamiga NO podrán:', 1, 10, 0, 1),
(15, 5, 'Para poder realizar compras on line o en puntos de venta en el exterior, tu cliente debe', 2, 10, 0, 1),
(16, 6, '1. Completa las frases <br> Para realizar la afiliación de sus cuentas a la Tarjeta de Débito Mastercard® Bancamiga tu cliente debe:', 1, 10, 0, 2),
(17, 7, 'Un cliente puede cambiar de cuenta a la que está vinculada su Tarjeta de Débito Mastercard® Bancamiga:', 1, 10, 0, 1),
(18, 7, 'Cuando un cliente quiera hacer compras en línea o en puntos de venta en el exterior debe:', 2, 10, 0, 1),
(19, 8, 'Los límites de la Tarjeta de Débito Mastercard® son:', 1, 10, 0, 2),
(20, 9, 'La Tarjeta Recargable en Divisas', 1, 10, 0, 1),
(21, 9, 'La Tarjeta de Débito Mastercard® Bancamiga es un instrumento de movilización de las cuentas en divisas y bolívares que se puede recargar a través de: ', 2, 10, 0, 1),
(22, 10, 'Para llevar a cabo la migración de la Tarjeta de Débito Maestro a la Tarjeta de Débito Mastercard® Bancamiga tu cliente debe:', 1, 10, 0, 1),
(23, 10, 'El costo de la emisión es de:', 2, 10, 0, 1),
(24, 10, '¿Un cliente puede seguir utilizando su Tarjeta de Débito Maestro después de migrar a Débito Mastercard®?', 3, 10, 0, 1),
(25, 10, '¿Si un cliente no quiere la tarjeta de Débito Mastercard® puede mantener su Tarjeta de débito Internacional?', 4, 10, 0, 1),
(26, 10, '¿Qué pasará con la Tarjeta de Débito Maestro?', 5, 10, 0, 1),
(27, 11, '¿CONTACTLESS es una tecnología?', 1, 10, 0, 1),
(28, 11, 'Selecciona la opción que no sea correcta dentro del proceso de pago sin contacto ', 2, 10, 0, 1),
(29, 12, 'Los beneficios de los pagos sin contacto son: ', 1, 10, 0, 1),
(30, 12, 'Seleccione cuantos iconitos de Contactless hay entre varias cositas que aparezcan en la gráfica', 2, 10, 0, 2),
(31, 13, 'La Tarjeta de Débito Mastercard® Bancamiga puede:', 1, 10, 0, 1),
(32, 13, 'El límite de transacciones en puntos de venta es de:', 2, 10, 0, 1),
(33, 14, 'El candado virtual es:', 1, 10, 0, 1),
(34, 14, '¿Cuál debe ser el primer a realizar por el usuario para desactivar el candado en compras online?  ', 2, 10, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_retos_respuestas`
--

CREATE TABLE `p_retos_respuestas` (
  `id` int(11) NOT NULL,
  `id_usu` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `id_reto` int(11) NOT NULL,
  `pregunta` varchar(500) NOT NULL,
  `respuesta` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `p_retos_respuestas`
--

INSERT INTO `p_retos_respuestas` (`id`, `id_usu`, `date`, `id_reto`, `pregunta`, `respuesta`) VALUES
(1, 1, '2023-07-27 12:10:27', 1, 'p1', 'maestro'),
(2, 1, '2023-07-27 12:10:27', 1, 'p2', 'dual'),
(3, 1, '2023-07-27 12:10:27', 1, 'p3', 'dual'),
(7, 5, '2023-08-09 16:59:48', 1, 'p1', 'maestro'),
(8, 5, '2023-08-09 16:59:48', 1, 'p2', 'dual'),
(9, 5, '2023-08-09 16:59:48', 1, 'p3', 'mastercard'),
(10, 5, '2023-08-09 18:41:49', 1, 'p1', 'maestro'),
(11, 5, '2023-08-09 18:41:49', 1, 'p2', 'dual'),
(12, 5, '2023-08-09 18:41:49', 1, 'p3', 'mastercard'),
(13, 5, '2023-08-09 18:55:13', 1, 'p1', 'maestro'),
(14, 5, '2023-08-09 18:55:13', 1, 'p2', 'dual'),
(15, 5, '2023-08-09 18:55:13', 1, 'p3', 'mastercard'),
(16, 5, '2023-08-09 21:11:23', 1, 'p1', 'maestro'),
(17, 5, '2023-08-09 21:11:23', 1, 'p2', 'dual'),
(18, 5, '2023-08-09 21:11:23', 1, 'p3', 'mastercard'),
(19, 5, '2023-08-09 21:37:21', 1, 'p1', 'maestro'),
(20, 5, '2023-08-09 21:37:21', 1, 'p2', 'dual'),
(21, 5, '2023-08-09 21:37:21', 1, 'p3', 'mastercard'),
(22, 5, '2023-08-09 21:38:34', 1, 'p1', 'maestro'),
(23, 5, '2023-08-09 21:38:34', 1, 'p2', 'dual'),
(24, 5, '2023-08-09 21:38:34', 1, 'p3', 'mastercard'),
(25, 5, '2023-08-09 21:39:49', 1, 'p1', 'maestro'),
(26, 5, '2023-08-09 21:39:49', 1, 'p2', 'dual'),
(27, 5, '2023-08-09 21:39:49', 1, 'p3', 'mastercard'),
(28, 5, '2023-08-09 21:41:39', 1, 'p1', 'maestro'),
(29, 5, '2023-08-09 21:41:39', 1, 'p2', 'dual'),
(30, 5, '2023-08-09 21:41:39', 1, 'p3', 'mastercard'),
(31, 5, '2023-08-09 21:44:37', 1, 'p1', 'maestro'),
(32, 5, '2023-08-09 21:44:37', 1, 'p2', 'dual'),
(33, 5, '2023-08-09 21:44:37', 1, 'p3', 'mastercard'),
(34, 5, '2023-08-10 11:44:59', 1, 'p1', 'maestro'),
(35, 5, '2023-08-10 11:44:59', 1, 'p2', 'dual'),
(36, 5, '2023-08-10 11:44:59', 1, 'p3', 'mastercard'),
(37, 5, '2023-08-10 11:46:28', 1, 'p1', 'maestro'),
(38, 5, '2023-08-10 11:46:28', 1, 'p2', 'dual'),
(39, 5, '2023-08-10 11:46:28', 1, 'p3', 'mastercard'),
(40, 5, '2023-08-10 15:42:46', 1, 'p1', 'maestro'),
(41, 5, '2023-08-10 15:42:46', 1, 'p2', 'dual'),
(42, 5, '2023-08-10 15:42:46', 1, 'p3', 'mastercard'),
(43, 5, '2023-08-10 15:46:36', 1, 'p1', 'maestro'),
(44, 5, '2023-08-10 15:46:36', 1, 'p2', 'dual'),
(45, 5, '2023-08-10 15:46:36', 1, 'p3', 'mastercard'),
(46, 5, '2023-08-10 16:50:55', 1, 'p1', 'maestro'),
(47, 5, '2023-08-10 16:50:55', 1, 'p2', 'dual'),
(48, 5, '2023-08-10 16:50:55', 1, 'p3', 'mastercard'),
(49, 5, '2023-08-11 09:58:43', 1, 'p1', 'maestro'),
(50, 5, '2023-08-11 09:58:43', 1, 'p2', 'dual'),
(51, 5, '2023-08-11 09:58:43', 1, 'p3', 'mastercard'),
(52, 5, '2023-08-11 10:03:24', 1, 'p1', 'maestro'),
(53, 5, '2023-08-11 10:03:24', 1, 'p2', 'dual'),
(54, 5, '2023-08-11 10:03:24', 1, 'p3', 'mastercard'),
(55, 5, '2023-08-11 10:16:58', 1, 'p1', 'maestro'),
(56, 5, '2023-08-11 10:16:58', 1, 'p2', 'dual'),
(57, 5, '2023-08-11 10:16:58', 1, 'p3', 'mastercard'),
(58, 5, '2023-08-11 10:20:24', 1, 'p1', 'maestro'),
(59, 5, '2023-08-11 10:20:24', 1, 'p2', 'dual'),
(60, 5, '2023-08-11 10:20:24', 1, 'p3', 'maestro'),
(61, 5, '2023-08-11 10:20:52', 1, 'p1', 'maestro'),
(62, 5, '2023-08-11 10:20:52', 1, 'p2', 'dual'),
(63, 5, '2023-08-11 10:20:52', 1, 'p3', 'mastercard'),
(64, 5, '2023-08-11 10:35:14', 1, 'p1', 'maestro'),
(65, 5, '2023-08-11 10:35:14', 1, 'p2', 'dual'),
(66, 5, '2023-08-11 10:35:14', 1, 'p3', 'mastercard'),
(67, 5, '2023-08-11 10:37:03', 1, 'p1', 'maestro'),
(68, 5, '2023-08-11 10:37:03', 1, 'p2', 'dual'),
(69, 5, '2023-08-11 10:37:03', 1, 'p3', 'mastercard'),
(70, 5, '2023-08-11 10:57:45', 1, 'p1', 'maestro'),
(71, 5, '2023-08-11 10:57:45', 1, 'p2', 'dual'),
(72, 5, '2023-08-11 10:57:45', 1, 'p3', 'mastercard'),
(73, 5, '2023-08-11 11:00:02', 1, 'p1', 'maestro'),
(74, 5, '2023-08-11 11:00:02', 1, 'p2', 'dual'),
(75, 5, '2023-08-11 11:00:02', 1, 'p3', 'mastercard'),
(76, 5, '2023-08-11 11:04:19', 1, 'p1', 'maestro'),
(77, 5, '2023-08-11 11:04:19', 1, 'p2', 'dual'),
(78, 5, '2023-08-11 11:04:19', 1, 'p3', 'mastercard'),
(79, 5, '2023-08-11 11:06:51', 1, 'p1', 'maestro'),
(80, 5, '2023-08-11 11:06:51', 1, 'p2', 'dual'),
(81, 5, '2023-08-11 11:06:51', 1, 'p3', 'mastercard'),
(82, 5, '2023-08-11 11:36:02', 1, 'p1', 'maestro'),
(83, 5, '2023-08-11 11:36:02', 1, 'p2', 'dual'),
(84, 5, '2023-08-11 11:36:02', 1, 'p3', 'mastercard'),
(85, 5, '2023-08-11 12:26:34', 1, 'p1', 'maestro'),
(86, 5, '2023-08-11 12:26:34', 1, 'p2', 'dual'),
(87, 5, '2023-08-11 12:26:34', 1, 'p3', 'mastercard');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_retos_usuarios`
--

CREATE TABLE `p_retos_usuarios` (
  `id_ru` int(11) NOT NULL,
  `fecha_ru` datetime NOT NULL,
  `estado_ru` int(11) NOT NULL DEFAULT '1',
  `id_up` int(11) NOT NULL,
  `id_con` int(11) NOT NULL,
  `premio_id` int(11) DEFAULT NULL,
  `fecha_premio` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `p_retos_usuarios`
--

INSERT INTO `p_retos_usuarios` (`id_ru`, `fecha_ru`, `estado_ru`, `id_up`, `id_con`, `premio_id`, `fecha_premio`) VALUES
(25, '2023-08-11 12:21:43', 2, 5, 1, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `p_premios`
--
ALTER TABLE `p_premios`
  ADD PRIMARY KEY (`id_pre`);

--
-- Indices de la tabla `p_retos`
--
ALTER TABLE `p_retos`
  ADD PRIMARY KEY (`id_ret`);

--
-- Indices de la tabla `p_retos_preguntas`
--
ALTER TABLE `p_retos_preguntas`
  ADD PRIMARY KEY (`id_rep`);

--
-- Indices de la tabla `p_retos_respuestas`
--
ALTER TABLE `p_retos_respuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `p_retos_usuarios`
--
ALTER TABLE `p_retos_usuarios`
  ADD PRIMARY KEY (`id_ru`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `p_premios`
--
ALTER TABLE `p_premios`
  MODIFY `id_pre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `p_retos`
--
ALTER TABLE `p_retos`
  MODIFY `id_ret` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `p_retos_preguntas`
--
ALTER TABLE `p_retos_preguntas`
  MODIFY `id_rep` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `p_retos_respuestas`
--
ALTER TABLE `p_retos_respuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT de la tabla `p_retos_usuarios`
--
ALTER TABLE `p_retos_usuarios`
  MODIFY `id_ru` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
