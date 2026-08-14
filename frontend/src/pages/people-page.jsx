import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Plus, Search, Grid3x3, List, Phone, Mail, TrendingUp, TrendingDown, MoreVertical, Trash2, X, Calculator, DollarSign, Loader2, AlertCircle, } from "lucide-react";
import { toast } from "sonner";
import { api } from "../lib/api";
export function PeoplePage() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [view, setView] = useState("grid");
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const loadPeople = async () => {
        try {
            setError(null);
            const data = await api.people.list();
            setPeople(data);
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        loadPeople();
    }, []);
    const handleDelete = async (id) => {
        if (!confirm("Delete this person and all their transactions?"))
            return;
        try {
            await api.people.delete(id);
            setPeople((prev) => prev.filter((p) => p._id !== id));
            toast.success("Person deleted");
        }
        catch {
            toast.error("Failed to delete person");
        }
    };
    const filteredPeople = people.filter((person) => {
        const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.email.toLowerCase().includes(searchQuery.toLowerCase());
        const balance = person.balance ?? 0;
        const status = balance >= 0 ? "they-owe" : "you-owe";
        const matchesFilter = filterStatus === "all" || status === filterStatus;
        return matchesSearch && matchesFilter;
    });
    return (_jsxs("div", { className: "space-y-6 pb-20 lg:pb-0", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-2", children: "People" }), _jsx("p", { className: "text-gray-600", children: "Manage people you lend to or borrow from" })] }), _jsxs("button", { onClick: () => setShowAddModal(true), className: "inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm", children: [_jsx(Plus, { className: "w-5 h-5" }), "Add Person"] })] }), _jsx("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-4", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-4", children: [_jsx("div", { className: "flex-1", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }), _jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Search by name or email...", className: "w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("select", { value: filterStatus, onChange: (e) => setFilterStatus(e.target.value), className: "px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [_jsx("option", { value: "all", children: "All Status" }), _jsx("option", { value: "they-owe", children: "They Owe" }), _jsx("option", { value: "you-owe", children: "You Owe" })] }), _jsxs("div", { className: "flex items-center gap-1 p-1 bg-gray-50 rounded-xl border border-gray-200", children: [_jsx("button", { onClick: () => setView("grid"), className: `p-2 rounded-lg transition-colors ${view === "grid" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"}`, children: _jsx(Grid3x3, { className: "w-5 h-5" }) }), _jsx("button", { onClick: () => setView("list"), className: `p-2 rounded-lg transition-colors ${view === "list" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"}`, children: _jsx(List, { className: "w-5 h-5" }) })] })] })] }) }), loading && (_jsx("div", { className: "flex items-center justify-center py-20", children: _jsx(Loader2, { className: "w-8 h-8 text-blue-600 animate-spin" }) })), error && (_jsxs("div", { className: "flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700", children: [_jsx(AlertCircle, { className: "w-5 h-5 shrink-0" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Cannot connect to backend" }), _jsxs("p", { className: "text-sm mt-0.5", children: [error, " \u2014 make sure the Flask server is running on port 5000."] })] })] })), !loading && !error && (view === "grid" ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6", children: filteredPeople.length === 0 ? (_jsx("div", { className: "col-span-3 text-center py-16 text-gray-500", children: "No people found. Add your first person!" })) : (filteredPeople.map((person) => (_jsx(PersonCard, { person: person, onDelete: handleDelete, onRefresh: loadPeople }, person._id)))) })) : (_jsx("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-gray-50", children: _jsx("tr", { children: ["Name", "Contact", "Balance", "Status", "Transactions", "Actions"].map((h) => (_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: h }, h))) }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredPeople.map((person) => {
                                    const balance = person.balance ?? 0;
                                    const theyOwe = balance >= 0;
                                    return (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-medium", children: person.name.split(" ").map((n) => n[0]).join("") }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: person.name })] }) }), _jsx("td", { className: "px-6 py-4", children: _jsxs("div", { className: "space-y-1", children: [_jsx("div", { className: "text-sm text-gray-700", children: person.email }), _jsx("div", { className: "text-xs text-gray-500", children: person.phone })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: `text-sm font-semibold ${theyOwe ? "text-green-600" : "text-orange-600"}`, children: ["$", Math.abs(balance).toLocaleString()] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${theyOwe ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`, children: [theyOwe ? _jsx(TrendingUp, { className: "w-3.5 h-3.5" }) : _jsx(TrendingDown, { className: "w-3.5 h-3.5" }), theyOwe ? "They Owe" : "You Owe"] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: "text-sm text-gray-500", children: [person.transaction_count ?? 0, " txns"] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right", children: _jsx("button", { onClick: () => handleDelete(person._id), className: "p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg", children: _jsx(Trash2, { className: "w-4 h-4" }) }) })] }, person._id));
                                }) })] }) }) }))), showAddModal && (_jsx(AddPersonModal, { onClose: () => setShowAddModal(false), onSaved: () => { setShowAddModal(false); loadPeople(); } }))] }));
}
function PersonCard({ person, onDelete, onRefresh }) {
    const [showMenu, setShowMenu] = useState(false);
    const balance = person.balance ?? 0;
    const theyOwe = balance >= 0;
    return (_jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-semibold text-lg", children: person.name.split(" ").map((n) => n[0]).join("") }), _jsxs("div", { className: "relative", children: [_jsx("button", { onClick: () => setShowMenu(!showMenu), className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg", children: _jsx(MoreVertical, { className: "w-5 h-5" }) }), showMenu && (_jsx("div", { className: "absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-10", children: _jsxs("button", { onClick: () => { setShowMenu(false); onDelete(person._id); }, className: "w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2", children: [_jsx(Trash2, { className: "w-4 h-4" }), "Delete"] }) }))] })] }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-1", children: person.name }), _jsxs("div", { className: "space-y-2 mb-4", children: [person.email && (_jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [_jsx(Mail, { className: "w-4 h-4" }), person.email] })), person.phone && (_jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [_jsx(Phone, { className: "w-4 h-4" }), person.phone] }))] }), _jsxs("div", { className: "pt-4 border-t border-gray-200", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Total Balance" }), _jsxs("div", { className: `text-xl font-bold ${theyOwe ? "text-green-600" : "text-orange-600"}`, children: ["$", Math.abs(balance).toLocaleString()] })] }), _jsxs("span", { className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${theyOwe ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`, children: [theyOwe ? _jsx(TrendingUp, { className: "w-3.5 h-3.5" }) : _jsx(TrendingDown, { className: "w-3.5 h-3.5" }), theyOwe ? "They Owe" : "You Owe"] })] }), _jsxs("div", { className: "text-xs text-gray-500 mt-2", children: [person.transaction_count ?? 0, " transaction", (person.transaction_count ?? 0) !== 1 ? "s" : ""] })] })] }));
}
const emptyEntry = () => ({
    amount: "",
    type: "given",
    description: "",
    category: "General",
});
function AddPersonModal({ onClose, onSaved }) {
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [entries, setEntries] = useState([emptyEntry()]);
    const updateEntry = (idx, field, value) => {
        setEntries((prev) => prev.map((e, i) => (i === idx ? { ...e, [field]: value } : e)));
    };
    const addEntry = () => setEntries((prev) => [...prev, emptyEntry()]);
    const removeEntry = (idx) => {
        if (entries.length === 1)
            return;
        setEntries((prev) => prev.filter((_, i) => i !== idx));
    };
    const totalGiven = entries
        .filter((e) => e.type === "given" && e.amount)
        .reduce((sum, e) => sum + parseFloat(e.amount || "0"), 0);
    const totalBorrowed = entries
        .filter((e) => e.type === "borrowed" && e.amount)
        .reduce((sum, e) => sum + parseFloat(e.amount || "0"), 0);
    const netBalance = totalGiven - totalBorrowed;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            toast.error("Name is required");
            return;
        }
        setSaving(true);
        try {
            await api.people.create({ ...formData, entries });
            toast.success(`${formData.name} added successfully!`);
            onSaved();
        }
        catch (err) {
            toast.error(err.message || "Failed to add person");
        }
        finally {
            setSaving(false);
        }
    };
    return (_jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[92vh] flex flex-col", children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Add New Person" }), _jsx("button", { onClick: onClose, className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg", children: _jsx(X, { className: "w-5 h-5" }) })] }), _jsx("div", { className: "overflow-y-auto flex-1", children: _jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-5", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Full Name *" }), _jsx("input", { type: "text", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), className: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "John Doe", required: true })] }), _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Email" }), _jsx("input", { type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), className: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "john@example.com" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-900 mb-2", children: "Phone" }), _jsx("input", { type: "tel", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), className: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "+1 555 000 0000" })] })] })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx(Calculator, { className: "w-4 h-4 text-blue-600" }), _jsx("span", { className: "text-sm font-semibold text-gray-900", children: "Amount Calculator" }), _jsx("span", { className: "text-xs text-gray-500", children: "(optional)" })] }), _jsxs("div", { className: "space-y-3", children: [entries.map((entry, idx) => (_jsxs("div", { className: "p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-xs font-medium text-gray-500", children: ["Entry ", idx + 1] }), entries.length > 1 && (_jsx("button", { type: "button", onClick: () => removeEntry(idx), className: "text-red-400 hover:text-red-600", children: _jsx(X, { className: "w-4 h-4" }) }))] }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [_jsxs("div", { className: "relative", children: [_jsx(DollarSign, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }), _jsx("input", { type: "number", value: entry.amount, onChange: (e) => updateEntry(idx, "amount", e.target.value), className: "w-full pl-8 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "0.00", min: "0", step: "0.01" })] }), _jsxs("select", { value: entry.type, onChange: (e) => updateEntry(idx, "type", e.target.value), className: "px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "given", children: "I Lent" }), _jsx("option", { value: "borrowed", children: "I Borrowed" })] })] }), _jsx("input", { type: "text", value: entry.description, onChange: (e) => updateEntry(idx, "description", e.target.value), className: "w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "Description (e.g. Lunch, Business)" }), _jsx("input", { type: "text", value: entry.category, onChange: (e) => updateEntry(idx, "category", e.target.value), className: "w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "Category (e.g. Personal, Medical)" })] }, idx))), _jsxs("button", { type: "button", onClick: addEntry, className: "w-full py-2 border-2 border-dashed border-blue-300 text-blue-600 text-sm rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center gap-1.5", children: [_jsx(Plus, { className: "w-4 h-4" }), "Add Another Amount"] })] }), (totalGiven > 0 || totalBorrowed > 0) && (_jsxs("div", { className: "mt-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-100", children: [_jsx("p", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2", children: "Summary" }), _jsxs("div", { className: "space-y-1 text-sm", children: [totalGiven > 0 && (_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Total I Lent" }), _jsxs("span", { className: "font-semibold text-blue-700", children: ["+$", totalGiven.toLocaleString()] })] })), totalBorrowed > 0 && (_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Total I Borrowed" }), _jsxs("span", { className: "font-semibold text-orange-700", children: ["-$", totalBorrowed.toLocaleString()] })] })), _jsxs("div", { className: "flex justify-between pt-2 border-t border-blue-200 font-semibold", children: [_jsx("span", { className: "text-gray-900", children: "Net Balance" }), _jsxs("span", { className: netBalance >= 0 ? "text-green-700" : "text-orange-700", children: [netBalance >= 0 ? "+" : "", "$", netBalance.toLocaleString()] })] })] })] }))] }), _jsxs("div", { className: "flex gap-3 pt-2", children: [_jsx("button", { type: "button", onClick: onClose, className: "flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors", children: "Cancel" }), _jsxs("button", { type: "submit", disabled: saving, className: "flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2", children: [saving ? _jsx(Loader2, { className: "w-4 h-4 animate-spin" }) : null, saving ? "Saving..." : "Add Person"] })] })] }) })] }) }));
}
