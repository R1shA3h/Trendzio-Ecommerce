import { connectMongoDB } from "@/libs/models/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest,NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams:any){
    try{
        
        const body = await request.json();
        const id = URLParams.params.id;
        const {name, category, price} = body;

        await connectMongoDB();

        const data = await Product.findByIdAndUpdate(id, {
            name,
            category,
            price,
        });

        return NextResponse.json({msg:"updated successfully",data});
    }catch(error){
        return NextResponse.json({
            error,
            msg:"Something went wrong",
        },
    { status:400}
    );
   }
}