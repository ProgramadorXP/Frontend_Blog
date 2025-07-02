

export default function SearchInput() {
  return (
    <form className="relative w-full max-w-xs">
      <input
        type="text"
        id="searchInput"
        placeholder="Buscar..."
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-border text-gray-900 focus:outline-none focus:ring-2 focus:ring-foreground transition"
      />
      <span className="absolute left-3 top-2.5 text-gray-400">
        {/* Search icon */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-3.5-3.5" />
        </svg>
      </span>
    </form>
  );
}