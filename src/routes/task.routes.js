import {Router} from 'express';

import { 
    getTasks, 
    createTask, 
    updateTask, 
    deleteTask
} from '../controllers/task.controller.js';

const router = Router();

router.get('/task', getTasks);

router.post('/task', createTask);

router.put('/task/:id', updateTask);

router.delete('/task/:id', deleteTask);

export default router;
