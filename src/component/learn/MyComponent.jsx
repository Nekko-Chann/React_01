/* 
  () => {}
  component = html + css + js  

  Sử dụng fragment

  Nếu biến dạng object thì phải sử dụng hàm convert JSON.stringify(biến)
*/
const MyComponent = () => {
    // const club = "Edan Nguyen"; // dùng được
    // const club = 25; //dùng được
    // const club = true;
    // const club = undefined;
    // const club = null;
    // const club = [1, 2, 3, 4, 5]
    const club = {
        name: "Edan Nguyen",
        age: 25,
        address: "Tran Cung, Ha Noi"
    }

    return (
        <>
            <p>{console.log("Ahihi!")}</p>
            <p>{JSON.stringify(club)} that la dep trai!!!</p>
            <p className="edan" style={{ borderRadius: "10px", color: "blue" }}>
                Edan that sieu nhan
            </p>
        </>

    );
}

export default MyComponent;