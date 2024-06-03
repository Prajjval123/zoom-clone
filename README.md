# Loom

A fully functional video conferencing application that allows users to perform instant video calls, host personal rooms, and access previous recordings.

📋 Table of Contents
- 🤖 [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 🔋 [Features](#features)
- 🤸 [Quick Start](#quick-start)
- 🕸️ [Code Structure](#code-structure)
- 🚀 [More](#more)

## 🤖 Introduction

Loom is built with the latest Next.js and TypeScript technologies. This project replicates a widely used video conferencing tool, enabling users to securely log in, create meetings, and access various functionalities such as recording, screen sharing, and managing participants.

## ⚙️ Tech Stack

- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS

## 🔋 Features

- **Authentication**: Implements secure authentication and authorization using Clerk, supporting social sign-on and traditional email/password methods.
- **New Meeting**: Quickly start a new meeting with configurable camera and microphone settings.
- **Meeting Controls**: Full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant management, and more.
- **Exit Meeting**: Option to leave a meeting or end it for all participants.
- **Schedule Future Meetings**: Schedule future meetings with date and time, accessible on the 'Upcoming Meetings' page.
- **Past Meetings List**: Access previously held meetings with details and metadata.
- **View Recorded Meetings**: Access and review past meeting recordings.
- **Personal Room**: Each user has a personal room with a unique meeting link.
- **Join Meetings via Link**: Easily join meetings using a provided link.
- **Secure Real-time Functionality**: All interactions are secure and occur in real-time, ensuring user privacy and data integrity.
- **Responsive Design**: Optimized for various devices, adapting to different screen sizes and resolutions.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/Prajjval123/zoom-clone.git
cd loom
Installation
Install the project dependencies using npm:

bash
Copy code
npm install
Set Up Environment Variables
Create a new file named .env in the root of your project and add the following content:

env
Copy code
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
Replace the placeholder values with your actual Clerk & getstream credentials. Obtain these credentials by signing up on the Clerk and getstream websites.

Running the Project
bash
Copy code
npm run dev
Open http://localhost:3000 in your browser to view the project.

🕸️ Code Structure
app/globals.css
tailwind.config.ts
components/MeetingCard.tsx
🚀 More
Advance your skills with additional resources and courses to deepen your understanding and expertise in Next.js and TypeScript.

Enjoy building Loom, and happy coding!
