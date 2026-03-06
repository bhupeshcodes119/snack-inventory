import { deleteSnack } from "../services/api"
import toast from "react-hot-toast"

function SnackTable({ snacks, refresh, setEditSnack }) {

const handleDelete = async(id)=>{
await deleteSnack(id)
toast.success("Deleted")
refresh()
}

return(

<table className="table w-full">

<thead>
<tr>
<th>Name</th>
<th>Brand</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{snacks.map(snack=>(
<tr key={snack._id}>

<td>{snack.productName}</td>
<td>{snack.brand}</td>
<td>{snack.category}</td>
<td>{snack.price}</td>
<td className={snack.stock < 5 ? "text-red-500 font-bold" : ""}>
{snack.stock}
</td>

<td className="space-x-2">

<button
className="btn btn-sm btn-info"
onClick={()=>setEditSnack(snack)}
>
Edit
</button>

<button
className="btn btn-sm btn-error"
onClick={()=>handleDelete(snack._id)}
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

)

}

export default SnackTable