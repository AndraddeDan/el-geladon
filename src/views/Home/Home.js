import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import AdicionaEditaPaletaModal from "components/AdicionaEditaPaletaModal/AdicionaEditaPaletaModal";
import Navbar from "components/Navbar/Navbar";
import { ActionMode } from "constants/index";
import { useState } from "react";
import DeletaPaletaModal from "components/DeletaPaletaModal/DeletaPaletaModal";

function Home() {
    const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] = useState(false);
    const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
    const [paletaParaEditar, setPaletaParaEditar] = useState();
    const [paletaParaDeletar, setPaletaParaDeletar] = useState();
    const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

    const [paletaEditada, setPaletaEditada] = useState();
    const [paletaRemovida, setPaletaRemovida] = useState();

    const handleActions = (action) => {
        const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
        setModoAtual(novaAcao);
    }

    const handleCloseModal = () => {
        setCanShowAdicionaPaletaModal(false);
        setPaletaParaAdicionar();
        setPaletaParaDeletar();
        setPaletaParaEditar();
        setModoAtual(ActionMode.NORMAL);
    }

    const handleDeletePaleta = (paletaToDelete) => {
        setPaletaParaDeletar(paletaToDelete);
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
                deletePaleta={() => handleActions(ActionMode.DELETAR)}
                updatePaleta={() =>  handleActions(ActionMode.ATUALIZAR)} />
            <div className="Home__container">
                <PaletaLista 
                    mode={modoAtual}
                    paletaCriada={paletaParaAdicionar}
                    paletaEditada={paletaEditada}
                    paletaRemovida={paletaRemovida}
                    deletePaleta={handleDeletePaleta}
                    updatePaleta={handleUpdatePaleta} />
                {
                    canShowAdicionaPaletaModal &&
                    <AdicionaEditaPaletaModal
                        mode={modoAtual}
                        paletaToUpdate={paletaParaEditar}
                        onUpdatePaleta={(paleta) => setPaletaEditada(paleta)}
                        closeModal={handleCloseModal}
                        onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
                        />
                }
                {
                    paletaParaDeletar &&
                    <DeletaPaletaModal
                        paletaParaDeletar={paletaParaDeletar}
                        closeModal={handleCloseModal}
                        onDeletePaleta={(paleta) => setPaletaRemovida(paleta)}
                        />
                }
            </div>
        </div>
    );
}

export default Home;
