import type { Technology } from "../types";

type StackSidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="bg-white rounded-2xl border border-gray-200 p-5">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="px-3 py-1 rounded-full bg-gray-100 text-sm">
          {stack.length}
        </span>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <p className="text-sm text-gray-500">
          No technologies added yet.
        </p>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="space-y-3">

            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
              >
                <div className="flex items-center gap-3">

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-8 h-8"
                  />

                  <span className="text-sm font-medium">
                    {technology.name}
                  </span>

                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-5 py-2.5 rounded-lg border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
}

export default StackSidebar;



