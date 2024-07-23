import { Form } from '../models/form_model.js';
class formController {
    static formPost = async (req, res) => {
        try {
            const form = new Form(req.body);
            await form.save();
            res.status(201).json({ message: 'Form submitted successfully', data: form });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export { formController }