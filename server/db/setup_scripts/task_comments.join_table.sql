-- Task comments table
CREATE TABLE task_comments (
    task_id INTEGER REFERENCES task(id) ON DELETE CASCADE,
    comment_id INTEGER REFERENCES comment(id) ON DELETE CASCADE
);