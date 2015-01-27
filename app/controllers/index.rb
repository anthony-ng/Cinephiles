get '/' do
  erb :index
end

get '/movie' do

  all_movies = Omdb::Api.new.search(params[:movie])

  # movies_info = all_movies[:movies]
  # first_movie = movies_info[0]

  if all_movies[:movies].size > 0
    # puts first_movie.title

  else
    puts "Non Existing movie name"
  end


  # p first_arr.to_json



  # p @movie.title
  # p @movie.year
  # p @movie.rated
  # p @movie.genre
  # p @movie.poster

  # erb :movie
end
