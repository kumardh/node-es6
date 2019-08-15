// npm install --save sequelize
// npm install --save tedious

const Sequelize = require('sequelize');
const EmployeeSchema = require('./model/employee.js');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('testdb', 'postgres', 'Manav2020#', {
    host : 'localhost',
    dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });  
  
  const Employee = EmployeeSchema(sequelize, Sequelize);
  // Employee.sync({force: true}).then(function () {
  //   // Table created
  //   return Employee.create({
  //     firstName: 'Dhananjay',
  //     lastName: 'Kumar'
  //   });
  // });
  
  // Employee.create({
  //       firstName: 'Manav',
  //       lastName: 'Kumar'
  //     });

  //   Employee.create({
  //         firstName: 'Manoj',
  //         lastName: 'Kumar1'
  //       });

  Employee.findAll({raw: true, attributes: ['firstName', 'lastName']})
  .then(e => console.log(e));