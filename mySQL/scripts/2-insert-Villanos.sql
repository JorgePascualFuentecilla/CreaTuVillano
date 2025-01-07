
INSERT INTO Villanos (Nombre, Titulo) VALUES 
('Tiax', 'El duende de los calcetines'),
('Vampira Alcoholica', 'Bebedora roja'),
('Gnomo Cabron', '100 veces mas cabron que tu'),
('Sauron', 'El Señor Oscuro'),
('MetaDonna', 'La bruja yonqui');

INSERT INTO AtributosMonstruos (Nombre) VALUES 
('Ataque'),
('Defensa'),
('Puntos de Vida');

INSERT INTO BonificacionVillanos (NombreBonificacion, Villanos_idVillanos, AtributosMonstruos_idAtributo,Valor) VALUES
('Fuerza del Caos', 1,1,15), -- Tiax potencia el ataque
('Aura Glacial', 2,2,20), -- Vampira Alcoholica potencia la defensa
('Manto de Oscuridad', 3,1,20), -- Gnomo Cabron potencia el ataque
('Placas de Acero', 4,3,50), -- Sauron potencia los puntos de vida
('Toxina Extrema', 5,1,20); -- MetaDoña potencia el ataque

