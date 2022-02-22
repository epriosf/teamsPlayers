DROP database IF EXISTS "teamsDB";
CREATE database teamsDB;
CREATE TABLE teams(
    id integer not null PRIMARY KEY,
	team_name VARCHAR(50) UNIQUE NOT NULL,
	points INTEGER NOT NULL
);
go
CREATE TABLE players(
    id integer PRIMARY KEY,
	player_name VARCHAR ( 50 ) UNIQUE NOT NULL,
	goals INTEGER NOT NULL,
	teamId integer
);
alter table players
add constraint FKID 
foreign key (teamId) 
references teams (id);
go
INSERT INTO teams (id, team_name, points)
VALUES 
(1,'Liverpool', 54),
(2, 'Man City', 45),
(3, 'Man United', 67),
(4, 'Chelsea', 31),
(5, 'Arsenal', 28);
go
INSERT INTO players
VALUES 
(1, 'LA', 55, 1),
(2, 'LB', 51, 1),
(3, 'LC', 9, 1),
(4, 'MCA', 1, 2),
(5, 'MCB', 11, 2),
(6, 'MCC', 31, 2),
(7, 'MUA', 15, 3),
(8, 'MUB', 87, 3),
(9, 'MUC', 41, 3),
(10, 'CA', 31, 4),
(11, 'CB', 11, 4),
(12, 'CC', 31, 4),
(13, 'AA', 72, 5),
(14, 'AB', 49, 5),
(15, 'AC', 12, 5);