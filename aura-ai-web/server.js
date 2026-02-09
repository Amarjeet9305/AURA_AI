import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '100kb' }));

// Escape HTML to prevent XSS in email content
const escapeHtml = (str) => {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/\n/g, '<br>');
};

// Basic email regex
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

// Configure Mock Email Service (Removed real Gmail transporter to avoid 535 errors)
/*
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
*/

console.log('\n🚀 Mock Email Service is active (Logic removed as requested)');

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body || {};

    // Validate required fields
    if (!name || typeof name !== 'string' || !name.trim()) {
        return res.status(400).json({ success: false, message: 'Name is required.' });
    }
    if (!email || typeof email !== 'string' || !email.trim()) {
        return res.status(400).json({ success: false, message: 'Email is required.' });
    }
    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();

    // Log for server-side debugging (Replaces actual email sending)
    console.log(`\n📬 [MOCK EMAIL] Received submission:`);
    console.log(`- From: ${trimmedName} (${trimmedEmail})`);
    console.log(`- Message: ${trimmedMessage}`);
    console.log(`✅ Success response sent to client.`);

    try {
        // Simulate a slight delay for realistic UI behavior
        await new Promise(resolve => setTimeout(resolve, 800));

        res.status(200).json({
            success: true,
            message: 'Message received successfully (MOCK). In a real environment, an email would be sent.'
        });
    } catch (error) {
        console.error('❌ Error in mock contact route:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error processing mock request.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`\n  ➜  Local:   http://localhost:${PORT}/`);
    console.log(`  ➜  Network: use --host to expose\n`);
});
