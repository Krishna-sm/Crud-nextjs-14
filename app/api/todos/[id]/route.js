import { NextResponse } from "next/server";

export async function GET(request,ctx){
    return NextResponse.json({msg:ctx.params.id})
}