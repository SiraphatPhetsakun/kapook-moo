import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AuthPage: React.FC = () => {
  return (
    <Box
      sx={{
        border: '1px solid black',
        p: 2,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        m: 2,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">Kapook Moo</Typography>
      </div>
      <TextField
        sx={{ width: 'auto' }}
        required
        id="outlined-required"
        label="Email"
      />
      <TextField
        sx={{ width: 'auto' }}
        required
        id="outlined-required"
        label="Password"
      />
      <Button variant="contained">Login</Button>
    </Box>
  )
}

export default AuthPage
