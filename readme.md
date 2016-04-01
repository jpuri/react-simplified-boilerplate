# React Minimal Boilerplate
This will be a React Boilerplate for I have made for my react projects. Its inspired by Pete Hunt's [React HowTo](https://github.com/petehunt/react-howto). I call it React Minimal Boilerplate as it has a minimal set of libraries, when it comes to adding a JavaScript library to my FrontEnd projects I deeply believe in: _If you do not need it do not use it_.

Libraries included in the project:
1. React, React-DOM : 0.14.7

2. React-Router: 2.0.1

3. immutable: 3.7.6

3. Webpack: 1.12.14

5. Babel: 6.x

6. CSS-Modules for styling

7. Unit Test Coverage: enzyme:2.2.0, mocha:2.4.5, chai:3.5.0, sinonjs:1.17.3

8. ESLint: 2.5.1, using eslint-config-airbnb:6.2.0

9. Flow: 0.22.1

Other small tweaks I did for myself:
1. In development mode all http requests with `/api` will be redirected to `http://localhost:8080`

2. Added `normalize.css` to the project

3. The project uses `/template/index.html` as template to create `index.html` in dev mode and during build
