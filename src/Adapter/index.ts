class InventarioViejo {
  private equipos: { nombre: string; categoria: string; estado: string }[] = [];

  public insertarEquipo(nombre: string, categoria: string, estado: string): void {
    this.equipos.push({ nombre, categoria, estado });
  }

  public obtenerEquipos(): { nombre: string; categoria: string; estado: string }[] {
    return this.equipos;
  }
}

class AdaptadorInventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  public Agregaequipo(nombre: string, categoria: string, estado: string): void {
    this.inventarioViejo.insertarEquipo(nombre, categoria, estado);
  }

  public ListarEquipos(): { nombre: string; categoria: string; estado: string }[] {
    return this.inventarioViejo.obtenerEquipos();
  }
}

const inventarioViejo = new InventarioViejo();
const adapter = new AdaptadorInventario(inventarioViejo);
adapter.Agregaequipo("router cisco","red","disponible");
console.log(adapter.ListarEquipos());
