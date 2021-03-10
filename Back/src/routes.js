
const express = require('express');
const multer = require('multer');
const UploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(UploadConfig);
routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/', (req, res) => res.json({ ok: 'sim' }));
routes.get('/dashboard', DashBoardController.show);
routes.post('/spots/:id/bookings', BookingController.store);

module.exports = routes;
