export class ChampionsService {
  private champions: Champions[] = [];
  constructor() {}
  async getChampions() {
    // Fetch
    this.champions = fetch("http://");  
    return this.heroes;
  }
}
