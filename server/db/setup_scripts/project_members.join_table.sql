-- Table that joins the project and it's members
CREATE TABLE project_members (
    project_id INTEGER REFERENCES project(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);