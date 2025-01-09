
INSERT INTO Villanos (idVillanos,Nombre, Titulo) VALUES 
(1,'Tiax', 'El duende de los calcetines'),
(2, 'Vampira Alcoholica', 'Bebedora roja'),
(3, 'Gnomo Cabron', '100 veces mas cabron que tu'),
(4, 'Sauron', 'El Señor Oscuro'),
(5, 'MetaDonna', 'La bruja yonqui');

INSERT INTO AtributosMonstruos (idAtributo,Nombre) VALUES 
(1,'Ataque'),
(2,'Defensa'),
(3,'Puntos de Vida');

INSERT INTO BonificacionVillanos (NombreBonificacion, Villanos_idVillanos, AtributosMonstruos_idAtributo,Valor) VALUES
('Fuerza del Caos', 1,1,15), -- Tiax potencia el ataque
('Aura Glacial', 2,2,20), -- Vampira Alcoholica potencia la defensa
('Manto de Oscuridad', 3,1,20), -- Gnomo Cabron potencia el ataque
('Placas de Acero', 4,3,50), -- Sauron potencia los puntos de vida
('Toxina Extrema', 5,1,20); -- MetaDoña potencia el ataque

