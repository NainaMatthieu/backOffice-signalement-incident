create table region(
    id serial primary key,
    libelle varchar(100),
    cheflieu varchar(100),
    province varchar(100),
    login varchar(100),
    password varchar(50)
);
create table signalement(
    id varchar primary key,
    idemplacement integer,
    type varchar(100),
    description text,
    idclient varchar(50),
    idregion integer,
    status varchar(50),
    date date
);
create table emplacement(
    id serial primary key,
    longitude double precision,
    latitude double precision
);
create sequence idsignalement start with 1 increment by 1;
insert into emplacement(longitude,latitude)values
(47.516667,-18.933333),
(47.46038591494602,-18.937507686959833),
(47.465817437506935,-18.92234237156356),
(47.51947371967844,-18.862751079781845),
(47.45441423005298,-18.839606088178314),
(47.419899435683085,-18.79422526137374);
create table type(
    id serial primary key,
    couleur varchar(255),
    type varchar(100)
);
create table status(
    id serial primary key,
    status varchar(100)
);
create table admin(
    id serial primary key,
    name varchar(100),
    login varchar(100),
    password varchar(50)
);
insert into admin(name,login,password) values('Admin','user@Admin','1234');


insert into type (type,couleur) values ('Accident','#ff5252'),('ordures','#ffba57'),('route abimee','#4680ff');
insert into status (status) values('En cours de traitement'),('nouveau'),('termine');
insert into signalement(id,idemplacement,type,description,idclient,idregion,status,date)values
('sign-'||nextval('idsignalement'),1,'Accident','Deux voitures se sont percutées créant un emboutaillage','client1',1,'En cours de traitement','2021-11-29'),
('sign-'||nextval('idsignalement'),2,'route abimee','Effondrement de la voie gauche à cause de la pluie ','client1',1,'nouveau','2021-12-01'),
('sign-'||nextval('idsignalement'),4,'ordures','Pour assurer son service public,la commune effectue un grand ramassage des dechets  ','client1',1,'nouveau','2021-12-01'),
('sign-'||nextval('idsignalement'),5,'Accident','Deux voitures se sont percutées créant un emboutaillage','client1',1,'nouveau','2021-11-29'),
('sign-'||nextval('idsignalement'),6,'Accident','Deux voitures se sont percutées créant un emboutaillage','client1',1,'termine','2021-12-11');

--recherche multicritère: 
select *from signalement where status='nouveau' and date>='2021-11-29' and type='Accident';

create sequence idregion start with 1 increment by 1;

create sequence idregion start with 1 increment by 1;

insert into region(id,libelle,cheflieu,province,login,password)values
(nextval('idregion'),'Diana','Antsiranana I','Antsiranana','Diana','1234'),
(nextval('idregion'),'Sava','Sambava','Antsiranana','Sava','1234'),
(nextval('idregion'),'Itasy','Miarinarivo','Antananarivo','Itasy','1234'),
(nextval('idregion'),'Analamanga','Antananarivo-Renivohitra','Antananarivo','Analamanga','1234'),
(nextval('idregion'),'Vakinankaratra','Antsirabe I','Antananarivo','Vakinankaratra','1234'),
(nextval('idregion'),'Bongolava','Tsiroanomandidy','Antananarivo','Bongolava','1234'),
(nextval('idregion'),'Sofia','Antsohihy','Majunga','Sofia','1234'),
(nextval('idregion'),'Boeny','Majunga I','Majunga','Boeny','1234'),
(nextval('idregion'),'Diana','Maevatanana','Majunga','Diana','1234'),
(nextval('idregion'),'Betsiboka','Maevatanana','Majunga','Betsiboka','1234'),
(nextval('idregion'),'Melaky','Maintirano','Majunga','Melaky','1234'),
(nextval('idregion'),'Alaotra-Mangoro','Ambatondrazaka','Tamatave','Alaotra-Mangoro','1234'),
(nextval('idregion'),'Atsinanana','Ambositra','Tamatave','Atsinanana','1234'),
(nextval('idregion'),'Analanjirofo','Fianarantsoa','Tamatave','Analanjirofo','1234'),
(nextval('idregion'),'Amoron ''i Mania ','Tamatave I','Fianarantsoa','Amoron''i Mania ','1234'),
(nextval('idregion'),'Haute Matsiatra','Fénérive Est','Fianarantsoa','Haute Matsiatra','1234'),
(nextval('idregion'),'Vatovavy','Mananjary','Fianarantsoa','Vatovavy','1234'),
(nextval('idregion'),'Fitovinany','Manakara','Fianarantsoa','Fitovinany','1234'),
(nextval('idregion'),'Atsimo-Atsinanana','Farafangana','Fianarantsoa','Atsimo-Atsinanana','1234'),
(nextval('idregion'),'Ihorombe ','Ihosy','Fianarantsoa','Ihorombe ','1234'),
(nextval('idregion'),'Menabe','Morondava','Toliara','Menabe','1234'),
(nextval('idregion'),'Atsimo-Andrefana','Tuléar I','Toliara','Atsimo-Andrefana','1234'),
(nextval('idregion'),'Androy','Ambovombe-Androy','Toliara','Androy','1234'),
(nextval('idregion'),'Anôsy','Tôlanaro','Toliara','Anôsy','1234');

--signalement sans region ni status
insert into signalement(id,idemplacement,type,description,idclient,idregion,status,date)values
('sign-'||nextval('idsignalement'),1,'Accident','Deux voitures se sont percutées créant un emboutaillage','client1',-1,null,'2021-11-29'),
('sign-'||nextval('idsignalement'),2,'route abimee','Effondrement de la voie gauche à cause de la pluie ','client1',-1,null,'2021-12-01'),
('sign-'||nextval('idsignalement'),4,'ordures','Pour assurer son service public,la commune effectue un grand ramassage des dechets  ','client1',-1,null,'2021-12-01'),
('sign-'||nextval('idsignalement'),5,'Accident','Deux voitures se sont percutées créant un emboutaillage','client1',-1,null,'2021-11-29'),
('sign-'||nextval('idsignalement'),6,'Accident','Deux voitures se sont percutées créant un emboutaillage','client1',-1,null,'2021-12-11');
--signalement sans status
insert into signalement(id,idemplacement,type,description,idclient,idregion,status,date)values
('sign-'||nextval('idsignalement'),1,'Accident','Deux voitures se sont percutées créant un emboutaillage','client1',10,null,'2021-11-29'),
('sign-'||nextval('idsignalement'),2,'route abimee','Effondrement de la voie gauche à cause de la pluie ','client1',11,null,'2021-12-01'),
('sign-'||nextval('idsignalement'),4,'ordures','Pour assurer son service public,la commune effectue un grand ramassage des dechets  ','client1',14,null,'2021-12-01'),
('sign-'||nextval('idsignalement'),5,'Accident','Deux voitures se sont percutées créant un emboutaillage','client1',1,null,'2021-11-29'),
('sign-'||nextval('idsignalement'),6,'Accident','Deux voitures se sont percutées créant un emboutaillage','client1',8,null,'2021-12-11');
