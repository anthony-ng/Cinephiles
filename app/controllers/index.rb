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

get '/register' do
  erb :register
end

post '/register' do
  thank_el = params[:email]
  content_type :json
  thank_el.to_json
end

get '/login' do
  erb :login
end

get '/movie' do

  all_movies = Omdb::Api.new.search(params[:movie])
  movies_info = all_movies[:movies]
  p movies_info.length
  p movies_info
  p "----------------------THIS IS A LINE-------------------"

  if movies_info.length > 0
    @movie_list = []
    movies_info.each do |movie|
      the_movie = Omdb::Api.new.fetch(movie.title)
      @movie_list << the_movie[:movie]
    end
    p @movie_list.length
    p @movie_list[0]
    p "################"
    p @movie_list[1]
  else
    puts "Non Existing movie name"
  end

  erb :list
end

get '/about' do
  erb :about
end

get '/popular' do
  popular_movie1 = Omdb::Api.new.fetch('AMERICAN SNIPER')
  @popular_movie1 = popular_movie1[:movie]

  popular_movie2 = Omdb::Api.new.fetch('BIG HERO 6')
  @popular_movie2 = popular_movie2[:movie]

  popular_movie3 = Omdb::Api.new.fetch('PADDINGTON')
  @popular_movie3 = popular_movie3[:movie]

  popular_movie4 = Omdb::Api.new.fetch('THE THEORY OF EVERYTHING')
  @popular_movie4 = popular_movie4[:movie]

  popular_movie5 = Omdb::Api.new.fetch('TAKEN 3')
  @popular_movie5 = popular_movie5[:movie]

  popular_movie6 = Omdb::Api.new.fetch('THE IMITATION GAME')
  @popular_movie6 = popular_movie6[:movie]

  popular_movie7 = Omdb::Api.new.fetch('BIRDMAN')
  @popular_movie7 = popular_movie7[:movie]

  popular_movie8 = Omdb::Api.new.fetch('SELMA')
  @popular_movie8 = popular_movie8[:movie]

  popular_movie9 = Omdb::Api.new.fetch('NIGHT AT THE MUSEUM: SECRET OF THE TOMB')
  @popular_movie9 = popular_movie9[:movie]

  popular_movie10 = Omdb::Api.new.fetch('Project Almanac')
  @popular_movie10 = popular_movie10[:movie]

  erb :popular
end

get '/comingsoon' do
  comingsoon_movie1 = Omdb::Api.new.fetch('Jupiter Ascending')
  @comingsoon_movie1 = comingsoon_movie1[:movie]

  comingsoon_movie2 = Omdb::Api.new.fetch('The Peanuts Movie')
  @comingsoon_movie2 = comingsoon_movie2[:movie]

  comingsoon_movie3 = Omdb::Api.new.fetch('Furious 7')
  @comingsoon_movie3 = comingsoon_movie3[:movie]

  comingsoon_movie4 = Omdb::Api.new.fetch('Hot Tub Time Machine 2')
  @comingsoon_movie4 = comingsoon_movie4[:movie]

  comingsoon_movie5 = Omdb::Api.new.fetch('Jurassic World')
  @comingsoon_movie5 = comingsoon_movie5[:movie]

  comingsoon_movie6 = Omdb::Api.new.fetch('Chappie')
  @comingsoon_movie6 = comingsoon_movie6[:movie]

  comingsoon_movie7 = Omdb::Api.new.fetch('Minions')
  @comingsoon_movie7 = comingsoon_movie7[:movie]

  comingsoon_movie8 = Omdb::Api.new.fetch('Paul Blart: Mall Cop 2')
  @comingsoon_movie8 = comingsoon_movie8[:movie]

  # comingsoon_movie9 = Omdb::Api.new.fetch('Insurgent')
  # @comingsoon_movie9 = comingsoon_movie9[:movie]

  # comingsoon_movie10 = Omdb::Api.new.fetch('Kingsman: The Secret Service')
  # @comingsoon_movie10 = comingsoon_movie10[:movie]

  erb :coming
end

get '/theater' do
  erb :theater
end
