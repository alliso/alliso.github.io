import React from 'react'
import {TextField, Grid, Button} from '@material-ui/core'

interface IProps {

}
interface IState {
    email: any
    password: any
}

class AdminDefault extends React.PureComponent<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {email:'email@example.com', password:''}

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleEmailChange(e: any) {
        this.setState({email: e.target.value})
    }
    handlePasswordChange(e: any) {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <TextField
                    label="Email"
                    onChange={this.handleEmailChange}
                    margin="normal"
                    variant="outlined"
                    value={this.state.email}
                />
                <TextField
                    label="Password"
                    onChange={this.handlePasswordChange}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained" color="primary" >
                    Login
                </Button>
            </Grid>
        )
    }
}


export default AdminDefault