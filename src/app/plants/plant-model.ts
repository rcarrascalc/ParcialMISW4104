
export class PlantModel {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: number;
  clima: Date;
  sustrato_siembra: number;

  constructor({
    id,
    nombre_comun,
    nombre_cientifico,
    tipo,
    altura_maxima,
    clima,
    sustrato_siembra
  }: PlantModel) {
    this.id=id;
    this.nombre_comun = nombre_comun;
    this.nombre_cientifico = nombre_cientifico;
    this.tipo = tipo;
    this.altura_maxima = altura_maxima;
    this.clima = clima;
    this.sustrato_siembra = sustrato_siembra;
  }
}
