BizDateUp Frontend Task
This project is a solution for the BizDateUp Front-End Internship assignment. It is built with React, Vite, TailwindCSS, React Router DOM, Axios, and MockAPI.

Features
Responsive landing page implemented from the provided Figma design

Talent hiring form with:

Axios POST request to MockAPI /submissions

Success message and form reset

Dashboard page:

Fetches all submissions from MockAPI (GET)

Displays data in responsive cards

Edit tab:

Shows list of submissions with Edit and Delete actions

Edit opens a pre-filled form and updates data using PUT

Delete removes the record using DELETE and updates UI instantly

Clean component-based architecture:

Reusable Input, Card, and Form components

Separate Landing and Dashboard pages with React Router

Tech Stack
React + Vite

TailwindCSS

React Router DOM

Axios

MockAPI

Getting Started
Clone the repository

git clone https://github.com/shubhamshrivastav1/bizdateup-frontend-task.git

cd bizdateup-frontend-task

Install dependencies

npm install

Run the development server

npm run dev

Open the shown localhost URL in your browser.

MockAPI
Resource: /submissions

Methods used: GET, POST, PUT, DELETE

Fields: fullName, phone, email, info, role, budget, hireCount, persona
