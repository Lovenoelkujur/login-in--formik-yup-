# React Form Validation using Formik and Yup

This project demonstrates a login form with validation implemented using Formik and Yup in a React app. It includes form fields for Name, Email, Password, and Confirm Password with validation rules, error messages, and a submission button that is disabled until all fields have valid input.

## ScreenShort

![Project Screenshot](./src/assets/ScreenShort.png)

## Features

- `Formik`: For managing form state and handling form submission.

- `Yup`: For schema-based form validation.
Responsive Design: Media queries for different screen sizes, including 4K, laptop, tablet, and mobile.

- `Form Fields`:
    - Name: Minimum 3 characters.

    - Email: Must be a valid email format.

    - Password: Must match the specific password `rishiME@199`.

    - Confirm Password: Must match the password.

- `Submit Button`: Disabled until all fields are valid. Shows error messages for invalid inputs.

- `Error Handling`: Error messages for invalid inputs are displayed directly below the corresponding field.

- `Custom Cursor`: The submit button displays a 'no-drop' cursor when disabled.

## Technologies Used

- `React`: JavaScript library for building user interfaces.

- `Formik`: For handling form state, validation, and submission in React.

- `Yup`: For schema validation.

- `CSS`: For styling and responsive design.

## Clone the Repository

```bash
git clone https://github.com/Lovenoelkujur/login-in--formik-yup-.git
```
## Run the App

```bash
npm run dev
```

This will start the development server and you can view the app by navigating to http://localhost:5173 in your browser.


## Project Structure

```css
formik-yup-react-form/
├── public/
│   ├── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
├── package.json
```

### `App.js`

- Implements the form using Formik with the validation schema provided by Yup.

- Contains name, email, password, and confirmPassword fields, along with validation logic and error handling.

### `App.css`

- Contains styles for the form and different screen sizes using media queries. This ensures that the form looks good on all devices, from 4K screens to small mobile screens.

## Form Validation Rules

- `Name`: Must be at least 3 characters long and is required.

- `Email`: Must be in a valid email format and is required.

- `Password`: Must be exactly rishiME@199 and is required.

- `Confirm Password`: Must match the password field and is required.

## Media Queries

- `4K Screen`: Between 1441px and 3840px.

- `Large Laptop Screen`: Between 1025px and 1440px.

- `Laptop Screen`: Between 769px and 1024px.

- `Tablet Screen`: Between 426px and 768px.

- `Mobile Large Screen`: Between 376px and 425px.

- `Mobile Medium Screen`: Between 321px and 375px.

- `Mobile Small Screen`: Up to 320px.

## Hosted Link
```bash
https://login-in-formik-yup.vercel.app/
```

## License

This project is open-source and available under the MIT License.