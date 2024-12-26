-- Villanos
INSERT INTO Villanos (Nombre, Descripcion) VALUES 
('Tiax', 'El duende de los calcetines'),
('Vampira Alcoholica', 'Tragona Suprema'),
('Gnomo Cabron', '100 veces mas cabron que tu'),
('Sauron', 'El Señor Oscuro'),
('MetaDoña', 'La bruja yonqui');

-- BonificacionVillanos
INSERT INTO BonificacionVillanos (Nombre, Valor, Villanos_idVillanos) VALUES
('Fuerza del Caos', 10, 1), -- Tiax potencia el ataque
('Aura Glacial', 15, 2), -- Vampira Alcoholica potencia la defensa
('Manto de Oscuridad', 12, 3), -- Gnomo Cabron potencia el ataque
('Placas de Acero', 20, 4), -- Sauron potencia los puntos de vida
('Toxina Extrema', 18, 5); -- MetaDoña potencia el ataque

-- BonificacionVillanos_has_AtributosMonstruos
INSERT INTO BonificacionVillanos_has_AtributosMonstruos (BonificacionVillanos_idBonificacionVillanos, AtributosMonstruos_idAtributo) VALUES
(1, 2), -- Tiax potencia el ataque
(2, 3), -- Vampira Alcoholica potencia la defensa
(3, 2), -- Gnomo Cabron potencia el ataque
(4, 1), -- Sauron potencia los puntos de vida
(5, 2); -- MetaDoña potencia el ataque
