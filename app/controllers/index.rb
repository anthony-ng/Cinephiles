get '/' do
  erb :index
end

get '/movie' do

  @movie_api = Omdb::Api.new.fetch(params[:movie])

  @movie = @movie_api[:movie]
  p @movie.class

  p @movie.title
  p @movie.year
  p @movie.rated
  p @movie.genre
  p @movie.poster

  erb :movie
end
