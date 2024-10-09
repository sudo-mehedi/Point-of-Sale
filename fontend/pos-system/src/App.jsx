import { da } from "@faker-js/faker";
import Navbar from "./components/shared/Navbar"
import { productList } from "./services/Products"
import { useState } from "react";
function App() {

  const [cart, setCart] = useState([]);
  const [products, setProduct] = useState(productList());


  const add = (id) => {
    productList().forEach((data) => {



      if (data.id === id) {
        setCart([...cart, data]);
      }
    })



  }

  const handleSearch = (input) => {

  }

  return (
    <>
      <Navbar />
      <div className="ml-6 mr-6 mt-1 mb-1 flex join">
        <input type="text" placeholder="Search Product Here" className="input input-bordered w-full join-item focus:outline-none" /> <button className="btn btn-primary join-item">Search</button>
      </div>
      <div className="flex gap-2 ml-6 mr-6">
        <div className="flex-auto w-80 bg-base-300 h-96 relative box-border overflow-auto">


          <div className="">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Buying</th>
                  <th>Selling</th>
                  <th>Add</th>
                </tr>
              </thead>
              <tbody>

                {products && products.map((data, i) => {
                  return <>

                    <tr key={i}>
                      <th>{data.id}</th>
                      <td className="max-w-40">{data.name}</td>
                      <td>{data.quantity}</td>
                      <td>{data.buying}</td>

                      <td>{data.selling}</td>
                      <td><button onClick={() => add(data.id)} className="btn btn-primary btn-sm">+</button></td>

                    </tr>
                  </>

                })}


              </tbody>
            </table>
          </div>




        </div>
        <div className="flex-auto h-96 w-20 bg-base-200 overflow-auto">



          <div className="">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Selling</th>
                </tr>
              </thead>
              <tbody>

                {cart && cart.map((data, i) => {

                  return <>

                    <tr key={i}>
                      <th>{data.id}</th>
                      <td className="max-w-40">{data.name}</td>
                      <td>
                        <input type="text" className="input input-sm w-16" value={data.quantity} />
                      </td>
                      <td>{data.buying}</td>


                    </tr>
                  </>

                })}


              </tbody>
            </table>
          </div>




        </div>



      </div >
    </>
  )
}

export default App
