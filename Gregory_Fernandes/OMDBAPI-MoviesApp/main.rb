#https://gist.github.com/epoch/6a7ac3bce7684984d527#file-movies-md
require 'pry'    
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

require_relative 'db_config'
require_relative 'models/movie'

#pry
#pry 'pg'
#db = PG.connect(dbname: 'goodfoodhunting')
#rows = db.exec('select * from dishes;')

before do

  #@dish_types = run_sql('SELECT * FROM dish_types;')

end

get '/' do
  erb :index
end

get '/movie' do

  @movie = HTTParty.get("http://omdbapi.com/?t=#{params[:movie_name]}")

  erb :show
  
end

get '/movie/search' do

  @movie_list = HTTParty.get("http://omdbapi.com/?s=#{params[:search_keys]}")
  erb :list
  
end

get '/movie/:id' do

  movie = []

  if Movie.count != 0
    movie = Movie.where(imdbid: params[:id])   #There should be no spaces, also imdbID does not work, imdbid works
    #movie = Movie.find(params[:id])    #find just quits the program if it does not find
  end

  if movie.length === 0 

    omdb_movie = HTTParty.get("http://omdbapi.com/?i=#{params[:id]}")

    binding.pry

    @imdbID = omdb_movie["imdbID"]
    @title = omdb_movie["Title"]
    @year = omdb_movie["Year"]
    @poster = omdb_movie["Poster"]
    @released = omdb_movie["Released"]
    @actors = omdb_movie["Actors"]
    @plot = omdb_movie["Plot"]

    movie = Movie.new(imdbid: @imdbID, title: @title, year: @year, poster: @poster, released: @released, actors: @actors, plot: @plot)
    

    movie.save    #should this be in a post?
   
  else
    movie = movie.first  #get the first element from the array
    @imdbID = movie.imdbid
    @title = movie.title
    @year = movie.year
    @poster = movie.poster
    @released = movie.released
    @actors = movie.actors
    @plot = movie.plot
  end
    

 #@movie = HTTParty.get("http://omdbapi.com/?t=#{params[:title]}")

erb :show

end





