import Navbar from "../components/Navbar";
import api from "../api/api";
import Card from "../components/Card";
import EditForm from "../forms/EditForm";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState("dashboard"); // "dashboard" | "edit"
  const [editingItem, setEditingItem] = useState(null);

  const fetchData = async () => {
    const res = await api.get("/submissions");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#FFF9EA] min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-8 flex gap-8">
        {/* LEFT SIDEBAR */}
        <aside className="w-56 bg-[#FFF3B0] rounded-md py-4 px-3 space-y-3">
          <button
            onClick={() => setTab("dashboard")}
            className={`w-full text-xs font-medium py-2 rounded-md ${
              tab === "dashboard" ? "bg-[#FAD24A]" : "bg-[#FFE9A8]"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setTab("edit")}
            className={`w-full text-xs font-medium py-2 rounded-md ${
              tab === "edit" ? "bg-[#FAD24A]" : "bg-[#FFE9A8]"
            }`}
          >
            Edit
          </button>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="flex-1">
          {/* SUBMISSION VIEW */}
          {tab === "dashboard" && (
            <>
              <h1 className="text-3xl font-bold mb-8">Submission</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </>
          )}

          {/* EDIT SUBMISSION VIEW */}
          {tab === "edit" && (
            <>
              <h1 className="text-3xl font-bold mb-8">Edit Submission</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    showButtons
                    onEdit={() => setEditingItem(item)}
                    onDelete={async () => {
                      await api.delete(`/submissions/${item.id}`);
                      fetchData();
                    }}
                  />
                ))}
              </div>

              {editingItem && (
                <div className="mt-8 bg-white rounded-md p-6 shadow">
                  <EditForm
                    item={editingItem}
                    onSuccess={() => {
                      fetchData();
                      setEditingItem(null);
                    }}
                  />
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
