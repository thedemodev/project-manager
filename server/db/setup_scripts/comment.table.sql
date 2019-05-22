-- Creates the comment table
CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    author_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    message VARCHAR(500),
    created_at TEXT
);