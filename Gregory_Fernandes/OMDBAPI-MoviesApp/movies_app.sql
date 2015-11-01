CREATE DATABASE movies_app;

\c movies_app

CREATE TABLE movies 
(
  imdbID VARCHAR(100) PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  year INTEGER,
  poster VARCHAR(300),
  released VARCHAR(100),
  actors VARCHAR(500),
  plot VARCHAR(500)
);

INSERT INTO movies (imdbID, title, year, poster, released, actors, plot) values ('1', 'Jaws', 1975, 'http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SX300.jpg', '20 Jun 1975', 'Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary', 'xyz');
INSERT INTO movies (imdbID, title, year, poster, released, actors, plot) values ('2','Jaws 2', 1978, 'http://ia.media-imdb.com/images/M/MV5BMTY1MDg1MTg4MF5BMl5BanBnXkFtZTgwMTE3MDgyMTE@._V1_SX300.jpg', '16 Jun 1978', 'Roy Scheider, Lorraine Gary, Murray Hamilton, Joseph Mascolo', 'xyz');
INSERT INTO movies (imdbID, title, year, poster, released, actors, plot) values ('3','Jaws: The Revenge', 1987, 'http://ia.media-imdb.com/images/M/MV5BMTY3MDQ1NTIyOV5BMl5BanBnXkFtZTcwNjI2MDAwMQ@@._V1_SX300.jpg', '17 Jul 1987', 'Lorraine Gary, Lance Guest, Mario Van Peebles, Karen Young', 'xyz');
INSERT INTO movies (imdbID, title, year, poster, released, actors, plot) values ('4','Jaws 3-D', 1983,'http://ia.media-imdb.com/images/M/MV5BMjEzMDEzODU4M15BMl5BanBnXkFtZTYwMDQ5Njg5._V1_SX300.jpg', '22 Jul 1983', 'Dennis Quaid, Bess Armstrong, Simon MacCorkindale, Louis Gossett Jr.', 'xyz');
INSERT INTO movies (imdbID, title, year, poster, released, actors, plot) values ('5','Cruel Jaws', 1995,'N/A', '26 Sep 1995', 'David Luther, George Barnes Jr., Scott Silveria, Kirsten Urso', 'xyz');
INSERT INTO movies (imdbID, title, year, poster, released, actors, plot) values ('6','Lake Placid', 1999,'http://ia.media-imdb.com/images/M/MV5BODY0OTUzNzUzMF5BMl5BanBnXkFtZTYwMDg4Njg4._V1_SX300.jpg', '16 Jul 1999', 'Bill Pullman, Bridget Fonda, Oliver Platt, Brendan Gleeson', 'xyz');


