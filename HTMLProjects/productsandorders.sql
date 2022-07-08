-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2021 at 09:24 AM
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
-- Database: `productsandorders`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerID` int(5) NOT NULL,
  `customerFirstName` varchar(50) NOT NULL,
  `customerLastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(80) NOT NULL,
  `shippingAddress` varchar(200) NOT NULL,
  `phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customerID`, `customerFirstName`, `customerLastName`, `email`, `password`, `shippingAddress`, `phone`) VALUES
(3, 'Josh', 'Hart', 'josh@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', '120 Currie Street, Adelaide', '0000000000'),
(4, 'John', 'Doe', 'JohnnyDoe@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', '120 Currie Street, Adelaide', '0000000000'),
(15, 'John', 'Doe', 'John@doe.com', 'd41d8cd98f00b204e9800998ecf8427e', '120 Currie Street, Adelaide', '0000000000'),
(17, 'John', 'Doe', 'John1@doe.com', 'd41d8cd98f00b204e9800998ecf8427e', '120 Currie Street, Adelaide', '0000000000'),
(18, 'John', 'Doe', 'John2@doe.com', 'd41d8cd98f00b204e9800998ecf8427e', '120 Currie Street, Adelaide', '0000000000'),
(19, 'John', 'Doe', 'John3@doe.com', 'd41d8cd98f00b204e9800998ecf8427e', '120 Currie Street, Adelaide', '0000000000'),
(20, 'Josh', 'H', 'JoshH@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', '120 Currie Street, Adelaide', '0000000000'),
(21, 'Jotaro', 'Hosikage', 'Jotaro@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', '120 Currie Street, Adelaide', '0000000000');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderID` int(5) NOT NULL,
  `customerID` int(5) NOT NULL,
  `productPrice` decimal(6,2) NOT NULL,
  `orderStatus` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `orderDetailsID` int(5) NOT NULL,
  `orderID` int(5) NOT NULL,
  `customerID` int(5) NOT NULL,
  `productID` int(5) NOT NULL,
  `productPrice` decimal(6,2) NOT NULL,
  `quantity` int(3) NOT NULL,
  `orderStatus` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productID` int(5) NOT NULL,
  `productName` varchar(100) NOT NULL,
  `productPrice` decimal(6,2) NOT NULL,
  `genre` varchar(80) NOT NULL,
  `productISBN` varchar(15) NOT NULL,
  `productAuthor` varchar(100) NOT NULL,
  `productPublishDate` date NOT NULL,
  `productPhotoFirst` varchar(150) NOT NULL,
  `productPhotoSecond` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productID`, `productName`, `productPrice`, `genre`, `productISBN`, `productAuthor`, `productPublishDate`, `productPhotoFirst`, `productPhotoSecond`) VALUES
(1, 'Demon Slayer: Kimetsu No Yaiba #1', '19.99', 'Manga', '9781974700523', 'Koyoharuo Gotouge', '2018-07-03', 'images/products/demonSlayer1.jpg', 'images/products/demonSlayer1pt2.jpg'),
(2, 'Boruto: Naruto Next Generations #1', '17.99', 'Manga', '9781421592114', 'Masashi Kishimoto', '2017-05-10', 'images/products/boruto1.jpg', 'images/products/boruto1pt2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `customerID` (`customerID`),
  ADD KEY `productPrice` (`productPrice`),
  ADD KEY `orderStatus` (`orderStatus`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`orderDetailsID`),
  ADD KEY `customerID` (`customerID`),
  ADD KEY `orderID` (`orderID`),
  ADD KEY `productID` (`productID`),
  ADD KEY `productPrice` (`productPrice`),
  ADD KEY `orderStatus` (`orderStatus`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `productPrice` (`productPrice`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customerID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `orderDetailsID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customerID`) REFERENCES `customer` (`customerID`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`productPrice`) REFERENCES `product` (`productPrice`);

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`customerID`) REFERENCES `customer` (`customerID`),
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`orderID`) REFERENCES `order` (`orderID`),
  ADD CONSTRAINT `orderdetails_ibfk_3` FOREIGN KEY (`productID`) REFERENCES `product` (`productID`),
  ADD CONSTRAINT `orderdetails_ibfk_4` FOREIGN KEY (`productPrice`) REFERENCES `product` (`productPrice`),
  ADD CONSTRAINT `orderdetails_ibfk_5` FOREIGN KEY (`orderStatus`) REFERENCES `order` (`orderStatus`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
