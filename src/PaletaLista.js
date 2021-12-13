import { paletas } from "mocks/paletas.js";
import "PaletaLista.css";

function PaletaLista() {
  return (
    <div className="PaletaLista">
		{paletas.map((paleta, index) => 
			<div className="PaletaListaItem" key={`PaletaListaItem${index}`}>
				<div>
				<div className="PaletaListaItem__titulo"> { paleta.titulo } </div>
				<div className="PaletaListaItem__preco">R$ { paleta.preco.toFixed(2) }</div>
				<div className="PaletaListaItem__descricao"> { paleta.descricao }  </div>
				<button className="PaletaListaItem__selecionar">selecionar</button>
				</div>
				<img className="PaletaListaItem__foto" src={paleta.foto} alt={`Paleta de ${paleta.sabor}`} />
			</div>
		)}
    </div>
  );
}

export default PaletaLista;
