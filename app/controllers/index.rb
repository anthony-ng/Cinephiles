get '/' do
  erb :index
end

get '/movie' do

  all_movies = Omdb::Api.new.search(params[:movie])
  movies_info = all_movies[:movies]

  if movies_info.size > 0
    @movie_list = []
    movies_info.each do |movie|
      @movie_list << movie
    end

    p @movie_list.first
    p "################"
    p @movie_list.last
  else
    puts "Non Existing movie name"
  end


  # p @movie.title
  # p @movie.year
  # p @movie.rated
  # p @movie.genre
  # p @movie.poster

  # erb :movie
end
