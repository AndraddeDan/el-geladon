import { paletas } from "mocks/paletas.js";

export const server = {
  get: (rota) => mapeadorDeRotas[rota] ?? simulador(paletas),
  post: (rota) => mapeadorDeRotas[rota] ?? simulador(null, true),
  put: (rota) => mapeadorDeRotas[rota] ?? simulador(null, true),
  delete: (rota) => mapeadorDeRotas[rota] ?? simulador(null, true),
};

function simulador(resposta, comErro = false, tempo = 2000) {
  return new Promise(function (resolve, reject) {
		const retorno = comErro ? reject(new Error("Sem resposta")) : resolve(resposta);
		setTimeout(retorno, tempo);
  });
}

const mapeadorDeRotas = {
  "/api/paletas": simulador(paletas),
};
