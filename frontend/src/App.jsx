import { useEffect, useState } from "react";
import { getSnacks } from "./services/api";
import SnackForm from "./components/SnackForm";
import SnackTable from "./components/SnackTable";
import { Toaster } from "react-hot-toast";

function App() {

const [snacks,setSnacks] = useState([])
const [search,setSearch] = useState("")
const [editSnack,setEditSnack] = useState(null)

const fetchSnacks = async()=>{
const res = await getSnacks()
setSnacks(res.data)
}

useEffect(()=>{
fetchSnacks()
},[])

const filtered = snacks.filter(snack =>
snack.productName.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="p-10 max-w-6xl mx-auto">

<Toaster/>

<h1 className="text-3xl font-bold mb-5">
Snack Inventory System
</h1>

<input
placeholder="Search Snack..."
className="input input-bordered mb-4 w-full"
onChange={(e)=>setSearch(e.target.value)}
/>

<SnackForm
refresh={fetchSnacks}
editSnack={editSnack}
setEditSnack={setEditSnack}
/>

<SnackTable
snacks={filtered}
refresh={fetchSnacks}
setEditSnack={setEditSnack}
/>

</div>

)
}

export default App