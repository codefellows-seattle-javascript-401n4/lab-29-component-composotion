 ###### App Component
 * The app component manages the entire **application state**.
 * The state contains a notes array.
 * Each note adde will have:
   * `id`: contains the result of `uuid.v1()`.
   * `title`: user provided title.
   * `content`: user provided content.
   * `editing`: false by default.
   * `completed`: false by default.

 ###### NoteCreateForm Component
 * `onSubmit` the NoteCreateForm adds a note to the application state

 ###### NoteEdit Component
 * Displays delete button.
 * Displays note content.
 * `onDoubleClick` the NoteEdit component will allow you to edit the note that was clicked.
 * `onClick` the NoteEdit will delete a note from the application state.

 ###### NoteList Component
 * displays an unordered list of notes.
