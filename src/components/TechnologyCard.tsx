import type { Technology } from "../types";

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
};

function TechnologyCard({
  technology,
  onAdd,
}: TechnologyCardProps)  {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">

      {/* Top Part */}
      <div className="flex items-center justify-between">

        <img
          src={technology.icon}
          alt={technology.name}
          className="w-12 h-12"
        />

        <span className="px-3 py-1 rounded-full text-sm bg-violet-100 text-violet-600">
          {technology.badge}
        </span>

      </div>

      {/* Technology Name */}
      <h3 className="text-xl font-bold mt-5 text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 mt-2 text-sm leading-6">
        {technology.description}
      </p>

      {/* Category & Difficulty */}
      <div className="flex justify-between mt-5 text-sm">

        <span className="text-gray-500">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

      </div>

      {/* Rating */}
      <div className="mt-4 text-sm text-gray-700">
        ⭐ {technology.rating}
      </div>

      {/* Add to Stack Button */}
      <button
  onClick={() => onAdd(technology)}
  className="w-full h-9 rounded-lg bg-[#0A0F1D] text-white text-sm font-medium"
>
  Add to Stack
</button>

    </div>
  );
}

export default TechnologyCard;
