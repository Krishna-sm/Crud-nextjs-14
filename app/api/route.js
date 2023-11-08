import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async()=>{
    await ConnectDB();
}

LoadDB()

export async function POST(request){

    const {title,description} = await request.json()

    await TodoModel.create({
        title,
        description
    })


       return NextResponse.json({msg:"Todo Created"},{
        status:201
       })
}


export async function GET(request){


    const todos = await TodoModel.find({});

       return NextResponse.json({todos})
}

export async function DELETE(request){

const id = request.nextUrl.searchParams.get("id")
// http://localhost:3000/api?id=323
// console.log();

await TodoModel.findByIdAndDelete(id);

       return NextResponse.json({msg:"Todo deleted"},{
        status:200
       })
}


export async function PUT(request){

    const id = request.nextUrl.searchParams.get("id")
    // http://localhost:3000/api?id=323
    // http://localhost:3000/api/todos/12
    // http://localhost:3000/api/1
    // http://localhost:3000/api/2
    // console.log();
    
    await TodoModel.findByIdAndUpdate(id,{
        $set:{
            isComplete:true
        }
    });
    
           return NextResponse.json({msg:"Todo Updated"},{
            status:200
           })
    }
    
