import React from 'react'

import Error from './Error'
import Loading from './Loading'
import NotLoaded from './NotLoaded'
import NoUsers from './NoUsers'

class List extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://randomuser.me/api')
            .then(r => r.json())
            .then(data => this.setState({ users: data.results }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div>
                {
                    this.state.isError ?
                        <Error />
                        :
                        this.state.isLoading ?
                            <Loading />
                            :
                            !this.state.users ?
                                <NotLoaded />
                                :
                                this.state.users.length === 0 ?
                                    <NoUsers />
                                    :
                                    JSON.stringify(this.state.users)
                }
            </div>
        )
    }
}
export default List