get '/' do
  erb :index
end

get '/movie' do
  # api = OMDb::Client.new

  # APPLICATION_NAME = 'Httparty'
  # all_users = HTTParty.get('http://www.omdbapi.com/?')
  # p all_users

  # p params[:movie]

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

# View all notes
get '/notes' do
  @notes = Note.all
  erb :index
end

# Return a submit form for creating a new note
get '/notes/new' do
  erb :new
end

# Create a new note
post '/notes' do
  Note.create(title: params[:title], content: params[:content])
  redirect '/notes'
end

# Display a specific note
get '/notes/:id' do
  @note = Note.find(params[:id])
  erb :display
end

# Return a submit form for updating a note
get '/notes/:id/edit' do
  @note = Note.find(params[:id])
  erb :update
end

# Update a specific note
put '/notes/:id' do
  @note = Note.find(params[:id])
  @note.update(title: params[:title], content: params[:content] )
  redirect '/notes'

end

get '/notes/:id/delete' do
  @note = Note.find(params[:id])
  erb :delete
end

# Delete a specific note
delete '/notes/:id' do
  @note = Note.find(params[:id])
  @note.destroy
  redirect '/notes'
end