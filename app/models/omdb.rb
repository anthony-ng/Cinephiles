# module OMDb

#   class Client
#     include HTTParty

#     base_uri "http://www.omdbapi.com/?"

#     def initialize()

#     end

#     def get_movie(movie)
#       response = self.class.get("/movies/#{movie}/members", {
#         headers: @headers,
#         query: {per_page: 100}
#         })
#     end

#   end

# end
