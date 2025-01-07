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

LOCK TABLES `AtributosMonstruos` WRITE;
/*!40000 ALTER TABLE `AtributosMonstruos` DISABLE KEYS */;
INSERT INTO `AtributosMonstruos` VALUES (1,'Ataque'),(2,'Defensa'),(3,'Puntos de Vida');
/*!40000 ALTER TABLE `AtributosMonstruos` ENABLE KEYS */;
UNLOCK TABLES;

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

LOCK TABLES `AtributosMonstruos_has_Monstruos` WRITE;
/*!40000 ALTER TABLE `AtributosMonstruos_has_Monstruos` DISABLE KEYS */;
INSERT INTO `AtributosMonstruos_has_Monstruos` VALUES (1,1,'150'),(1,2,'200'),(1,3,'100'),(1,4,'250'),(1,5,'120'),(2,1,'40'),(2,2,'35'),(2,3,'50'),(2,4,'30'),(2,5,'60'),(3,1,'20'),(3,2,'30'),(3,3,'10'),(3,4,'50'),(3,5,'15');
/*!40000 ALTER TABLE `AtributosMonstruos_has_Monstruos` ENABLE KEYS */;
UNLOCK TABLES;

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

LOCK TABLES `BonificacionVillanos` WRITE;
/*!40000 ALTER TABLE `BonificacionVillanos` DISABLE KEYS */;
INSERT INTO `BonificacionVillanos` VALUES (1,1,'Fuerza del Caos',1,15),(2,2,'Aura Glacial',2,20),(3,3,'Manto de Oscuridad',1,20),(4,4,'Placas de Acero',3,50),(5,5,'Toxina Extrema',1,20);
/*!40000 ALTER TABLE `BonificacionVillanos` ENABLE KEYS */;
UNLOCK TABLES;

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

LOCK TABLES `Monstruos` WRITE;
/*!40000 ALTER TABLE `Monstruos` DISABLE KEYS */;
INSERT INTO `Monstruos` VALUES (1,'MakinaRata',1),(2,'Pitufo del Kaos',2),(3,'Mercenario Informatico',3),(4,'Caperucita Loca',4),(5,'Pika Pika (y no me puedo rascar)',5);
/*!40000 ALTER TABLE `Monstruos` ENABLE KEYS */;
UNLOCK TABLES;

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

LOCK TABLES `Poderes` WRITE;
/*!40000 ALTER TABLE `Poderes` DISABLE KEYS */;
INSERT INTO `Poderes` VALUES (5,'Hago lo que Puedo',5),(4,'Lluvia de Plomo',4),(3,'Pirateo de Puntos de Vida',3),(2,'Puño Ciclado',2),(1,'Tiro Ratero',1);
/*!40000 ALTER TABLE `Poderes` ENABLE KEYS */;
UNLOCK TABLES;

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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Villanos`
--

LOCK TABLES `Villanos` WRITE;
/*!40000 ALTER TABLE `Villanos` DISABLE KEYS */;
INSERT INTO `Villanos` VALUES (1,'Tiax','El duende de los calcetines'),(2,'Vampira Alcoholica','Bebedora roja'),(3,'Gnomo Cabron','100 veces mas cabron que tu'),(4,'Sauron','El Sennor Oscuro'),(5,'MetaDonna','La bruja yonqui');
/*!40000 ALTER TABLE `Villanos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-07  0:04:28
