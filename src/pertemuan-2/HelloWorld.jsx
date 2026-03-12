export default function HelloWorld(){
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01",
        Usia: "30"
    }

    return (
        <div>
            <h1>Hello World</h1>
             <img src="img/zora cantik.jpg" alt="logo" width="100%" />
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
             <UserCard 
	            nama="Ozora" 
	            nim="169412"
	            tanggal={new Date().toLocaleDateString()}
                usia= "30"
	          />

              <UserCard
                   nama= "Feona"
                   nim= "123456"
                   tanggal= "2026/12/03"
                   usia= "30"
                   />
              
                <UserCard {...propsUserCard}/>

                
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>Usia: {props.usia}</p>
        </div>
    )
}