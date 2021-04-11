-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 10, 2021 at 09:00 PM
-- Server version: 10.3.28-MariaDB-log
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zoltanbi_termproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `personal_list`
--

CREATE TABLE `personal_list` (
  `id` int(36) NOT NULL,
  `name` varchar(36) NOT NULL,
  `item` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `personal_list`
--

INSERT INTO `personal_list` (`id`, `name`, `item`) VALUES
(1, 'Mark Smith', 'Personal todo item'),
(2, 'Another Name', 'Personal list item 2'),
(4, 'test', 'item'),
(5, 'John', 'homework');

-- --------------------------------------------------------

--
-- Table structure for table `school_list`
--

CREATE TABLE `school_list` (
  `id` int(36) NOT NULL,
  `name` varchar(36) NOT NULL,
  `item` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `school_list`
--

INSERT INTO `school_list` (`id`, `name`, `item`) VALUES
(1, 'John Doe', 'Test school item'),
(3, 'Test', 'Test Item'),
(4, 'James', 'science');

-- --------------------------------------------------------

--
-- Table structure for table `stat_report`
--

CREATE TABLE `stat_report` (
  `id` varchar(36) NOT NULL,
  `type` varchar(36) NOT NULL,
  `link` varchar(250) NOT NULL,
  `stat` int(36) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stat_report`
--

INSERT INTO `stat_report` (`id`, `type`, `link`, `stat`) VALUES
('personal_delete', 'DELETE', 'zoltanbi.com/termproject/api/personal/delete/:id', 1),
('personal_get', 'GET', 'zoltanbi.com/termproject/api/personal/get/:id', 1),
('personal_getall', 'GET', 'zoltanbi.com/termproject/api/personal/getall', 14),
('personal_insert', 'POST', 'zoltanbi.com/termproject/api/personal/insert/:name/:item', 5),
('personal_update', 'PUT', 'zoltanbi.com/termproject/api/personal/update/:id/:name/:item', 2),
('school_delete', 'DELETE', 'zoltanbi.com/termproject/api/school/delete/:id', 1),
('school_get', 'GET', 'zoltanbi.com/termproject/api/personal/get/:id', 2),
('school_getall', 'GET', 'zoltanbi.com/termproject/api/school/getall', 15),
('school_insert', 'POST', 'zoltanbi.com/termproject/api/school/insert/:name/:item', 4),
('school_update', 'PUT', 'zoltanbi.com/termproject/api/school/update/:id/:name/:item', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `personal_list`
--
ALTER TABLE `personal_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `school_list`
--
ALTER TABLE `school_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `personal_list`
--
ALTER TABLE `personal_list`
  MODIFY `id` int(36) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `school_list`
--
ALTER TABLE `school_list`
  MODIFY `id` int(36) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
