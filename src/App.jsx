import { useState } from 'react'
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import data from './data';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const npage = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(npage).keys()].map((num) => num + 1);

  
  const totalRecords = data.slice(firstIndex, lastIndex);

  const prevHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextHandler = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  

  return (
    <Box
      sx={{
        width: '100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#538cd6',
      }}
    >
      <table
        style={{
          borderCollapse: 'collapse',
          width: '80%',
          border: '1px solid #ddd',
          color: 'text',
        }}
      >
        <thead >
          <tr
            style={{
              borderBottom: '1px solid #ddd',
              color: 'text',
              // width: '250px',
              height: '7vh',
            }}
          >
            <th
              style={{
                borderRight: '1px solid #ddd',
                width: '100px',
              }}
            >
              ID
            </th>
            <th style={{ borderRight: '1px solid #ddd' }}>Name</th>
            <th style={{ borderRight: '1px solid #ddd' }}>Username</th>
            <th style={{ borderRight: '1px solid #ddd' }}>Email</th>
            {/* <th style={{ borderRight: '1px solid #ddd' }}>Street</th>
            <th style={{ borderRight: '1px solid #ddd' }}>Suite</th>
            <th style={{ borderRight: '1px solid #ddd' }}>City</th>
            <th style={{ borderRight: '1px solid #ddd' }}>Zipcode</th>
            <th style={{ borderRight: '1px solid #ddd' }}>Latitude</th>
            <th>Longitude</th> */}
          </tr>
        </thead>
        <tbody >
          {totalRecords.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ borderRight: '1px solid #ddd' }}>{item.id}</td>
              <td style={{ borderRight: '1px solid #ddd' }}>{item.name}</td>
              <td style={{ borderRight: '1px solid #ddd' }}>{item.username}</td>
              <td style={{ borderRight: '1px solid #ddd' }}>{item.email}</td>
              {/* <td style={{ borderRight: '1px solid #ddd', height: '7vh' }}>
                {item.address.street}
              </td>
              <td style={{ borderRight: '1px solid #ddd' }}>
                {item.address.suite}
              </td>
              <td style={{ borderRight: '1px solid #ddd' }}>
                {item.address.city}
              </td>
              <td style={{ borderRight: '1px solid #ddd' }}>
                {' '}
                {item.address.zipcode}
              </td>
              <td style={{ borderRight: '1px solid #ddd' }}>
                {item.address.geo.lat}
              </td>
              <td>{item.address.geo.lng}</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <Box
        sx={{
          marginTop: '2%',
          minWidth: '250px',

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '5%',
        }}
      >
        <Button
          sx={{
            background: '#00abc3',
            color: 'black',
            width: 'auto',
          }}
          onClick={() => prevHandler(numbers)}
        >
          Prev
        </Button>

        {numbers.map((numb) => (
          <Typography
            key={numb}
            sx={{
              display: 'inline-block',
              cursor: 'pointer',
              padding: '5px',
              borderRadius: '5px',
              marginLeft: '5px',
              backgroundColor: currentPage === numb ? '#00abc3' : 'transparent',
              color: currentPage === numb ? 'white' : 'black',
            }}
            onClick={() => setCurrentPage(numb)}
          >
            {numb}
          </Typography>
          ))}       

        <Button
          sx={{
            background: '#00abc3',
            color: 'black',
            width: 'auto',
          }}
          onClick={() => nextHandler(numbers)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default App;
