const express = require('express')
const app = express()
const port = 3000
const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors',
async (_req, res) => {
  const [authors] = await Author.getAll();
  return res.status(200).json(authors);
})

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

app.listen(port, () => console.log('Online'));
