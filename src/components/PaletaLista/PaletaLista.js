import { paletas } from "mocks/paletas.js";
import "./PaletaLista.css";
import { useState } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";

function PaletaLista() {
	const [paletasSelecionadas, setQuantidade] = useState({});

	const adicionarItem = (paletaIndex) => {
		const paleta = { [paletaIndex]: (paletasSelecionadas[paletaIndex] || 0) +1 }
		setQuantidade({ ...paletasSelecionadas, ...paleta});
	}

	const removerItem = (paletaIndex) => {
		const paleta = { [paletaIndex]: Number(paletasSelecionadas[paletaIndex] || 0) -1 }
		setQuantidade({ ...paletasSelecionadas, ...paleta});
	}

	return (
		<div className="PaletaLista">
			{paletas.map((paleta, index) => <PaletaListaItem /> )}
		</div>
	);
}

export default PaletaLista;
