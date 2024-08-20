import './MenuResto.css'

function MenuResto(){
    const styleMenuItem = {
        backgroundColor : "#333",
        padding: "10px",
        color : "yellow",
        borderRadius: "15px",
        width: "400px",
        marginBottom : "5px"
    }

    const isMakanan = true;

    const menu = [
        {nama : 'nasi bakar 🍙 ', harga :'25.000'},
        {nama : 'mie ayam 🐔 ',harga : '18.000'},
        {nama : 'ayam goreng 🐤', harga : '12.000'}
    ]

    return (
        <>
            {
                menu.map((item,index)=>{
                    return(
                         <div style={styleMenuItem} key={index}>
                            <div><b>Nama Menu : </b><em> {item.nama}  </em></div>
                            <div><b>Harga :</b> <em>{item.harga} 💰</em></div>

                            {(isMakanan == true ? (<div>Tipe : Makanan</div>) : (<div>Tipe : Minuman</div>))}
                        </div>
                    )
                })
            }
        </>
        
       
    )
}

export default MenuResto