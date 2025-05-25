 import Swal from 'sweetalert2'

const Addcoffe = () => {

    

    const handleaddcoffe = event =>
    {
         event.preventDefault();
        const form = event.target;
        const name = form.name.value;
         const  quantity = form.quantity.value;
          const  supplier= form.supplier.value;
           const  taste= form.taste.value;
            const category= form.category.value;
             const  details = form.details.value;
              const  photo = form.photo.value;
              const newcoffe = {name,quantity,supplier,taste,category,details,photo}
              console.log(newcoffe );
        fetch('http://localhost:5000/coffe',
            {
                method : 'POST',
                headers:
                {
                    'content-type':'application/json'
                },
                body :JSON.stringify(newcoffe)
            }
        )
        .then(res=>res.json())
        .then(data=>
        {
            console.log(data);

            Swal.fire({
  title: 'Success!',
  text: 'user added successfully',
  icon: 'success',
  confirmButtonText: 'Cool'
})
        }
        )        
                
    }
    return (
        <div className=" px-8 py-8">
             <h1 className='text-3xl text-red-700'> Add Your Coffe</h1>
             {/* <p className=" px-32 text-xl font-bold text-red-800">Add a Coffee</p> */}

             <div className=" py-8  bg-teal-100">
                 <p className=" px-32 text-xl font-bold text-red-800">Add a Coffee</p>
                <form onSubmit={handleaddcoffe}>
                    <div className=" px-32     ">
                        {/* row-1 */}
                        {/* <p className=" py-2 text-black font-bold ">Name</p> */}
                    
                   <div className="grid grid-cols-2 gap-10">
                     <div>
                        <p className=" py-2 text-black font-bold ">Coffe Name</p>
                    <input type="text" name="name" placeholder="Coffe Name" className="input input-bordered w-full " />
                     </div>
 
                    <div>
                        <p className=" py-2 text-black font-bold ">Available Quantity</p>
                    <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full  " />
                    </div>
                   </div>

                    </div>

                    <div className=" px-32   ">
                        {/* row-2 */}
                        
                    
                   <div className="grid grid-cols-2 gap-10">
                     <div>
                        <p className=" py-2 text-black font-bold ">Supplier</p>
                    <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full " />
                     </div>

                    <div>
                        <p className=" py-2 text-black font-bold ">Taste</p>
                    <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full  " />
                    </div>
                   </div>

                    </div>

                     <div className=" px-32   ">
                        {/* row-3 */}
                         
                    
                   <div className="grid grid-cols-2 gap-10">
                     <div>
                        <p className=" py-2 text-black font-bold ">Category</p>
                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " />
                     </div>

                    <div>
                        <p className=" py-2 text-black font-bold ">Details</p>
                    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full  " />
                    </div>
                   </div>

                   <div className="py-4">
                    <p className=" py-2 text-black font-bold ">Photo Url</p>
                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full    " />
                    </div>

                    <div className="py-4">
                        {/* <input type="submit" placeholder="Added Coffee" className="input input-bordered w-full text-center font-bold " /> */}

                        <button type="submit" className="btn btn-primary w-full text-center font-bold bg-black text-white">
                       Add Coffee
                       </button>

                    </div>

                    </div>

                     

                </form>
             </div>
        </div>

        
    );
};

export default Addcoffe;