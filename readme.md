# React Components

## A React Component Library

A simple component library for my projects.

---

### Setup

Install the package

```sh
npm install @samuelbeard/react-components
```

Import the package

```js
import { Container, Row, Col } from '@samuelbeard/react-components'
```

Import the scss into your own scss

```scss
@import '~@samuelbeard/react-components/dist/scss/base.scss';
```

---

## Styling

Colours are organised by their color names. (`red`, `blue`, etc)

---

## Components

✅ - Done<br/>
❎ - Not Needed<br/>
❌ - Not Done

| Component  | className | background | color | size | ...props | PropTypes | defaultProps | stories | ...style |
| ---------- | --------- | ---------- | ----- | ---- | -------- | --------- | ------------ | ------- | -------- |
| Button     | ✅        | ✅         | ✅    | ✅   | ✅       | ✅        | ✅           | ✅      | ✅       |
| Card       | ✅        | ✅         | ✅    | ❎   | ✅       | ✅        | ✅           | ✅      | ❌       |
| CardBody   | ✅        | ✅         | ✅    | ❎   | ✅       | ✅        | ✅           | ✅      | ❌       |
| CardFooter | ✅        | ✅         | ✅    | ❎   | ✅       | ✅        | ✅           | ✅      | ❌       |
| CardHeader | ✅        | ✅         | ✅    | ❎   | ✅       | ✅        | ✅           | ✅      | ❌       |
| Countdown  | ❌        | ❌         | ❌    | ❌   | ❌       | ❌        | ❌           | ❌      | ❌       |
| Form       | ✅        | ❎         | ✅    | ❎   | ✅       | ❌        | ❌           | ❌      | ✅       |
| Field      | ❌        | ❌         | ❌    | ❌   | ❌       | ❌        | ❌           | ❌      | ❌       |
| Col        | ❌        | ❌         | ❌    | ❌   | ❌       | ❌        | ❌           | ❌      | ❌       |
| Container  | ❌        | ❌         | ❌    | ❌   | ❌       | ❌        | ❌           | ❌      | ❌       |
| Row        | ❌        | ❌         | ❌    | ❌   | ❌       | ❌        | ❌           | ❌      | ❌       |
| Nav        | ✅        | ✅         | ✅    | ❎   | ✅       | ✅        | ✅           | ✅      | ✅       |
| NavMenu    | ✅        | ❎         | ✅    | ❎   | ✅       | ✅        | ❎           | ✅      | ✅       |
| NavTitle   | ✅        | ❎         | ✅    | ❎   | ✅       | ✅        | ❎           | ✅      | ✅       |
| Section    | ✅        | ✅         | ✅    | ❎   | ✅       | ✅        | ✅           | ✅      | ✅       |
| FadeIn     | ✅        | ❎         | ❎    | ❎   | ✅       | ✅        | ✅           | ✅      | ✅       |

---

## Improvements
- Add documentation for css utility classes.


---

## Utility Classes

### Super Center
Center items inside a container vertically and horizontally.

```
className="super-center"
```

### Test Align
Align text to left, center or right.

```
className="text-left"
className="text-center"
className="text-right"
```
