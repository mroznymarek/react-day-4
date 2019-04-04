import React from 'react'

import Error from './Error'
import Loading from './Loading'
import NotLoaded from './NotLoaded'
import NoUsers from './NoUsers'
import Results from './Results'

const List = (props) => (
    <div>
        {
            props.props.isError ?
                <Error />
                :
                props.props.isLoading ?
                    <Loading />
                    :
                    !props.props.users ?
                        <NotLoaded />
                        :
                        props.props.users.length === 0 ?
                            <NoUsers />
                            :
                            <Results
                                data={props.props.users}
                            />
        }
    </div>
)

export default List