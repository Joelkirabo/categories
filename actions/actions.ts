"use server"

import { FormData } from "@/app/new/page"
import { db } from "@/lib/db"


export async function savecategory(data:FormData){
    const{categoryname, slug} = data;    

    const existingcategory = await db.category.findUnique({
        where:{slug:slug}

        
    })

    if(existingcategory){
        return {
            success:false,
            error: 'Category already exists'
        }
    }else{        
        await db.category.create({
            data:{
                categoryname,
                slug
            }
           
        })
        return {
            success:true,
            error:'Category added successfully'
        }
    }
   

}


export async function getdata(){
    const categories = await db.Category.findMany() || [];
    return categories;
}



