# React Minimal Boilerplate
This will be a React Boilerplate for I have made for my react projects. Its inspired by Pete Hunt's [React HowTo](https://github.com/petehunt/react-howto).

I call it React Minimal Boilerplate as it has a minimal set of libraries, when it comes to adding a JavaScript library to my FrontEnd projects I deeply believe in: _If you do not need it do not use it_.

Libraries included in the project:
  1. React, React-DOM : 15.3.1
  2. React-Router: 2.7.0
  3. immutable: 3.8.1
  3. Webpack: 1.13.2
  5. Babel: 6.x
  6. CSS-Modules for styling
  7. Unit Test Coverage: enzyme:2.4.1, mocha:3.0.2, chai:3.5.0, sinonjs:1.17.5
  8. ESLint: 3.4.0, using eslint-config-airbnb:10.0.0
  9. Flow: 0.22.1

Other small tweaks I did for myself:
  1. In development mode all http requests with `/api` will be redirected to `http://localhost:8080`
  2. Added `normalize.css` to the project
  3. The project uses `/template/index.html` as template to create `index.html` in dev mode and during build

To use boilerplate, follow  these steps:
  1. git clone https://github.com/jpuri/react-minimal-boilerplate.git
  2. rm -rf .git
  3. npm install
  4. npm start
