import express from "express";
import bodyParser from "body-parser";

interface ITodoTask {
    id: number;
    title : string;
    isDone : boolean;
}

class App {
    public express: express.Application;
    public todoTasks : any[];

    constructor() {
        this.express = express();
        this.todoTasks = [];
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended : false}));
        this.express.use(express.static(process.cwd() + "/web-app/build/"));
    }


    private routes(): void {
        // Basic Route to get the HTML
        this.express.get("/", (req, res, next) => {
            res.sendFile(process.cwd() + "/web-app/build/index.html")
        });

        // Create Calendar Event
        this.express.post("/todo", (req, res) => {
            console.log("POST operation received");
            console.log(req.body);
            var task : ITodoTask = {
                id: this.todoTasks.length,
                title: req.body["title"],
                isDone : false
            };
                this.todoTasks.push(task);
                console.log("SUCESS: Post request sucessful")
                res.status(201).json(task);
                
        });
        
        // Get All Calendar Events
        this.express.get("/todo", (req, res) => {
            console.log("GET operation received");
            res.json(this.todoTasks);
        });

        // Set the task to other state
        this.express.put("todo/:id", (req, res) => {
            var numberId : number = +req.params.id;
            if(numberId < 0 || numberId >= this.todoTasks.length) {
                res.status(500).end();
            }
            
            this.todoTasks[numberId].isDone = req.body["isDone"];
            res.status(200).json(this.todoTasks[numberId])
        });
    }   
}

export default new App().express;