# detect-portrait
A React component for detecting portrait orientations on mobile. Used in The Space.
## Why is it public domain?
We wanted to give back to our userbase for our devtools, so we'll be freeing some of the components we use in our sites.
## Usage 
Copy `OrientationModal.jsx` into the components folder of your site. 
### Importing
```jsx
import {OrientationModal} from 'components/OrientationModal.jsx'
```
### Props
`message`: The message the modal displays when the user's device is in portrait mode.

`textColor`: The color of the modal text.

`backgroundColor`: The color of the modal background.
### Example
```html
<OrientationModal message="Please turn your device to landscape mode 😁" textColor="black" backgroundColor="white"/>
```
