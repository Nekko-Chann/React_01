import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        console.log("Run useEffect 111")
        loadUser();
    }, [])

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }
    console.log("Run useEffect 000")

    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}
export default UserTable;