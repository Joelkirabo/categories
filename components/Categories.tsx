import { getdata } from "@/actions/actions";
import Link from "next/link";

export type CategoryProps = {
    categoryname: string;
    slug: string
}

export default async function Home() {

    const categories:CategoryProps[] = await getdata()
    
    return (
          <div className="flex px-5 gap-2">
            <div className="flex flex-wrap gap-2 items-center px-5">
                
                        {
                            categories.map((category,i)=>{
                                return(
                                    <div className="capitalize lowercase" key={i}>{category.categoryname}</div>
                                )
                            })
                        }            
                
            </div>
            <Link href="/new" className="py-0.5 px-4 bg-lime-500 rounded text-sm">Add</Link>
            
          </div>
  
    );
  }