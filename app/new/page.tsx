"use client"

import {useForm} from 'react-hook-form';
import { savecategory } from '@/actions/actions';

import { useRouter } from 'next/navigation';

export type FormData={
    categoryname: string
    slug: string
}

export default function categoryForm(){
    const router = useRouter()    
    
    const {register,reset, handleSubmit, formState:{errors}} =useForm<FormData>();

    async function formsubmit(data:FormData){  
        data.categoryname.toLowerCase()
        data.slug = data.categoryname.toLowerCase().split(" ").join("-")
        const returns = await savecategory(data);
        const {success, error} = returns;

        if(!success){
            if(error === 'Category already exists'){
                alert(error)
                
            }
        }
        if(success){
            if(error === 'Category added successfully'){
                alert(error)
                
            }
            
        }
        reset()
        router.push("/")
    }
    return (
        <div>          
                    <form onSubmit={handleSubmit(formsubmit)} className="max-w-sm mx-auto p-5">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter new category</label>
                        <input {...register("categoryname",{required: 'Please enter category!'})} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category..."/>
                        {errors.categoryname? <div className='text-red-500 text-xs mt-4'>{errors.categoryname.message} </div>: ""}
                    </div>                
             
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Category</button>
                    </form>

        </div>
    )
}