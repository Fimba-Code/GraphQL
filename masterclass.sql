-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Tempo de geração: 21-Maio-2020 às 13:02
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `masterclass`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `lista`
--

CREATE TABLE `lista` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `lista`
--

INSERT INTO `lista` (`id`, `nome`, `descricao`) VALUES
(1, 'task', 'listagem de task importante'),
(2, 'tarefas', 'muitas tarefas a serem feitas aqui'),
(6, 'ee', 'ededed');

-- --------------------------------------------------------

--
-- Estrutura da tabela `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `age` int(11) NOT NULL,
  `birth_date` date NOT NULL,
  `height` float NOT NULL,
  `salary` float NOT NULL,
  `gold_balls` int(11) NOT NULL,
  `foot` varchar(15) NOT NULL,
  `nickname` varchar(15) NOT NULL,
  `team_id` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `position` varchar(15) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `players`
--

INSERT INTO `players` (`id`, `name`, `age`, `birth_date`, `height`, `salary`, `gold_balls`, `foot`, `nickname`, `team_id`, `number`, `position`, `image`) VALUES
(1, 'Lionel Andrés Messi Cuccittini', 32, '1987-06-24', 1, 26, 6, 'canhoto', 'Leo', 1, 10, 'atacante', 'https://vignette.wikia.nocookie.net/fightclubchampfanom/images/f/f2/Lionel_Messi.png/revision/latest/scale-to-width-down/340?cb=20190620013634'),
(2, 'Karim Mostafa Benzema Caires', 32, '1987-12-19', 1, 7, 0, 'ambidestro', 'Benzema', 2, 9, 'atacante', 'https://www.futwiz.com/assets/img/fifa20/faces/67274017.png'),
(3, 'Ivan Rakitić', 21, '0000-00-00', 1.84, 34.9, 0, 'destro', 'Ivan Rakitić', 1, 4, 'Meio-campista', 'https://pngimage.net/wp-content/uploads/2018/06/rakitic-png-2.png'),
(6, 'Dybala', 26, '0000-00-00', 0, 0, 0, '', 'Dybala', 3, 0, '', 'https://www.footyrenders.com/render/Paulo-Dybala-Juventus-3.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `thirst` varchar(45) NOT NULL,
  `stadium` varchar(45) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `teams`
--

INSERT INTO `teams` (`id`, `name`, `thirst`, `stadium`, `image`) VALUES
(1, 'Futbol Club Barcelona', 'Barcelona', 'Camp Nou', 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/1200px-FCBarcelona.svg.png'),
(2, 'Real Madrid Club de Fútbol', 'Madrid', 'Santiago Bernabéu', 'https://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F86.png'),
(3, 'Juventus', '', 'Fimba Code', 'https://tmssl.akamaized.net/images/wappen/big/506.png?lm=1539869052');

-- --------------------------------------------------------

--
-- Estrutura da tabela `team_trophy`
--

CREATE TABLE `team_trophy` (
  `team_id` int(11) NOT NULL,
  `trophy_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `trophies`
--

CREATE TABLE `trophies` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `trophies`
--

INSERT INTO `trophies` (`id`, `name`) VALUES
(1, 'Supertaça de Espanha'),
(2, 'La Liga'),
(3, 'Taça do Rei '),
(4, 'Taça Intertoto');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `lista`
--
ALTER TABLE `lista`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `trophies`
--
ALTER TABLE `trophies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `lista`
--
ALTER TABLE `lista`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `trophies`
--
ALTER TABLE `trophies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
