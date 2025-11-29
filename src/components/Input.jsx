export default function Input({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
        className="w-full p-3 rounded-lg border border-gray-300 focus:border-black outline-none text-sm"
      />
    </div>
  );
}
