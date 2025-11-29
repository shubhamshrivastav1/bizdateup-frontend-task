// src/forms/EditForm.jsx
import { useState } from "react";
import Input from "../components/Input";
import api from "../api/api";

export default function EditForm({ item, onSuccess }) {
  const [form, setForm] = useState({ ...item });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.put(`/submissions/${item.id}`, form);
      setMsg("Updated successfully");
      if (onSuccess) onSuccess();
      setTimeout(() => setMsg(""), 2500);
    } catch (err) {
      console.error(err);
      setMsg("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-3"
    >
      <Input
        label="Full name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        label="Phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
      <Input
        label="Company"
        name="company"
        value={form.company || ""}
        onChange={handleChange}
      />
      <Input
        label="Role"
        name="role"
        value={form.role}
        onChange={handleChange}
      />
      <Input
        label="Skills / Talents"
        name="hireCount"
        value={form.hireCount}
        onChange={handleChange}
      />

      <div className="mt-4 md:col-span-2 flex items-center gap-3">
        <button
          disabled={loading}
          className="px-4 py-2 bg-black text-white rounded text-sm"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
        {msg && <span className="text-sm text-green-700">{msg}</span>}
      </div>
    </form>
  );
}
