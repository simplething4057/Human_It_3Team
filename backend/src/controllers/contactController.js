const pool = require('../config/db');

exports.submitContact = async (req, res) => {
    const { email, message } = req.body; 
    
    try {
        const [result] = await pool.execute(
            'INSERT INTO contacts (email, message) VALUES (?, ?)',
            [email, message]
        );
        res.status(201).json({ success: true, message: 'Contact submitted successfully', id: result.insertId });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ success: false, message: 'Failed to submit contact' });
    }
};