import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './NavMenu.css';

class Sidebar extends Component {
    
    render(){
         return(
            <div>
            <Nav
                selectedKey=""
                selectedAriaLabel="Selected"
                ariaLabel="Nav basic example"
                className="d-inline-block"
                styles={{
                    root: {
                        width: 208,
                        height: '100%',
                        display: 'inline-block',
                        boxSizing: 'border-box',
                        border: '1px solid #eee',
                        overflowY: 'auto'
                    }
                }}
                groups={[
                    {
                        links: [
                            {
                                name: '',
                                url: '',
                                icon: 'CollapseMenu',
                                key: 'key0'
                            },
                            {
                                name: 'Dashboard',
                                url: '/',
                                icon: 'ViewDashboard',
                                key: 'key1',
                                links:[
                                    {
                                        name:'Incident Triage',
                                        url:'/triages',
                                        key:'triages'
                                    }
                                ]
                            },
                            {
                                name: 'Settings',
                                url: '/',
                                icon: 'Settings',
                                key: 'key2'
                            },
                            {
                                name: 'Administration',
                                url: '',
                                icon: 'PlayerSettings',
                                key: 'key3',
                                links: [
                                    {
                                        name: 'User Management',
                                        url: '',
                                        key: 'key4',
                                        links: [
                                            {
                                                name: 'Add User',
                                                url: '/adduser',
                                                key: 'key5',
                                            },
                                            {
                                                name: 'Delete User',
                                                url: '/deleteuser',
                                                key: 'key6',
                                            },
                                            {
                                                name: 'Assign Customer',
                                                url: '/assigncustomer',
                                                key: 'key7',
                                            },
                                            {
                                                name: 'Update User',
                                                url: '/updateuser',
                                                key: 'key8',
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Customer Management',
                                        url: '',
                                        key: 'key9',
                                        links: [
                                            {
                                                name: 'Customers',
                                                url: '/customers',
                                                key: 'key10',
                                            },
                                            {
                                                name: 'Add Customer',
                                                url: '/addcustomer',
                                                key: 'key11',
                                            }
                                        ]
                                    }
                                ],
                                isExpanded: false
                                
                            },
                            {
                                name: 'Information',
                                url: '/',
                                icon: 'Info',
                                key: 'key12'
                            }
                        ]
                    }
                ]}
            />
        </div>

         );
     }
}

export default Sidebar;