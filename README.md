# Feedreader testing

This is a Udacity project that involves building a testing suite using 
[Jasmine](http://jasmine.github.io/) for a web app that reads RSS feeds.

## Installation

To install, clone the git repository, navigate into the directory 
and install the node modules.

```
git clone https://github.com/bkantiques/frontend-nanodegree-feedreader.git
cd frontend-nanodegree-feedreader
npm install
```

The project has BrowserSync installed so users can automatically reload
the project when `app.js` or `feedreader.js` are changed. To run BrowserSync,
open a browser and in the project's root directory run `grunt browserSync`. 
This should open the project in the browser.

## Project Details
## How will I complete this project?

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
5. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js* and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the allFeeds variable to a passing state.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named "The menu".
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named "Initial Entries".
14. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
15. Write a test suite named "New Feed Selection".
16. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
17. When complete - all of your tests should pass.