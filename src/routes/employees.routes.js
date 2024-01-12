import { Router } from "express"
import { getEmployee, getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controllers.js'

const router = Router()

router.get('/empleados', getEmployees);

router.get('/empleados/:id', getEmployee);

router.post('/empleados', createEmployee);

router.patch('/empleados/:id', updateEmployee);

router.delete('/empleados/:id', deleteEmployee);

export default router
