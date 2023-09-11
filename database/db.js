const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://vamshiroy:rohithvamshi@cluster0.b96ikga.mongodb.net/';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});


//mongodb://127.0.0.1:27017/task-manager