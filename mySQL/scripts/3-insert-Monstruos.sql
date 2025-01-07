-- Monstruos
INSERT INTO Monstruos (Nombre, idVillanoMonstruo) VALUES
('MakinaRata', 1),
('Pitufo del Kaos', 2),
('Mercenario Informatico', 3),
('Caperucita Loca', 4),
('Pika Pika (y no me puedo rascar)', 5);

-- AtributosMonstruos_has_Monstruos
INSERT INTO AtributosMonstruos_has_Monstruos (AtributosMonstruos_idAtributo, Monstruos_idMonstruos, Valor) VALUES
(1, 1, 160), -- MakinaRata
(2, 1, 45),
(3, 1, 25),
(1, 2, 210), -- Pitufo del Kaos
(2, 2, 40),
(3, 2, 35),
(1, 3, 110), -- Mercenario Informatico
(2, 3, 55),
(3, 3, 15),
(1, 4, 260), -- Caperucita Loca
(2, 4, 35),
(3, 4, 55),
(1, 5, 130), -- Pika Pika (y no me puedo rascar)
(2, 5, 65),
(3, 5, 20);

-- Poderes
INSERT INTO Poderes (NombrePoderes, Monstruos_idMonstruos) VALUES
('Tiro Ratero', 1), -- MakinaRata
('Puño Ciclado', 2), -- Pitufo del Kaos
('Pirateo de Puntos de Vida', 3), -- Mercenario Informatico
('Lluvia de Plomo', 4), -- Caperucita Loca
('Hago lo que Puedo', 5); -- Pika Pika (y no me puedo rascar)
