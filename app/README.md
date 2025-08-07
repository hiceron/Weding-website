# Wedding Planner Web App

This is a beautiful and advanced wedding planner web application built with Next.js, React, TypeScript, Tailwind CSS, Shadcn/ui, and Firebase.

## Features

- User Authentication (Sign Up, Login)
- Dashboard with Wedding Countdown, To-Do List Progress, and Guest Count
- Comprehensive To-Do List with priorities, notes, and sub-tasks
- Guest List Management (Add, Edit, Delete Guests)
- Basic Wedding Invitation Sender
- Dark Mode / Light Mode Toggle
- Responsive Design

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-repository-name>/app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Firebase

1.  Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  In your Firebase project, enable:
    *   **Authentication:** Go to "Build" > "Authentication" > "Get started" and enable "Email/Password" provider.
    *   **Firestore Database:** Go to "Build" > "Firestore Database" > "Create database". Start in test mode for quick setup, then adjust security rules as needed.
3.  Register a web app in your Firebase project settings to get your Firebase configuration. It will look something like this:

    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
    };
    ```

4.  Open `app/src/lib/firebase.ts` and replace the placeholder `firebaseConfig` with your actual Firebase configuration.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

To deploy your application to Firebase Hosting:

1.  Install the Firebase CLI globally:

    ```bash
npm install -g firebase-tools
    ```

2.  Log in to Firebase:

    ```bash
firebase login
    ```

3.  Initialize Firebase in your `app` directory:

    ```bash
cd app
firebase init
    ```
    *   Select "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys".
    *   Select "Use an existing project" and choose your Firebase project.
    *   For "What do you want to use as your public directory?", enter `out`.
    *   Configure as a single-page app: `Yes`.
    *   Set up automatic builds and deploys with GitHub: `No` (unless you want to).

4.  Build your Next.js application for production:

    ```bash
npm run build
    ```

5.  Deploy to Firebase Hosting:

    ```bash
firebase deploy --only hosting
    ```

Your application will be deployed to a Firebase-provided URL.