# Consume an API

## Learning Competencies
- consume an API in a clean, modular, and extenable way.
- implement a professional front-end design process.
- use test-driven development to produce a full-stack application.

## Summary

You'll be building an application that consumes a few endpoints of the 
[Github API](https://developer.github.com/v3/). You're going to be making a 
full-stack, fully-tested, well-designed website with a well-structured 
front-end and back-end.

## Releases

### Release 0: Interface Discovery

When working with an API, an important first step is to figure out exactly what
the API provides. Often, APIs will provide less functionality than assumed or
will require more configuration than initially expected. Before you start 
today's challenge, figure out how you can interact with Github's API. 


For this particular challenge, you may want to start with the 
[repos](https://developer.github.com/v3/repos/) and 
[users](https://developer.github.com/v3/users/) APIs. Here are some questions to
ask yourself about these endpoints:

  1. Read the API documentation to figure out what the API's capabilities are.
  2. Use cURL or HTTParty to test relevant endpoints. This can help you find out 
     what the API does and the shape of the data returned.
  3. **Pay special attention to data shapes and authentication schemes**, as they 
     will likely cause you trouble down the road.
     - Which endpoints require authentication?
     - What happens if the endpoint requires authentication, 
       but you *aren't* authenticated?
     - How can you authenticate your API requests?
  4. Decide how to adapt the API to fit your current needs.

What do you want to build with this information?<sup>[need ideas?](#ideas)</sup> What information do you need 
to implement your idea? What information can you get out of the API? How can you 
supplement it? How does the API constrain you?



### Release 1: Wireframing

Now that you have a general idea of what to build, you need to design your 
user’s experience as they go through the app. What views do you need? How do 
they interact? What elements do you want on each page, and how are they 
displayed? What is your site’s [color](http://colorschemedesigner.com/)
[scheme](http://www.colourlovers.com/)?

**Take the design process seriously.** User experience drives not only your 
front-end design, but also your back-end system architecture. Once you’ve 
settled on a front-end design, implementation of that design will be much easier
— and you’ll know exactly what you’ll need from your back-end.

### Release 2: TDDing your way through the app.

It’s time to start building. Start out with a README.md file. Your first commit 
should describe the intention of your project. As you add more functionality, 
make sure you update your README.

We’ve already built a skeleton structure for your API interaction in
`app/models/github.rb`, where you can encapsulate all interaction with your API. 
The class uses the HTTParty gem, which you can read more about [here](http://blog.teamtreehouse.com/its-time-to-httparty). 

Test-drive at least your routes. Keep in mind that without proper 
[mocking](http://en.wikipedia.org/wiki/Mock_object) of your HTTParty requests,
all of your requests will hit the Github servers. This is not ideal: it's slow
and you'll quickly run through your rate limit. You can use 
[rspec method stubs](https://github.com/rspec/rspec-mocks) to return fake data to use
in your tests.

As you build, you should be incrementally adding to your CSS as well, which 
should be easy to do since you already decided on your overarching design in 
the previous release. Make sure it looks professional — at the very least, your 
application should be [responsive](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/), 
and you should consider adding [a grid-system.](http://css-tricks.com/dont-overthink-it-grids/)

### Release 3: Optimization and Refactoring

Now that you have a fully functional, fully tested app, you have the perfect 
canvas on which to experiment. Implement one of the following features:

  - **Use an endpoint that requires authentication**. You can either implement
      [full OAuth](https://developer.github.com/v3/oauth/) or 
      [generate an access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/).
  - **Caching.** Can you avoid making unnecessary requests to the external API? 
      Saving data in your own database will prevent you from being rate limited, 
      and will also speed up your site’s user experience.
  - **Client-Side Persistence.** Can you make relevant portions of your site 
      maintain client-side state, relying instead on AJAX requests?
  - **Pagination.** Can you implement a pagination scheme? You can do this 
      synchronously, using `page` and `limit` query string parameters to denote 
      pagination values. You can also attempt to implement this asynchronously 
      using an infinite scroll system.

#### Ideas
* Gamifying github a la [coderwall](https://coderwall.com/welcome) badges.
* Making a splash page for an entered github username.
* Ad libs using words from someone's github profile.
* A collage using all of an organization's (or cohort's) photos.
