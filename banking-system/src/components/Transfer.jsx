import { Button, FormControl, Grid, Input, InputLabel, MenuItem, Paper, Select } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Transfer = ({ users }) => {

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [amount, setAmount] = useState('')
    const history = useHistory()

    const handleTransfer = () => {
        axios.post('https://arcane-depths-62061.herokuapp.com/users/transfer', {
            from: from,
            to: to,
            amount: amount
        })
            .then(res => history.go(0))
            .catch(err => console.log(err))
    }

    return (
        <Grid container spacing={3}>
            <Grid style={{ margin: '2%' }} md={6} xs={12} item>
                <form>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">From</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="from"
                            value={from}
                            onChange={(e) => {
                                setFrom(e.target.value)
                            }}
                            name="from"
                        >
                            {users.map(user => (
                                <MenuItem value={user.name}>{user.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl style={{ marginTop: '3%' }} fullWidth>
                        <InputLabel id="demo-simple-select-label">To</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="to"
                            name="to"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                        >
                            {users.map(user => (
                                <MenuItem value={user.name}>{user.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl style={{ marginTop: '3%' }} fullWidth>
                        <InputLabel id="demo-simple-select-label">amount</InputLabel>
                        <Input
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="amount"
                            name="amount"

                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </FormControl>

                    <FormControl style={{ marginTop: '3%' }} fullWidth>
                        <Button type='button' onClick={handleTransfer}>Transfer</Button>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}

export default Transfer
