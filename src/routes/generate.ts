import { Router } from 'express';

const router = Router();

// Validator function to validate request body
const validateRequestBody = (body) => {
    if (!body || typeof body.prompt !== 'string') {
        return false;
    }
    return true;
};

router.post('/generate', (req, res) => {
    const valid = validateRequestBody(req.body);
    if (!valid) {
        return res.status(400).json({ error: 'Invalid request shape' });
    }

    // Stubbed response
    const response = {
        message: 'This is a stubbed response',
        prompt: req.body.prompt
    };
    res.status(200).json(response);
});

export default router;