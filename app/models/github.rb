module Github

  class Client
    include HTTParty

    base_uri "www.someAPI.com"

    def initialize

    end

    def posts
      response = self.class.get('/some/endpoint', {
        query: { with: 'paramaters' }
        })

      return response.body
    end

  end

end
