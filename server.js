const express = require("express");
const {faker} = require ('@faker-js/faker');
const app = express();
const PORT= 8000;

app.use(express.json());
app.use(express.urlencoded({extented : true}));

const users =[
    {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber:faker.phone.phoneNumber(),
        LastName: faker.name.lastName(),
        FirstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
];
console.log(users);

const companies=[
    {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address:faker.address.streetAddress(),
        City:faker.address.city(),
        state: faker.address.state(),
        ZipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
];
console.log(companies);

app.get('/api/user/new',(req,res)=>{
    res.json(users);
});

app.get('/api/companies/new',(req,res)=>{
    res.json(companies);
})

app.get('/api/user/company',(req,res)=>{
    const object = {
        newUser : users,
        newCompany: companies
    }
    res.json(object)
    console.log(object);
});




app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON ${PORT}`)
})