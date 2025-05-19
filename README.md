# Eclipse | Anonymous Chats

Eclipse is a lightweight chat application where users can create temporary profiles and group chats that automatically delete when empty, aiming to provide casual, low-commitment conversations without accounts or permanent data.

I created Eclipse to learn more about websockets. My goal was to build an application that explores user session management, event-based architectures, and connection security, while also providing a creative outlet for UI/UX design. I had a lot of fun building this!

## Screenshots
Chat & profile menu

![image](https://github.com/user-attachments/assets/4e795ed1-e3e8-4d19-bbdc-5f74fa7954e0)

Sample chat with 3 users

![image](https://github.com/user-attachments/assets/ffe508bb-2f21-4d34-afa8-66105509d396)

Chat & profile menu given a sharable link from a chat user:

![image](https://github.com/user-attachments/assets/c2341078-32db-40e8-a2dd-f38e9f33e6bc)


Sample theme 1: Twilight

![image](https://github.com/user-attachments/assets/12b0058f-de8f-4ad2-8b5a-24181dbbaf4d)

Sample theme 2: Canyon

![image](https://github.com/user-attachments/assets/fc4c92a7-5eaa-4e08-ae4d-3ea8dd230949)

Theme selction modal:

![image](https://github.com/user-attachments/assets/3e6f94bb-c157-4587-9e56-34a8c82c4d72)


## Features
- **Temporary profiles**: Users can create a temporary name and avatar without creating an account.
- **Temporary chats**: Chat rooms are created dynamically and are automatically deleted when all users leave.
- **Real-time messaging**: Messages are instantly broadcast to all members in a room.
- **Themes**: Rooms have a variety of themes that can be set.
- **Shareable room links**: Users can create a room and invite others to join using a link.
- **Spam protection**: Built-in rate limits help prevent spam attacks.

## Tools
This application was creating using:
- ExpressJS
- NodeJS
- SocketIO
- TailwindCSS

## Installation
To run this application locally on your machine:
1. Clone the repository
```
git clone https://github.com/avallip443/eclipse.git
cd eclipse
```
2. Install dependencies
```
npm install
```
3. Start the server
```
node server.js
```
