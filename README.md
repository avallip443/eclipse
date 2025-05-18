# Eclipse | Anonymous Chats

Eclipse is a lightweight chat application where users can create temporary profiles and group chats that automatically vanish when empty. Inspired by the simplicity and anonymity of Discord, Eclipse aims to provide casual, low-commitment conversations without accounts or permanent data.

I created Eclipse to learn more about websockets. My goal was to build an application that explores user session management, event-based architectures, and connection security, while also providing a creative outlet for UI/UX design. I had a lot of fun building this!

## Screenshots
Chat & profile menu
![image](https://github.com/user-attachments/assets/4e795ed1-e3e8-4d19-bbdc-5f74fa7954e0)

Sample chat with 3 users
![image](https://github.com/user-attachments/assets/ab51b6e0-f214-4580-96e3-09f36cbc5da7)

Sample chat with the Twilight theme selected
![image](https://github.com/user-attachments/assets/8145ca5e-77b2-4111-919c-e8128f487337)

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
- SocketsIO
- TailwindCSS
