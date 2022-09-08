import Table from './Table'
import Form from './Form'
import axios from 'axios'
import { useState, useEffect } from "react"
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'


function App() {

  const defaultMovement = {
    'security_movement_type': "transfer",
    'buyer': '',
    'seller': '',
    'no_of_units': '1',
    'price_per_unit': '2'
  }

  // Is user creating?
  const [formActivated, setFormActivated] = useState(false)
  const [formType, setFormType] = useState('create')
  const [title, setTitle] = useState('Security movements')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [movement, setMovement] = useState(defaultMovement)

  const create = () => {
    setMovement(defaultMovement)
    setFormType('create')
    setFormActivated(true)
    setTitle('Create Data')
  }

  const update = (movement_id) => {
    const targetMovement = data.filter((movement, _) => movement.id === movement_id)[0]
    setMovement(targetMovement)
    setFormType('update')
    setFormActivated(true)
    setTitle('Update Data')
  }

  const submit = (requestData) => {

    console.log(requestData)

    if (formType === 'create') {
      axios.post('/api/v1/movements/create/', requestData)
        .then(res => {
          // TODO: cache and re-validation improvement is needed
          setData(data => [...data, res.data])
          setTitle('Security movements')
          setFormActivated(false)
          alert('Data created!')
        })
    }

    if (formType === 'update') {
      axios.put(`/api/v1/movements/update/${requestData.id}/`, requestData)
        .then(res => {
          // TODO: cache and re-validation improvement is needed
          // setData(data => [...data, res.data])
          setData(data => data.map(obj =>
                            obj.id === requestData.id ? requestData : obj))
          console.log(res)
          setTitle('Security movements')
          setFormActivated(false)
          alert('Data updated!')
        })
    }
  }

  const deleteData = (movement_id) => {

    confirmAlert({
      title: 'Delete data',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.delete(`/api/v1/movements/delete/${movement_id}/`)
            .then(res => {
              // TODO: cache and validation are needed in future
              setData(data => data.filter((movement, _) => movement.id !== movement_id))
              alert('Data Deleted!')
            })
          }
        },
        {
          label: 'No',
          onClick: () => 0
        }
      ]
    });
  }

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('/api/v1/movements/');
        setData(response)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="App container px-5 py-10 mx-auto">
      {loading && <div className="text-4xl text-center mb-20">Loading</div>}
      {!loading && 
        <div>
          <div className="text-4xl text-center mb-20">{title}</div>
          <div className="w-2/3 mx-auto">
            {
              // Conditional rendering based on form activation state
              formActivated ?
                <div>
                  <Form submit={submit} movement={movement}/>
                </div>
                :
                <div>
                  <button 
                      onClick={create}
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-5">
                    Create
                  </button>      
                  <Table movements={data} deleteData={deleteData} update={update}/> 
                </div>
            }
          </div>
        </div>
      }
    </div>
  );
}

export default App;
