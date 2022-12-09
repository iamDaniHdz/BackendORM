import  Sequelize  from "sequelize";

//Inicio de la ORM
export const sequelize = new Sequelize(
    'projectsbd',
    'postgres',
    '8318',
    {
        host: 'localhost',
        dialect : 'postgres'
    }
);