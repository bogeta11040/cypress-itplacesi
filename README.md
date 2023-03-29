# Automation with Cypress and Javascript

Developing automation framework for testing it-place.si using fixtures, hooks, page object design, parametrization... Integrating Cypress framework into Jenkins, BDD with Cucumber.

## Usage

You need to manually login with your browser at [it-place.si/vnos.php](it-place.si/vnos.php) page. Then find the session id from your cookie (for Chrome go to Developer Tools > Application > Cookies) and include it when you run the tests:

```
npm cypress run --spec cypress/integration/testiramo/Tests1.js --env cookie="d1bcccccccccccccccccccc”
```

try also

```
npm cypress run --spec cypress/integration/testiramo/Tests1.js —headed —browser chrome --env cookie="d1bc2dccccccccccccccccccccccccccccc”
```

Or you can directly edit the ‘cookie’ environment variable in cypress.config.js configuration file.


```
npm cypress run test
```

try also

```
npm cypress run headedTest
```

```
npm cypress run chromeTest
```

## Take a look at:

[Video preview](https://github.com/bogeta11040/cypress-itplacesi/tree/master/cypress/videos)
