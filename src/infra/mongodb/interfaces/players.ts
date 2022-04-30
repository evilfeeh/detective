export interface players {
  getPlayers: () => Promise<object>
  getPlayer: (id: string) => Promise<object>
  insertPlayer: (player: object) => Promise<any>
}
