export class Candidat {
  //   _id: number;
  //   prenom: string;
  //   nom: string;

  constructor(
    private _id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {
    // this._id = _id;
    // this.prenom = prenom;
    // this.nom = nom;
  }
}
