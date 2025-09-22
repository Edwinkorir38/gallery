# Darkroom Gallery App

A simple image gallery web application built with Node.js, Express, MongoDB Atlas, and Materialize CSS.  
Users can upload images, browse the gallery, and view individual images.



## Features

- Image upload with multipart form-data
- Stores metadata in MongoDB Atlas
- Responsive UI using Materialize CSS
- Continuous Integration pipeline with Jenkins
- Slack notifications for build status
- Deployment on Railway with environment variables

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB Atlas account (free tier available)
- Railway account (free hosting)
- Git

### Installation

1. Clone the repo:

    ```bash
    git clone https://github.com/Edwinkorir38/gallery.git
    cd gallery
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the project root with the following variables:

    ```env
    MONGO_URI_PRODUCTION=<Your MongoDB Atlas production URI>
    MONGO_URI_DEVELOPMENT=<Your MongoDB Atlas development URI>
    MONGO_URI_TEST=<Your MongoDB Atlas test URI>
    PORT=5000
    ```

4. Start the app locally:

    ```bash
    npm start
    ```

5. Visit [http://localhost:5000](http://localhost:5000) in your browser.

---

## Environment Variables

Make sure to set these in your Railway project settings or locally in `.env`:

| Variable             | Description                        |
|----------------------|----------------------------------|
| `MONGO_URI_PRODUCTION` | MongoDB Atlas URI for production |
| `MONGO_URI_DEVELOPMENT`| MongoDB Atlas URI for development|
| `MONGO_URI_TEST`       | MongoDB Atlas URI for tests       |
| `PORT`                 | Port number (default: 5000)       |

---

## Deployment with Railway

1. Connect your GitHub repository to Railway.
2. Add your environment variables in the Railway dashboard under *Settings > Variables*.
3. Railway will auto-deploy on each push.
4. Your app URL will be at [Railway.app](https://web-production-72cbb.up.railway.app/).

---

## CI/CD Pipeline (Jenkins)

- Builds and tests the app on every push.
- Sends Slack notifications on success/failure.
- Uses Jenkins pipeline configured with:
  - Node.js tool
  - MongoDB URIs injected as credentials
  - Slack webhook for notifications

---

## Usage

- Upload images via the homepage form.
- View uploaded images in the gallery.
- Click on an image to see detailed view.

---

## Troubleshooting

- **MongoDB Connection Errors**  
  - Check environment variables are correctly set.  
  - Confirm IP whitelisting on MongoDB Atlas.  
  - Inspect logs for errors.

- **Image Upload Failures**  
  - Check file upload size limits.  
  - Verify upload directory permissions (for local deployment).  
  - Monitor logs for issues.

---

## Testing

Run tests locally using:

```
bash
npm test

Ensure the following environment variables are configured before running tests:

NODE_ENV=test

MONGO_URI_TEST=<Your MongoDB Atlas test database URl>