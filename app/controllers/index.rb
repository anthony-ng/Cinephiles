get '/' do
  erb :index
end

get '/movie' do
  api = OMDb::Client.new

  APPLICATION_NAME = 'Httparty'
  all_users = HTTParty.get('http://www.omdbapi.com/?')
  p all_users


  # @movie = api.get_movie(params[:movie])
  # @movie_json = @movie.to_json
  # @movie_json.JSON.parse
  if @movie.code == 404
    erb :no_movie, layout: false
  else
    erb :movie, layout: false
  end
end
