import React from 'react'
import { Button } from './ui/button.jsx';
import { useForm } from "react-hook-form"


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const submitProduct = async () => {
            console.log(data)
           const formdata=new FormData();
            formdata.append("name",data.name);
            formdata.append("price",data.price);
            formdata.append("quantity",data.quantity);
            formdata.append("category",data.category);
            formdata.append("discount",data.discount);
            formdata.append("rating",data.rating);
            formdata.append("review",data.review);
            formdata.append("badge",data.badge);
            formdata.append("description",data.description);
            formdata.append("image",data.image[0]);
            const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/products/create`, {
                method: "POST",
                body: formdata,
            });
            
            if (response.ok) {
                alert("Product added successfully");
            }
        };
        submitProduct();
    }
    return (
        <>
            <div className='bg-white h-screen w-full'>
                <div className='text-3xl pt-10 flex justify-center'> Add Products</div>
                <div className='flex justify-center'>
                    <form action="" className='grid grid-cols-2 gap-5 pt-10 pl-20 w-2xl'>
                        <div className='flex flex-col w-1/2'>
                            <label>Product Name</label>
                            <input type="text" className='bg-amber-400 rounded-xl w-50 pl-4 ' {...register("name",{required:true})} />
                        </div>
                        <div className='flex flex-col w-1/2 '>
                            <label>Price</label>
                            <input type="text" className='bg-amber-400 rounded-xl w-50 pl-4' {...register("price",{required:true,type:"number"})} />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Quantity</label>
                            <input type="text" className='bg-amber-400 rounded-xl w-50 pl-4' {...register("quantity",{required:true,type:"number"})} />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Category</label>
                            <input type="text" className='bg-amber-400 rounded-xl w-50 pl-4' {...register("category",{required:true})} />
                        </div>

                        <div className='flex flex-col w-1/2'>
                            <label>Discount</label>
                            <input type="text" className='bg-amber-400 rounded-xl w-50 pl-4' {...register("discount",{required:true,type:"number"})} />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Rating</label>
                            <input type="text" className='bg-amber-400 rounded-xl w-50 pl-4' {...register("rating",{required:true,type:"number"})} />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Review</label>
                            <input type="text" className='bg-amber-400 rounded-xl w-50 pl-4' {...register("review",{required:true,type:"number"})} />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Badge</label>
                            <input type="text" className='bg-amber-400 rounded-xl w-50 pl-4' {...register("badge",{required:true})} />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Description</label>
                            <textarea type="text" className='bg-amber-400 w-112 h-50 rounded-xl pl-4' {...register("description",{required:true})} />
                        </div>
                    </form>
                    <div className='flex flex-col w-1/4 pt-15'>
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" {...register("image",{required:true,type:"file"})} />
                        </label>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Button type='submit' onClick={handleSubmit(onSubmit)}
                        className='bg-green-500 mt-10 w-1/4' >Submit</Button>
                </div>
            </div>
        </>
    )
}

export default AddProduct