--  Creates the task table
CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    creater INTEGER REFERENCES users(id) ON DELETE CASCADE,
    description VARCHAR(1000),
    stage INTEGER,
    due_date VARCHAR(30),
    created_at VARCHAR(30)
);