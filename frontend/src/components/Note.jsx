import { useState } from "react";
import "../styles/Note.css";

function Note({ note, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  const handleSubmit = () => {
    onUpdate(note.id, {
      title: editedTitle,
      content: editedContent,
    });
    setIsEditing(false);
  };

  return (
    <div className="note-container">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="edit-title"
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="edit-content"
          />
          <div className="button-group">
            <button className="save-button" onClick={handleSubmit}>
              Save
            </button>
            <button
              className="cancel-button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="note-title">{note.title}</p>
          <p className="note-content">{note.content}</p>
          <p className="note-date">{formattedDate}</p>
          <div className="button-group">
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
