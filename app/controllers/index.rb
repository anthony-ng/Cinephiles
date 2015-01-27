get '/' do
  popular_movie1 = Omdb::Api.new.fetch('The Hunger Games')
  @popular_movie1 = popular_movie1[:movie]

  popular_movie2 = Omdb::Api.new.fetch('The Dark Knight')
  @popular_movie2 = popular_movie2[:movie]

  popular_movie3 = Omdb::Api.new.fetch('The Avengers')
  @popular_movie3 = popular_movie3[:movie]

  popular_movie4 = Omdb::Api.new.fetch('The Interview')
  @popular_movie4 = popular_movie4[:movie]

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
