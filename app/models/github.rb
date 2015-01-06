module Github

  class Client
    include HTTParty

    base_uri "https://api.github.com"

    def initialize(token, user_agent)
      @token = "token #{token}"
      @user_agent = user_agent
      @headers = {"User-Agent" => @user_agent, "Authorization" => @token}
    end

    # def posts
    #   response = self.class.get('/some/endpoint', {
    #     query: { foo: 'bar' }
    #     })

    #   return response.body
    # end

    # def get_user(username)
    #   response = self.class.get("/users/#{username}", headers: @headers)

    #   return response.body
    # end

    def get_org(org)
      response = self.class.get("/orgs/#{org}/members", {
        headers: @headers,
        query: {per_page: 100}
        })
    end

  end

end
