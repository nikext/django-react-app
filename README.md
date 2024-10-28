# Notes App

A full-stack web application for creating, reading, updating, and deleting personal notes. Built with Django REST Framework backend and React frontend.

## Features

- 🔐 User authentication (register/login)
- 📝 Create personal notes with title and content
- 📖 View all your notes
- ✏️ Edit existing notes
- 🗑️ Delete notes
- 🔒 Secure API endpoints
- 🎨 Responsive design

## Tech Stack

### Backend

- Django
- Django REST Framework
- SQLite3
- JWT Authentication

### Frontend

- React
- React Router
- Axios
- CSS3

## Prerequisites

Before running this project, make sure you have the following installed:

- Python (3.8 or higher)
- Node.js (14.0 or higher)
- npm or yarn

## Installation

### Backend Setup

1. Clone the repository

bash
git clone https://github.com/nikext/django-react-app.git
cd django-react-app

2. Create and activate a virtual environment

bash

# Windows

python -m venv venv
venv\Scripts\activate

# macOS/Linux

python3 -m venv venv
source venv/bin/activate

3. Install Python dependencies

bash
cd backend
pip install -r requirements.txt

4. Run migrations

bash
python manage.py migrate

5. Start the Django development server

bash
python manage.py runserver

The backend server will start at `http://localhost:8000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory

bash
cd frontend

2. Install frontend dependencies

bash
npm install

# or

yarn install

3. Start the development server

bash
npm start

# or

yarn start

The frontend application will start at `http://localhost:3000`

## API Endpoints

- `POST /api/register/` - Register a new user
- `POST /api/token/` - Login and get JWT tokens
- `POST /api/token/refresh/` - Refresh JWT token
- `GET /api/notes/` - Get all notes for authenticated user
- `POST /api/notes/` - Create a new note
- `PATCH /api/notes/update/<id>/` - Update a specific note
- `DELETE /api/notes/delete/<id>/` - Delete a specific note

## Usage

1. Register a new account or login with existing credentials
2. Create new notes using the form at the top of the home page
3. View all your notes in the grid below
4. Edit notes by clicking the "Edit" button
5. Delete notes by clicking the "Delete" button
6. Logout using the navigation menu

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
