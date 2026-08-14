import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Plus, Search, Download, Calendar, DollarSign, ArrowUpRight, ArrowDownRight, X, Loader2, AlertCircle, Trash2, } from "lucide-react";
import { toast } from "sonner";
import { api } from "../lib/api";
export function TransactionsPage() {
    const [transactions, setTransactions] = useState([]);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");
    const loadData = async () => {
        try {
            setError(null);
            const [txns, ppl] = await Promise.all([api.transactions.list(), api.people.list()]);
            setTransactions(txns);
            setPeople(ppl);
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => { loadData(); }, []);
    const handleDelete = async (id) => {
        if (!confirm("Delete this transaction?"))
            return;
        try {
            await api.transactions.delete(id);
            setTransactions((prev) => prev.filter((t) => t._id !== id));
            toast.success("Transaction deleted");
        }
        catch {
            toast.error("Failed to delete transaction");
        }
    };
    const handleExport = () => {
        const csv = [
            ["Date", "Person", "Type", "Description", "Category", "Amount", "Status"],
            ...filteredTransactions.map((t) => [
                t.date, t.person_name, t.type, t.description, t.category, t.amount, t.status,
            ]),
        ]
            .map((row) => row.join(","))
            .join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "transactions.csv";
        a.click();
        toast.success("Exported as CSV");
    };
    const filteredTransactions = transactions.filter((t) => {
        const matchesSearch = t.person_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === "all" || t.type === filterType;
        const matchesStatus = filterStatus === "all" || t.status === filterStatus;
        return matchesSearch && matchesType && matchesStatus;
    });
    const totalGiven = transactions.filter((t) => t.type === "given").reduce((s, t) => s + t.amount, 0);
    const totalReceived = transactions.filter((t) => t.type === "received").reduce((s, t) => s + t.amount, 0);
    const totalBorrowed = transactions.filter((t) => t.type === "borrowed").reduce((s, t) => s + t.amount, 0);
    const net = totalGiven + totalReceived - totalBorrowed;
    return (_jsxs("div", { className: "space-y-6 pb-20 lg:pb-0", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-2", children: "Transactions" }), _jsx("p", { className: "text-gray-600", children: "View and manage all your transactions" })] }), _jsxs("div", { className: "flex gap-3", children: [_jsxs("button", { onClick: handleExport, className: "inline-flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors", children: [_jsx(Download, { className: "w-5 h-5" }), "Export"] }), _jsxs("button", { onClick: () => setShowAddModal(true), className: "inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm", children: [_jsx(Plus, { className: "w-5 h-5" }), "Add Transaction"] })] })] }), _jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
                    { label: "Total Given", value: totalGiven, icon: _jsx(ArrowUpRight, {}), color: "blue" },
                    { label: "Total Received", value: totalReceived, icon: _jsx(ArrowDownRight, {}), color: "green" },
                    { label: "Total Borrowed", value: totalBorrowed, icon: _jsx(ArrowDownRight, {}), color: "orange" },
                    { label: "Net Balance", value: net, icon: _jsx(DollarSign, {}), color: "purple", signed: true },
                ].map(({ label, value, icon, color, signed }) => (_jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5", children: [_jsx("div", { className: `inline-flex p-2 rounded-xl mb-3 bg-${color}-100 text-${color}-600`, children: _jsx("span", { className: "w-5 h-5", children: icon }) }), _jsx("div", { className: "text-xs text-gray-500 mb-1", children: label }), _jsxs("div", { className: `text-xl font-bold ${signed ? (value >= 0 ? "text-green-600" : "text-orange-600") : "text-gray-900"}`, children: [signed && value >= 0 ? "+" : "", "$", Math.abs(value).toLocaleString()] })] }, label))) }), _jsx("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-4", children: _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [_jsxs("div", { className: "lg:col-span-2 relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }), _jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Search transactions...", className: "w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("select", { value: filterType, onChange: (e) => setFilterType(e.target.value), className: "px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "all", children: "All Types" }), _jsx("option", { value: "given", children: "Given" }), _jsx("option", { value: "received", children: "Received" }), _jsx("option", { value: "borrowed", children: "Borrowed" })] }), _jsxs("select", { value: filterStatus, onChange: (e) => setFilterStatus(e.target.value), className: "px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "all", children: "All Status" }), _jsx("option", { value: "completed", children: "Completed" }), _jsx("option", { value: "pending", children: "Pending" })] })] }) }), loading && (_jsx("div", { className: "flex items-center justify-center py-20", children: _jsx(Loader2, { className: "w-8 h-8 text-blue-600 animate-spin" }) })), error && (_jsxs("div", { className: "flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700", children: [_jsx(AlertCircle, { className: "w-5 h-5 shrink-0" }), _jsxs("span", { children: [error, " \u2014 make sure the Flask server is running on port 5000."] })] })), !loading && !error && (_jsx("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-gray-50", children: _jsx("tr", { children: ["Date", "Person", "Type", "Description", "Category", "Amount", "Status", ""].map((h) => (_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: h }, h))) }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredTransactions.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: 8, className: "text-center py-12 text-gray-400", children: "No transactions found." }) })) : (filteredTransactions.map((t) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-700", children: [_jsx(Calendar, { className: "w-4 h-4 text-gray-400" }), new Date(t.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-xs font-medium", children: t.person_name.split(" ").map((n) => n[0]).join("") }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: t.person_name })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${t.type === "received" ? "bg-green-100 text-green-700" : t.type === "given" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`, children: [t.type === "received" ? _jsx(ArrowDownRight, { className: "w-3.5 h-3.5" }) : _jsx(ArrowUpRight, { className: "w-3.5 h-3.5" }), t.type.charAt(0).toUpperCase() + t.type.slice(1)] }) }), _jsx("td", { className: "px-6 py-4 max-w-xs", children: _jsx("span", { className: "text-sm text-gray-700 line-clamp-2", children: t.description }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: "text-sm text-gray-600", children: t.category }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: `text-sm font-semibold ${t.type === "received" ? "text-green-600" : t.type === "given" ? "text-blue-600" : "text-orange-600"}`, children: [t.type === "received" ? "+" : "-", "$", t.amount.toLocaleString()] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${t.status === "completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`, children: t.status.charAt(0).toUpperCase() + t.status.slice(1) }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("button", { onClick: () => handleDelete(t._id), className: "p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg", children: _jsx(Trash2, { className: "w-4 h-4" }) }) })] }, t._id)))) })] }) }) })), showAddModal && (_jsx(AddTransactionModal, { people: people, onClose: () => setShowAddModal(false), onSaved: () => { setShowAddModal(false); loadData(); } }))] }));
}
function AddTransactionModal({ people, onClose, onSaved, }) {
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        person_id: "",
        type: "given",
        amount: 0,
        description: "",
        category: "",
        date: new Date().toISOString().split("T")[0],
        status: "pending",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.person_id) {
            toast.error("Select a person");
            return;
        }
        if (!formData.amount || formData.amount <= 0) {
            toast.error("Enter a valid amount");
            return;
        }
        setSaving(true);
        try {
            await api.transactions.create(formData);
            toast.success("Transaction added!");
            onSaved();
        }
        catch (err) {
            toast.error(err.message || "Failed to add transaction");
        }
        finally {
            setSaving(false);
        }
    };
    return (_jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto", children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Add Transaction" }), _jsx("button", { onClick: onClose, className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg", children: _jsx(X, { className: "w-5 h-5" }) })] }), _jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Person *" }), _jsxs("select", { value: formData.person_id, onChange: (e) => setFormData({ ...formData, person_id: e.target.value }), className: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", required: true, children: [_jsx("option", { value: "", children: "Select a person" }), people.map((p) => (_jsx("option", { value: p._id, children: p.name }, p._id)))] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Type *" }), _jsxs("select", { value: formData.type, onChange: (e) => setFormData({ ...formData, type: e.target.value }), className: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "given", children: "Given (I lent)" }), _jsx("option", { value: "received", children: "Received (payment from them)" }), _jsx("option", { value: "borrowed", children: "Borrowed (I took loan)" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Amount *" }), _jsxs("div", { className: "relative", children: [_jsx(DollarSign, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }), _jsx("input", { type: "number", value: formData.amount || "", onChange: (e) => setFormData({ ...formData, amount: parseFloat(e.target.value) }), className: "w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "0.00", min: "0.01", step: "0.01", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Date *" }), _jsx("input", { type: "date", value: formData.date, onChange: (e) => setFormData({ ...formData, date: e.target.value }), className: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Category" }), _jsx("input", { type: "text", value: formData.category, onChange: (e) => setFormData({ ...formData, category: e.target.value }), className: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "e.g. Personal Loan, Medical" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Status" }), _jsxs("select", { value: formData.status, onChange: (e) => setFormData({ ...formData, status: e.target.value }), className: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "pending", children: "Pending" }), _jsx("option", { value: "completed", children: "Completed" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Description" }), _jsx("textarea", { value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), className: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none", rows: 3, placeholder: "Add notes..." })] }), _jsxs("div", { className: "flex gap-3 pt-2", children: [_jsx("button", { type: "button", onClick: onClose, className: "flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50", children: "Cancel" }), _jsxs("button", { type: "submit", disabled: saving, className: "flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-60 flex items-center justify-center gap-2", children: [saving && _jsx(Loader2, { className: "w-4 h-4 animate-spin" }), saving ? "Saving..." : "Add Transaction"] })] })] })] }) }));
}
