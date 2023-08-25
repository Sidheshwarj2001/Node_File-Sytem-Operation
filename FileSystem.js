const { throws } = require("assert");
const { error } = require("console");
const fs =require("fs");

// Reading the file content;

const read = fs.readFile("txt.txt",(error ,data) =>
{
    if(error) throw error;
    console.log(data.toString())
})

// write the content into the file
const write = fs.writeFile("Txt1.txt" , "Welcome to our new file" , (error) =>
{
    if(error) throw error;
})

// wrrite the content into file using open( ) function

const open = fs.open("txt2.txt" , "w", (error,data) =>
{
    console.log(error);
})

// creating the directory
const mkdir = fs.mkdir("NodeModule" , (error) =>
{
    console.log(error);
})

// delete the file

const deletefile = fs.unlink("NodeModule" ,(error) => {
    console.log(error)
});

//Rename the ffile
const rename = fs.rename("txt.txt" , "newtxt.txt" , (error) =>
{
    console.log(error)
})