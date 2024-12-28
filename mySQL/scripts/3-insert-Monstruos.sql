-- Monstruos
INSERT INTO Monstruos (Nombre, idVillanoMonstruo) VALUES
('Fenix Ardiente', 1),
('Yeti Congelado', 2),
('Pantera Sombría', 3),
('Coloso de Hierro', 4),
('Serpiente Ácida', 5);

-- AtributosMonstruos_has_Monstruos
INSERT INTO AtributosMonstruos_has_Monstruos (AtributosMonstruos_idAtributo, Monstruos_idMonstruos, Valor) VALUES
(1, 1, 150), -- Fenix Ardiente
(2, 1, 40),
(3, 1, 20),
(1, 2, 200), -- Yeti Congelado
(2, 2, 35),
(3, 2, 30),
(1, 3, 100), -- Pantera Sombría
(2, 3, 50),
(3, 3, 10),
(1, 4, 250), -- Coloso de Hierro
(2, 4, 30),
(3, 4, 50),
(1, 5, 120), -- Serpiente Ácida
(2, 5, 60),
(3, 5, 15);

-- Poderes
INSERT INTO Poderes (NombrePoderes, Monstruos_idMonstruos) VALUES
('Llama Infernal', 1),
('Tormenta Helada', 2),
('Sombra Cortante', 3),
('Impacto de Titanio', 4),
('Veneno Letal', 5);