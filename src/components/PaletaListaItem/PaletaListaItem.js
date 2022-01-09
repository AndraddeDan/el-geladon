import './PaletaListaItem.css';

function PaletaListaItem() {
	const removeButton = (canRender, index) =>
		Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);

	const badgeCounter = (canRender, index) =>
		Boolean(canRender) && (<span className="PaletaListaItem__badge"> {paletasSelecionadas[index]} </span>);

	return (
			<div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
				{badgeCounter(paletasSelecionadas[index], index)}
				<div>
					<div className="PaletaListaItem__titulo"> { paleta.titulo } </div>
					<div className="PaletaListaItem__preco">R$ { paleta.preco.toFixed(2) }</div>
					<div className="PaletaListaItem__descricao"> { paleta.descricao }  </div>
					<div className="PaletaListaItem__acoes Acoes">
						<button className={`Acoes__adicionar ${!paletasSelecionadas[index] && "Acoes__adicionar--preencher"}`} onClick={() => adicionarItem(index)}>adicionar</button>
						{removeButton(paletasSelecionadas[index], index)}
					</div>
				</div>
				<img className="PaletaListaItem__foto" src={paleta.foto} alt={`Paleta de ${paleta.sabor}`} />
			</div>
	);
}

export default PaletaListaItem;
