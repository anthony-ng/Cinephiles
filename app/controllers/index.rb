get '/' do
  erb :index
end

get '/movie' do

  movie_hash = Omdb::Api.new.search(params[:movie])

  movie_array = movie_hash[:movies]
  p movie_array[0]
  # p movie_array[0].title



  p movie_array[0.to_json



  # p @movie.title
  # p @movie.year
  # p @movie.rated
  # p @movie.genre
  # p @movie.poster

  # erb :movie
end
