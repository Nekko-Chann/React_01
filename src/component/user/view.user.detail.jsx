import { Drawer } from "antd"

const ViewUserDetail = (props) => {

    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

    return (
        <Drawer
            title="View User"
            onClose={() => {
                setDataDetail()
                setIsDetailOpen()
            }}
            open={isDetailOpen}
        >
            {dataDetail ?
                <>
                    <p>Id: {dataDetail._id}</p>
                    <br />
                    <p>Full Name: {dataDetail.fullName}</p>
                    <br />
                    <p>Email: {dataDetail.email}</p>
                    <br />
                    <p>Phone number: {dataDetail.phone}</p>
                    <br />
                </>
                :
                <>
                    <p>Không có dữ liêu</p>
                </>
            }
        </Drawer>
    )
}

export default ViewUserDetail;