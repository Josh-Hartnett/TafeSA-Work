-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2021 at 07:43 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fanclubdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` varchar(10) NOT NULL,
  `event_name` varchar(80) NOT NULL,
  `description` varchar(350) NOT NULL,
  `date` datetime NOT NULL,
  `venue_name` varchar(60) NOT NULL,
  `store_lat` varchar(30) NOT NULL,
  `store_lon` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_name`, `description`, `date`, `venue_name`, `store_lat`, `store_lon`) VALUES
('1', 'Philadelphia 76ers @ Indiana Pacers', 'The #1 Philadelphia 76ers take on the Indiana Pacers at Indiana as they look to finalize their place as the #1 seed in the East. Philadelphia 76ers will be without their MVP contender Joel Embiid in this match up once again, but managed to get it done 119-110 last time behind Ben Simmons and Tobias Harris\'s combined 48 points. ', '2021-05-12 09:30:00', 'Bankers Life Fieldhouse, Indianapolis, IN', '39.7583', '-86.1533'),
('2', 'Philadelphia 76ers @ Miami Heat', 'Philadelphia will look to sweep the season series 3-0 against the Miami Heat. After beating Miami in over time on January the 13th, Philadelphia know this will be no easy feat, especially with Miami\'s all-star Jimmy Butler returning for this match up.', '2021-05-14 09:00:00', 'American Airlines Arena, Miami, FL ', '25.7755', ' -80.1862'),
('3', 'Orlando Magic @ Philadelphia 76ers', 'The Orlando Magic are currently 13th in the East, and will have to play the #1 Philadelphia 76ers twice within two days. This match up will be only the second between these two teams, but last time the Philadelphia 76ers got the win 116-92 behind Joel Embiid\'s 21 points and Ben Simmons 8 assists.', '2021-05-15 09:30:00', 'Wells Fargo Center, Philadelphia, PA', '39.9007', '-75.1698'),
('4', 'Orlando Magic @ Philadelphia 76ers', 'The Philadelphia 76ers will face up against the Orlando Magic once again, and look to sweep the season series 3-0. This game will be the last of the season for the Orlando Magic, whereas the Philadelphia 76ers will be taking a weeks rest as they head into the playoffs as the #1 seed in the East.', '2021-05-17 09:30:00', 'Wells Fargo Center, Philadelphia, PA', '39.9007', '-75.1698'),
('5', 'JR. 76ers Camps Open For Summer 2021 Registration', 'Calling all 76ers fans! Registration for Jr. 76ers Camps is now open. After a successful Summer 2020, they’re back and ready for more! Using the same Health & Safety Guidelines that resulted in a successful Summer 2020, with zero COVID cases, the team is confident and prepared to provide another safe summer for all.', '2021-08-01 08:00:00', 'Pennsylvania, New Jersey and Delaware', '39.952583', '-75.165222'),
('6', 'Philadelphia 76ers @ Houston Rockets', 'Philadelphia 76ers look to sweep another season series when they face the Houston Rockets at Houston this week. The Philadelphia 76ers should beat the team with the worst record in the league, but can\'t expect the win to fall in their lap as Houston showed they can beat top teams by defeating the Milwaukee Bucks 143-136.', '2021-05-06 09:30:00', 'Toyota Center, Houston, TX', '29.7505', '-95.3573'),
('7', 'Philadelphia 76ers @ Chicago Bulls', 'The last time these two teams met,  Tobias Harris scored 24 points and the Philadelphia 76ers beat the Chicago Bulls 127-105 Thursday night even though they were missing stars Joel Embiid and Ben Simmons for contact tracing. Can Chicago fight to avoid a season series sweep?', '2021-05-04 10:30:00', 'United Center, Chicago, IL', '41.881832', '-87.623177'),
('8', 'Detroit Pistons @ Philadelphia 76ers', 'Delon Wright scored a career-high 28 points and Wayne Ellington had another impressive shooting night for Detroit, leading the Pistons to a 119-104 victory over the Eastern Conference-leading Philadelphia 76ers the last time these two teams met. Can Philadelphia win over Detroit, or will Detroit find another way to beat the Philadelphia 76ers?', '2021-05-09 08:30:00', 'Wells Fargo Center, Philadelphia, PA', '39.9007', '-75.1698');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
