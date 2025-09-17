class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const express = require('express');
const app = express();

// Route that throws a custom error
app.get('/custom-error', (req, res, next) => {
  next(new AppError('Custom error occurred!', 400));
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });

});

app.listen(3000, () => {
console.log(`Server is running at http://localhost:${3000}`);
});
