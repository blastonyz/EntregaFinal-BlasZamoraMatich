import { Item } from "../Item/Item";
import './ItemList.css'


export const ItemList = ({productos}) => {
    return(
        <div className="Lista">
            {productos.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
    )
}
