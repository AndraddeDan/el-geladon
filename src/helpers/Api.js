const PaletaContext = {
  paletaEndpoint: () => `${Api.baseUrl}/paletas`,
  paletaLista: () => `${PaletaContext.paletaEndpoint()}/find-paletas`,
  paletaById: (id) => `${PaletaContext.paletaEndpoint()}/find-paleta/${id}`,
  createPaleta: () => `${PaletaContext.paletaEndpoint()}/create`,
  updatePaletaById: (id) => `${PaletaContext.paletaEndpoint()}/update/${id}`,
  deletePaletaById: (id) => `${PaletaContext.paletaEndpoint()}/delete/${id}`,
};

export const Api = {
  baseUrl: "http://localhost:4000",
  ...PaletaContext,
};
