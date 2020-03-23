import * as React from 'react';
import '../../App.css';
import axios from 'axios';
import { IStackStyles, Stack } from 'office-ui-fabric-react';
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';

const stackStyles: IStackStyles = {
    root: {
        padding: 20
    }
};
export interface IUsersState {
    id? : number;
    name: string;
    username: string;
    email: any;
    phone: string;
    website: string;
    users: user[];
    loading: any;
}

export interface UsersProps {

}

export type user = {
    id: number;
    name: string;
    username: string;
    email: any;
    phone: string;
    website: string;
    key?: number;
}

class UsersTable extends React.Component<UsersProps, IUsersState> {
    constructor(props: UsersProps) {
        super(props);

        this.state = {
            name: " ",
            username: " ",
            email: " ",
            phone: " ",
            website: " ",
            users: [],
            loading: false
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res => {
            const usersData = res.data;
            console.log(usersData);
            this.setState({ users: usersData, loading:true });
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    public render() {
       // (this.props.id ) && this.getData();
        const { users, loading } = this.state;
        return (
            <div>
                {this.state.loading ? ( 
                    users.length == 0 ? <h1>The UserTable contains empty data</h1> :
                            <div className="user-table">
                                <Stack styles={stackStyles}>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>User Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Website</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.length > 0 && users.map(user =>
                                                <tr key={user.id}>
                                                    <td>{user.name}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.website}</td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </Stack>
                            </div>
 
                ) : (
                        <Spinner label="Loading ..." ariaLive="assertive" labelPosition="right" />
                    ) 
}
            </div>
            );
        }
    }

export default UsersTable;