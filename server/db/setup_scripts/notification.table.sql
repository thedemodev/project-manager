-- Cretaes table for notifications
CREATE TABLE notification (
    id SERIAL PRIMARY KEY,
    read BOOLEAN,
    recepient INTEGER REFERENCES users(id) ON DELETE CASCADE,
    sender TEXT,
    title text
    description text
);