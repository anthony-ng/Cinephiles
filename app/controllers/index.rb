get '/' do
  erb :index
end

get '/movie' do

  @movie = Omdb::Api.new.search(params[:movie])

  # @movie = @movie_api[:movie]
  p @movie.class
  p @movie.length

  p @movie.first
  puts
  puts
  p @movie.last

  # p @movie.title
  # p @movie.year
  # p @movie.rated
  # p @movie.genre
  # p @movie.poster

  # erb :movie
end
