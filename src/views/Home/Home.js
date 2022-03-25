import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import AdicionaEditaPaletaModal from "components/AdicionaEditaPaletaModal/AdicionaEditaPaletaModal";
import Navbar from "components/Navbar/Navbar";
import { ActionMode } from "constants/index";
import { useState } from "react";

function Home() {
    const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] = useState(false);
    const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
    const [paletaParaEditar, setPaletaParaEditar] = useState();
    const [paletaParaDeletar, setPaletaParaDeletar] = useState();
    const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

    const handleActions = (action) => {
        const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
        setModoAtual(novaAcao);
    }

    const handleCloseModal = () => {
        setCanShowAdicionaPaletaModal(false);
        setPaletaParaAdicionar();
        setPaletaParaDeletar();
        setPaletaParaEditar();
    }

    const handleDeletePaleta = (paletaToDelete) => {
        setPaletaParaDeletar(paletaToDelete);
        setCanShowAdicionaPaletaModal(true);
    }

    const handleUpdatePaleta = (paletaToUpdate) => {
        setPaletaParaEditar(paletaToUpdate);
        setCanShowAdicionaPaletaModal(true);
    }

    return (
        <div className="Home">
            <Navbar
                mode={modoAtual}
                createPaleta={() => setCanShowAdicionaPaletaModal(true)}
                updatePaleta={() =>  handleActions(ActionMode.ATUALIZAR)} />
            <div className="Home__container">
                <PaletaLista 
                    mode={modoAtual}
                    paletaCriada={paletaParaAdicionar}
                    deletePaleta={handleDeletePaleta}
                    updatePaleta={handleUpdatePaleta} />
                {
                    canShowAdicionaPaletaModal &&
                    <AdicionaEditaPaletaModal
                        mode={modoAtual}
                        paletaToUpdate={paletaParaEditar}
                        closeModal={handleCloseModal}
                        onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
                        />
                }
            </div>
        </div>
    );
}

export default Home;
