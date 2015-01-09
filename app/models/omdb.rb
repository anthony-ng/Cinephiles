module OMDb

  class Client
    include HTTParty

    base_uri "http://www.omdbapi.com/?"

    def initialize(token, user_agent)
      @token = "token #{token}"
      @user_agent = user_agent
      @headers = {"User-Agent" => @user_agent, "Authorization" => @token}
    end

    def get_org(org)
      response = self.class.get("/movies/#{movie}/members", {
        headers: @headers,
        query: {per_page: 100}
        })
    end

  end

end
