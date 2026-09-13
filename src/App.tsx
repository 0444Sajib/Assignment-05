import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";

import type { Technology } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology to stack
  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack([...stack, technology]);
  };

  // Remove technology from stack
  const removeFromStack = (id: string) => {
    setStack(
      stack.filter((technology) => technology.id !== id)
    );
  };

  return (
    <>
      <Navbar />

      <Hero />

      {/* Technologies Section */}
      <section id="technologies" className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore Technologies
            </h2>

            <p className="text-gray-500 mt-2">
              Choose the technologies you want to add to your development stack.
            </p>
          </div>

          {/* Content */}
          {loading ? (
            <p className="text-gray-500">
              Loading technologies...
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Technology Cards */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">

                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={addToStack}
                  />
                ))}

              </div>

              {/* Your Stack */}
              <StackSidebar
                stack={stack}
                onRemove={removeFromStack}
              />

            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default App;