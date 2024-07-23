import express from "express";
import { formController } from '../controller/form_controller.js'

const router = express.Router();


router.post('/form', formController.formPost);

export { router };