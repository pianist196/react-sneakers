import Card from './components/Card'
import Header from "./components/Header";
import Drawer from './components/Drawer'

const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageURL: '/img/sneakers/image-1.jpg'},
    {title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageURL: '/img/sneakers/image-2.jpg'},
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageURL: '/img/sneakers/image-3.jpg'},
    {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageURL: '/img/sneakers/image-4.jpg'},
    {title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageURL: '/img/sneakers/image-5.jpg'},
    {title: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imageURL: '/img/sneakers/image-6.jpg'},
    {title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageURL: '/img/sneakers/image-7.jpg'},
    {title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageURL: '/img/sneakers/image-8.jpg'},
]

function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <img width={14} height={14} src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {arr.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageURL={obj.imageURL}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
