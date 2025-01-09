CREATE DATABASE  IF NOT EXISTS `LuchadeMonstruos` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `LuchadeMonstruos`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: LuchadeMonstruos
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AtributosMonstruos`
--

DROP TABLE IF EXISTS `AtributosMonstruos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AtributosMonstruos` (
  `idAtributo` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idAtributo`),
  UNIQUE KEY `idAtributo_UNIQUE` (`idAtributo`),
  UNIQUE KEY `Ataque_UNIQUE` (`Nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AtributosMonstruos`
--


--
-- Table structure for table `AtributosMonstruos_has_Monstruos`
--

DROP TABLE IF EXISTS `AtributosMonstruos_has_Monstruos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AtributosMonstruos_has_Monstruos` (
  `AtributosMonstruos_idAtributo` int NOT NULL,
  `Monstruos_idMonstruos` int NOT NULL,
  `Valor` varchar(45) NOT NULL,
  PRIMARY KEY (`AtributosMonstruos_idAtributo`,`Monstruos_idMonstruos`),
  KEY `fk_AtributosMonstruos_has_Monstruos_Monstruos1_idx` (`Monstruos_idMonstruos`),
  KEY `fk_AtributosMonstruos_has_Monstruos_AtributosMonstruos1_idx` (`AtributosMonstruos_idAtributo`),
  CONSTRAINT `fk_AtributosMonstruos_has_Monstruos_AtributosMonstruos1` FOREIGN KEY (`AtributosMonstruos_idAtributo`) REFERENCES `AtributosMonstruos` (`idAtributo`),
  CONSTRAINT `fk_AtributosMonstruos_has_Monstruos_Monstruos1` FOREIGN KEY (`Monstruos_idMonstruos`) REFERENCES `Monstruos` (`idMonstruos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AtributosMonstruos_has_Monstruos`
--


--
-- Table structure for table `BonificacionVillanos`
--

DROP TABLE IF EXISTS `BonificacionVillanos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BonificacionVillanos` (
  `idBonificacionVillanos` int NOT NULL AUTO_INCREMENT,
  `Villanos_idVillanos` int NOT NULL,
  `NombreBonificacion` varchar(200) NOT NULL,
  `AtributosMonstruos_idAtributo` int NOT NULL,
  `Valor` int NOT NULL DEFAULT '10',
  PRIMARY KEY (`idBonificacionVillanos`,`Villanos_idVillanos`),
  UNIQUE KEY `idBonificacionVillanos_UNIQUE` (`idBonificacionVillanos`),
  UNIQUE KEY `NombreBonificacion_UNIQUE` (`NombreBonificacion`),
  KEY `fk_BonificacionVillanos_Villanos1_idx` (`Villanos_idVillanos`),
  KEY `fk_BonificacionVillanos_AtributosMonstruos1_idx` (`AtributosMonstruos_idAtributo`),
  CONSTRAINT `fk_BonificacionVillanos_AtributosMonstruos1` FOREIGN KEY (`AtributosMonstruos_idAtributo`) REFERENCES `AtributosMonstruos` (`idAtributo`),
  CONSTRAINT `fk_BonificacionVillanos_Villanos1` FOREIGN KEY (`Villanos_idVillanos`) REFERENCES `Villanos` (`idVillanos`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BonificacionVillanos`
--



--
-- Table structure for table `Monstruos`
--

DROP TABLE IF EXISTS `Monstruos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Monstruos` (
  `idMonstruos` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(200) NOT NULL,
  `idVillanoMonstruo` int DEFAULT NULL,
  PRIMARY KEY (`idMonstruos`),
  UNIQUE KEY `Monstruos_UNIQUE` (`idMonstruos`),
  UNIQUE KEY `Nombre_UNIQUE` (`Nombre`),
  KEY `idVillanoMonstruo_idx` (`idVillanoMonstruo`),
  CONSTRAINT `idVillanoMonstruo` FOREIGN KEY (`idVillanoMonstruo`) REFERENCES `Villanos` (`idVillanos`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Monstruos`
--


--
-- Table structure for table `Poderes`
--

DROP TABLE IF EXISTS `Poderes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Poderes` (
  `idPoderes` int NOT NULL AUTO_INCREMENT,
  `NombrePoderes` varchar(200) NOT NULL,
  `Monstruos_idMonstruos` int NOT NULL,
  PRIMARY KEY (`idPoderes`,`Monstruos_idMonstruos`),
  UNIQUE KEY `idPoderes_UNIQUE` (`idPoderes`),
  UNIQUE KEY `NombrePoderes_UNIQUE` (`NombrePoderes`),
  KEY `fk_Poderes_Monstruos1_idx` (`Monstruos_idMonstruos`),
  CONSTRAINT `fk_Poderes_Monstruos1` FOREIGN KEY (`Monstruos_idMonstruos`) REFERENCES `Monstruos` (`idMonstruos`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Poderes`
--



--
-- Table structure for table `Villanos`
--

DROP TABLE IF EXISTS `Villanos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Villanos` (
  `idVillanos` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(200) NOT NULL,
  `Titulo` varchar(200) NOT NULL,
  PRIMARY KEY (`idVillanos`),
  UNIQUE KEY `idVillanos_UNIQUE` (`idVillanos`),
  UNIQUE KEY `Nombrel_UNIQUE` (`Nombre`),
  UNIQUE KEY `Titulo_UNIQUE` (`Titulo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
