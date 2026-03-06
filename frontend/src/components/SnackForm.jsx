import { useState, useEffect } from "react"
import { addSnack, updateSnack } from "../services/api"
import toast from "react-hot-toast"

function SnackForm({ refresh, editSnack, setEditSnack }) {

const [form,setForm] = useState({
productName:"",
brand:"",
category:"",
price:"",
stock:"",
productType:"",
tasteType:"",
requiresRefrigeration:false
})

useEffect(()=>{
if(editSnack){
setForm(editSnack)
}
},[editSnack])

const handleChange = (e)=>{
const {name,value,type,checked} = e.target
setForm({
...form,
[name]: type==="checkbox" ? checked : value
})
}

const handleSubmit = async(e)=>{
e.preventDefault()

try{

if(editSnack){
await updateSnack(editSnack._id,form)
toast.success("Snack updated")
setEditSnack(null)
}else{
await addSnack(form)
toast.success("Snack added")
}

setForm({
productName:"",
brand:"",
category:"",
price:"",
stock:"",
productType:"",
tasteType:"",
requiresRefrigeration:false
})

refresh()

}catch(err){
toast.error("Error")
}

}

return(

<form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 mb-6">

<input name="productName" placeholder="Product Name" className="input input-bordered" value={form.productName} onChange={handleChange} />

<input name="brand" placeholder="Brand" className="input input-bordered" value={form.brand} onChange={handleChange} />

<input name="category" placeholder="Category" className="input input-bordered" value={form.category} onChange={handleChange} />

<input name="price" placeholder="Price" className="input input-bordered" value={form.price} onChange={handleChange} />

<input name="stock" placeholder="Stock" className="input input-bordered" value={form.stock} onChange={handleChange} />

<input name="productType" placeholder="Product Type" className="input input-bordered" value={form.productType} onChange={handleChange} />

<input name="tasteType" placeholder="Taste Type" className="input input-bordered" value={form.tasteType} onChange={handleChange} />

<label className="flex items-center gap-2">
<input type="checkbox" name="requiresRefrigeration" checked={form.requiresRefrigeration} onChange={handleChange}/>
Requires Refrigeration
</label>

<button className="btn btn-primary col-span-2">
{editSnack ? "Update Snack" : "Add Snack"}
</button>

</form>

)
}

export default SnackForm