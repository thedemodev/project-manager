-- Creates the table to join the project manager with the project
CREATE TABLE project_manager (
    project_id INTEGER REFERENCES project(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);