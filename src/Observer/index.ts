
interface Observer {
  actualizar(estado: string): void;
}

class Equipo {
  private estado: string;
  private observers: Observer[] = [];

  constructor(nombreEquipo: string, tipoEquipo: string, estadoInicial: string) {
    this.estado = estadoInicial;
    this.actualizarEstado(estadoInicial);
  }

  agregarObservador(observer: Observer): void {
    this.observers.push(observer);
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.actualizarEstado(nuevoEstado);
  }

  private actualizarEstado(nuevoEstado: string): void {
    console.log(`El equipo ha cambiado de estado a "${nuevoEstado}"`);
    this.observers.forEach((observer) => observer.actualizar(nuevoEstado));
  }
}

class Soporte implements Observer {
  actualizar(estado: string): void {
    console.log(
      `El soporte ha sido notificado del cambio de estado a "${estado}"`
    );
  }
}


const soporte = new Soporte();
const equipo = new Equipo("netbook hp", "portatil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparacion");
