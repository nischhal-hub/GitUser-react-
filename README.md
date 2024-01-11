
# [GitUser](https://guser.netlify.app)
Gituser provides the indepth info of your github profile with easy to understand charts and bargraphs. You can analyze your and anyones github profile with a simple search.This is a webapp created using React.
Project inspired from jhon smilga.

Visit the live site: [GitUser👈](https://guser.netlify.app)

## Key features:
- Login/Signup using auth0
- Search github users
- Easlily find users followers, no of repos,
- Most popular languages of users in piechart
- Most forked repos in bar
- Stars per language
- Most starred repo

![Preview](https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/418458643_948904576618832_3313753295515397954_n.jpg?_nc_cat=108&cb=99be929b-b574a898&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHyHA1jl5lAuneCtsTSsHCXjIEj-wWfqkmMgSP7BZ-qSXeRUfCgy6NyDGXpB_aEii68idSOfBn1TAWrbe3AD84y&_nc_ohc=mpGCkConqIMAX_hdXkd&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBuR7Z4v2Etjd75RxJ1IaNcKVJXudQdDACV22ayGbTScw&oe=65A5E5EC)



You can fork the starter project file from [HERE 👈](https://github.com/john-smilga/starter-project-react-github-search-users)


# Documentation
## Starter Project

- css provided (global styles, styled components)
- folders/files already setup
- all imports included (warnings)
- index.js for easier imports

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from 'react-icons/fi';
<FiUsers className='nameOfTheClass'> </FiUsers>;
```

## React Router Dom

version used - "react-router-dom": "^5.2.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections
  email,social

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

## Deployment

[Netlify](https://www.netlify.com/)

## Additional Info

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

[Redirects Blog Post](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### Warnings and create-react-app

package.json

```js
"build": "CI= react-scripts build",
```

[create-react-app Warning Fix Blog Post](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)

dev-rozv1qrclo3wmj1e.us.auth0.com
pOkxdTytYpHaPQwe8GNJWGeJ4dWjJYNR
