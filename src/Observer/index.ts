interface Observer {
  actualizar(equipo: string, estado: string): void;
}

class Equipo {
  private estado: string;
  private observers: Observer[] = [];
  private nombre: string;

  constructor(nombreEquipo: string, tipoEquipo: string, estadoInicial: string) {
    this.nombre = nombreEquipo;
    this.estado = estadoInicial;
  }

  agregarObservador(observer: Observer): void {
    this.observers.push(observer);
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    this.observers.forEach(observer => observer.actualizar(this.nombre, this.estado));
  }
}

class Soporte implements Observer {
  actualizar(equipo: string, estado: string): void {
    console.log(`Soporte notificado: ${equipo.charAt(0).toUpperCase() + equipo.slice(1)} ha cambiado su estado a ${estado}`);
  }
}


const soporte = new Soporte();
const equipo = new Equipo("notebook hp", "portatil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
