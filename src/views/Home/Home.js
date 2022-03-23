import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import AdicionaEditaPaletaModal from "components/AdicionaEditaPaletaModal/AdicionaEditaPaletaModal";
import Navbar from "components/Navbar/Navbar";
import { ActionMode } from "constants/index";
import { useState } from "react";

function Home() {
    const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] = useState(false);
    const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
    const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

    const manipulaAcoes = (acao) => {
        const novaAcao = modoAtual === acao ? ActionMode.NORMAL : acao;
        setModoAtual(novaAcao);
    }

  return (
    <div className="Home">
        <Navbar
            mode={modoAtual}
            createPaleta={() => setCanShowAdicionaPaletaModal(true)}
            updatePaleta={() =>  manipulaAcoes(ActionMode.ATUALIZAR)} />
        <div className="Home__container">
            <PaletaLista 
                mode={modoAtual}
                paletaCriada={paletaParaAdicionar} />
            {
            canShowAdicionaPaletaModal &&
            <AdicionaEditaPaletaModal
                closeModal={() => setCanShowAdicionaPaletaModal(false)}
                onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
                />
            }
        </div>
    </div>
  );
}

export default Home;
