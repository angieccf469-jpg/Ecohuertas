import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";
export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <Header title="EcoHuerta 🌿" subtitle="Cultiva, aprende y disfruta lo natural" />

      <section className="grid md:grid-cols-3 gap-4 w-full max-w-5xl">
        <Card title="Tomate" description="Rojo, jugoso y con actitud. Perfecto para salsas, ensaladas o un buen jugo refrescante." />
        <Card title="Lechuga" description="Fresca, ligera y crujiente. Ideal para acompañar cualquier plato o darle vida a una ensalada."  />
        <Card title="Zanahoria" description="Color brillante y sabor dulce. Buena para la vista, pero mejor aún para el paladar." />
      </section>

      <Counter />
   
    </main>


  );
}