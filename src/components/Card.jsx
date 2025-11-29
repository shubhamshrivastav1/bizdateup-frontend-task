// src/components/Card.jsx

const labelClass =
  "bg-white px-3 py-1 rounded text-xs font-semibold inline-block";
const valueClass =
  "block max-w-[140px] break-words leading-snug text-xs";

export default function Card({ item, showButtons, onEdit, onDelete }) {
  return (
    <div className="bg-[#FFE69A] rounded-md px-5 py-4 shadow-sm">
      {/* labels + values */}
      <div className="grid grid-cols-[110px,1fr] gap-y-2 mb-3">
        <span className={labelClass}>Full Name</span>
        <span className={valueClass}>{item.fullName || item.name}</span>

        <span className={labelClass}>Phone</span>
        <span className={valueClass}>{item.phone}</span>

        <span className={labelClass}>Email</span>
        <span className={valueClass}>{item.email}</span>

        <span className={labelClass}>Additional info</span>
        <span className={valueClass}>{item.info}</span>

        <span className={labelClass}>Roles</span>
        <span className={valueClass}>{item.role}</span>

        <span className={labelClass}>Budget</span>
        <span className={valueClass}>{item.budget}</span>

        <span className={labelClass}>Talents</span>
        <span className={valueClass}>{item.hireCount}</span>

        <span className={labelClass}>Persona</span>
        <span className={valueClass}>{item.persona}</span>
      </div>

      {/* Edit / Delete buttons (sirf Edit tab me) */}
      {showButtons && (
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="flex-1 bg-black text-white text-xs py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="flex-1 bg-black text-white text-xs py-1 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
