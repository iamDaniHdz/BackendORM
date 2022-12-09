import { Project } from '../models/Project.js';

export const getProjects = async (req,res) => {
    try {
        const response = await Project.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
}

export const createProject = async (req, res) => {
    try{

        const {name,priority,description} = req.body;

        const createProject = await Project.create({
            name,
            priority,
            description
        }); 

        res.status(200).json(createProject);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
};

export const updateProject = async (req, res) => {
    try {
        const {id} = req.params;
        const {name,priority,description} = req.body;

        const project = await Project.findByPk(id);

        project.name = name
        project.priority = priority
        project.description = description

        await project.save();

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
}

export const deleteProject = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Project.destroy({
            where: {id_project : id}
        });

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
}