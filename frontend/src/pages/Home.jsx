import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
import Alert from "../components/Alert";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
      })
      .catch(() =>
        setAlert({
          show: true,
          message: "Failed to fetch notes",
          type: "error",
        })
      );
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          setAlert({ show: true, message: "Note deleted!", type: "success" });
          getNotes();
        }
      })
      .catch(() =>
        setAlert({
          show: true,
          message: "Failed to delete note",
          type: "error",
        })
      );
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          setAlert({ show: true, message: "Note created!", type: "success" });
          setContent("");
          setTitle("");
          getNotes();
        }
      })
      .catch(() =>
        setAlert({
          show: true,
          message: "Failed to create note",
          type: "error",
        })
      );
  };

  const updateNote = (id, updatedData) => {
    api
      .patch(`/api/notes/update/${id}/`, updatedData)
      .then((res) => {
        if (res.status === 200) {
          setAlert({ show: true, message: "Note updated!", type: "success" });
          getNotes();
        }
      })
      .catch(() =>
        setAlert({
          show: true,
          message: "Failed to update note",
          type: "error",
        })
      );
  };

  return (
    <div className="home-container">
      {alert.show && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}

      <div className="create-section">
        <h2>Create a Note</h2>
        <form onSubmit={createNote}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <input type="submit" value="Create Note" />
        </form>
      </div>

      <div className="notes-section">
        <h2>Your Notes</h2>
        <div className="notes-grid">
          {notes.map((note) => (
            <Note
              note={note}
              onDelete={deleteNote}
              onUpdate={updateNote}
              key={note.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
