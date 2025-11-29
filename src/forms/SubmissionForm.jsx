import { useState } from "react";
import api from "../api/api";
import Input from "../components/Input";

export default function SubmissionForm({ onSuccess }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "",
    budget: "",
    hireCount: "",
    persona: "",
    info: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const fields = [
    { name: "fullName", label: "Full name" },
    { name: "role", label: "What are these roles?" },
    { name: "phone", label: "Phone number" },
    { name: "budget", label: "What’s your budget?" },
    { name: "email", label: "Work email", type: "email" },
    {
      name: "hireCount",
      label: "How many talents are you looking to hire?",
    },
    { name: "info", label: "Any additional information?" },
    {
      name: "persona",
      label: "What persona best fits your requirements?",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await api.post("/submissions", form);
      setSuccess("Submitted successfully!");
      setForm({
        fullName: "",
        phone: "",
        email: "",
        role: "",
        budget: "",
        hireCount: "",
        persona: "",
        info: "",
      });
      if (onSuccess) onSuccess();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error(err);
      setSuccess("Error submitting. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#FFD93D] py-10">
      <div className="max-w-5xl mx-auto px-6 bg-[#FFD93D]">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Hire Talent
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {fields.map((f) =>
            f.name === "info" ? (
              <div key={f.name} className="md:col-span-2">
                <label className="block text-sm mb-1">{f.label}</label>
                <textarea
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded bg-white text-sm"
                  rows={3}
                />
              </div>
            ) : (
              <Input
                key={f.name}
                label={f.label}
                name={f.name}
                value={form[f.name]}
                onChange={handleChange}
                type={f.type || "text"}
              />
            )
          )}

          <button
            type="submit"
            disabled={submitting}
            className="md:col-span-2 bg-black text-white py-3 rounded-md text-sm font-semibold"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {success && (
          <p className="mt-3 text-sm text-green-700">{success}</p>
        )}
      </div>
    </section>
  );
}
