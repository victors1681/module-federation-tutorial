import React from "react";
import Link from "next/link"

const cardStyle = { display: "flex", width: "220px", border: "1px solid gray", flexDirection: "column", alignItems: "center" }

export const Catalog = () => {
    const [list, setList] = React.useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch("https://qa.vroom.com/vcm-api/listings?zip=77002&price=10999-87000&sort=55&geofence=true")
            const data = await response.json();
            setList(data.results.data);
        }catch (err) {
            console.error(err)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return <div>
        <Link href="/">Go Back</Link>
        <div style={{ display: "flex", width: "750px", gap: "20px", flexWrap: "wrap", marginTop: "25px" }}>
            {list.map(d => {
                return <div key={d.vin} style={cardStyle}>
                    <p>{d.make} {d.model} {d.year}</p>
                    <img width={200} src={`https://images.carstory.com/${d.id}/1/t/690x-`}></img>
                </div>
            })}
        </div>
    </div>
}
export default Catalog;