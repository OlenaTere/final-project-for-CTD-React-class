Here is a Task Assignment Board
Create tasks and assign to team members
Drag tasks between “To Do,” “In Progress,” and “Done” columns (use react-beautiful-dnd)
Filter tasks by assignee or due date

## Getting Started

1. Create a free [Airtable account](https://airtable.com/).
2. Make a base with a `Tasks` table and required fields.
3. Create a personal access token (see Airtable docs).
4. Copy `.env.local.example` to `.env.local` and fill in your details.
5. Run `npm install` and `npm run dev`.

Data is persisted and synced with Airtable. All API/network errors are caught and displayed to the user.