get '/' do
  api = Github::Client.new
  erb :index
end
