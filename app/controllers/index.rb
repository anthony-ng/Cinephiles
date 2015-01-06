get '/' do
  erb :index
end

get '/org' do
  api = Github::Client.new(ENV['TOKEN'], "Whatever-we-ant")
  @org = api.get_org(params[:org])
  if @org.code == 404
    erb :no_org, layout: false
  else
    erb :org, layout: false
  end
end
