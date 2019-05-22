-- Creates the project tasks join table
CREATE TABLE project_tasks (
    project_id INTEGER REFERENCES project(id) ON DELETE CASCADE,
    task_id INTEGER REFERENCES task(id) ON DELETE CASCADE
);