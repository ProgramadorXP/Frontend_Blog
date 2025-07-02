export default function SearchInput() {
  return (
    <form className="relative w-full max-w-xs">
      <input
        type="text"
        id="searchInput"
        placeholder="Buscar..."
        className="w-full pl-10 pr-4 py-2 bg-border text-muted-gray rounded-none border-b border-transparent focus:border-b focus:border-gold-accent focus:text-light-gray focus:outline-none transition"
      />
      <span className="absolute left-3 top-2.5 text-muted-gray">
        {/* Search icon */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-3.5-3.5" />
        </svg>
      </span>
    </form>
  );
}