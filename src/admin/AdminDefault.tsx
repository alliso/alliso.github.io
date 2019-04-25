import React from 'react'
import AdminLogin from './AdminLogin'


class AdminDefault extends React.PureComponent {
    constructor(props: any) {
        super(props)
        this.state = {email:'email@example.com', password:''}

        this.handleEmailChange = this.handleEmailChange.bind(this)
    }

    handleEmailChange(e: any) {
        this.setState({email: e.target.value})
    }

    render() {
        return (
            <div>
                <AdminLogin />
            </div>
        )
    }
}

export default AdminDefault