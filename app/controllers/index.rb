get '/' do
  erb :index
end

get '/movie' do
  api = OMDb::Client.new()
  @movie = api.get_movie(params[:org])
  if @movie.code == 404
    erb :no_movie, layout: false
  else
    erb :movie, layout: false
  end
end
